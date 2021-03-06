import {
  ButtonLayoutDisplay,
  ButtonMaker,
  DialogInitializer,
  DialogLayoutDisplay,
} from "@costlydeveloper/ngx-awesome-popup";
import { Transaction, TransactionReceipt, Wallet } from "@hashgraph/sdk";
import { HashConnect, HashConnectTypes, MessageTypes } from "hashconnect";
import { useEffect, useState } from "react";
import AlertDialog from "../components/hashDialog";
export default function Hashbutton ({color}) {
  // !! this line is a duplicate and unsure what will be the effects
  const hashconnect: HashConnect = new HashConnect(true);
  const [status, setStatus] = useState("disconnected");
  const a: HashConnectTypes.WalletMetadata[] = new Array(0);
  const [availableExtensions, sae] = useState(a);
  const [saveData, ssd] /* {
    
    topic: string;
    pairingString: string;
    privateKey?: string;
    pairedWalletData?: HashConnectTypes.WalletMetadata;
    pairedAccounts: string[];
  }  */ = useState({
    topic: "",
    pairingString: "",
    privateKey: undefined,
    pairedWalletData: undefined,
    pairedAccounts: [],
  });
  const [pk, spk] = useState('guest');

  const appMetadata: HashConnectTypes.AppMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "https://www.hashpack.app/img/logo.svg",
  };

  async function initHashconnect() {
    //create the hashconnect instance
    //const hashconnect = new HashConnect(true);
    localStorage.removeItem("hashconnectData");
    if (!saveData.topic) {
      //first init, store the private key in localstorage
      let initData = await hashconnect.init(appMetadata);
      ssd(data => { data.privateKey = initData.privKey; return data });

      //then connect, storing the new topic in localstorage
      const state = await hashconnect.connect();
      console.log("Received state", state);
      ssd(data => { data.topic = state.topic; return data })

      //generate a pairing string, which you can display and generate a QR code from
      ssd(data => {
        data.pairingString = hashconnect.generatePairingString(
          state,
          "mainnet",
          true
        ); return data
      })

      //find any supported local wallets
      hashconnect.findLocalWallets();

      setStatus("click to pair");
    } else {
      await hashconnect.init(appMetadata, saveData.privateKey);
      await hashconnect.connect(saveData.topic, saveData.pairedWalletData);

      setStatus("paired");
    }

    setUpEvents();
  }

  function setUpEvents() {
    hashconnect.foundExtensionEvent.on((data) => {
      sae((s) => {
        s.push(data);
        return s;
      });
      console.log("Found extension", data);
      console.log(data.publicKey);
    });

    // hashconnect.additionalAccountResponseEvent.on((data) => {
    //     console.log("Received account info", data);

    //     data.accountIds.forEach(id => {
    //         if(saveData.pairedAccounts.indexOf(id) == -1)
    //             saveData.pairedAccounts.push(id);
    //     })
    // })

    hashconnect.pairingEvent.on((data) => {
      console.log("Paired with wallet", data);
      setStatus("paired");

      ssd(d => { d.pairedWalletData = data.metadata; return d });

      data.accountIds.forEach((id) => {
        if (saveData.pairedAccounts.indexOf(id) == -1)
          ssd((s) => {
            s.pairedAccounts.push(id);
            return s;
          });


      });

      saveDataInLocalstorage();



    });
    hashconnect.transactionEvent.on((data) => {
      //this will not be common to be used in a dapp
      console.log("transaction event callback");
    });
  }
  async function connectToExtension() {
    hashconnect.connectToLocalWallet(saveData.pairingString);
  }
  async function sendTransaction(
    trans: Uint8Array,
    acctToSign: string,
    return_trans: boolean = false
  ) {
    const transaction: MessageTypes.Transaction = {
      topic: saveData.topic,
      byteArray: trans,

      metadata: {
        accountToSign: acctToSign,
        returnTransaction: return_trans,
      },
    };

    return await hashconnect.sendTransaction(saveData.topic, transaction);
  }
  async function requestAccountInfo() {
    let request: MessageTypes.AdditionalAccountRequest = {
      topic: saveData.topic,
      network: "mainnet",
      multiAccount: true,
    };

    await hashconnect.requestAdditionalAccounts(saveData.topic, request);
  }

  function saveDataInLocalstorage() {
    let data = JSON.stringify(saveData);

    localStorage.setItem("hashconnectData", data);
  }
  useEffect(() => {
    async function init() {
      let foundData = localStorage.getItem("hashconnectData");

      if (foundData) {
        ssd(JSON.parse(foundData));
        console.log("Found local data", saveData, foundData);


      }
      await initHashconnect();
      await saveDataInLocalstorage();
      spk(saveData.pairedAccounts[0] || 'guest')
    }
    init();
  }, [])

  function clearPairings() {
    ssd(d => { d.pairedAccounts = []; d.pairedWalletData = undefined; return d })
    setStatus("disconnected");
    localStorage.removeItem("hashconnectData");
  }

  function showResultOverlay(data: any) {
    return AlertDialog(data);

    // const dialogPopup = new DialogInitializer(ResultModalComponent);

    // dialogPopup.setCustomData({ data: data });

    // dialogPopup.setConfig({
    //     width: '500px',
    //     layoutType: DialogLayoutDisplay.NONE
    // });

    // dialogPopup.setButtons([
    //     new ButtonMaker('Done', 'send', ButtonLayoutDisplay.SUCCESS)
    // ]);

    // dialogPopup.openDialog$().subscribe(resp => { });
  }
  return (
    <button
      style={{ backgroundColor: '#9140bf', borderRadius: 10,color:'white'}}
      onClick={async () => {

        await connectToExtension();
        //spk("???")
        //alert("This button may not work as expected yet. Your pairing string is \"" + saveData.pairingString + "\"");
        //this thing will cause issue in case of multiple connected accounts but idk how one can connect multiple accounts
        setTimeout(() => spk(saveData.pairedAccounts[0] || 'pending'), 1)
        setTimeout(() => spk(saveData.pairedAccounts[0] || 'pending'), 10000)
        setTimeout(() => spk(saveData.pairedAccounts[0] || 'pending'), 20000)
        setTimeout(() => spk(saveData.pairedAccounts[0] || 'timed out'), 30000)


      }}
    >
      ???? Hashpack wallet{" | " + status + " | " + pk}
    </button>
  );
}
