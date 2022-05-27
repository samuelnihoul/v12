import {
  ButtonLayoutDisplay,
  ButtonMaker,
  DialogInitializer,
  DialogLayoutDisplay,
} from "@costlydeveloper/ngx-awesome-popup";
import { Transaction, TransactionReceipt, Wallet } from "@hashgraph/sdk";
import { HashConnect, HashConnectTypes, MessageTypes } from "hashconnect";
import { useState } from "react";
import AlertDialog from "../components/hashDialog";
export default function () {
  // !! this line is a duplicate and unsure what will be the effects
  const hashconnect: HashConnect = new HashConnect(true);
  const [status, setStatus] = useState("");
  const a: HashConnectTypes.WalletMetadata[] = new Array(0);
  const [availableExtensions, sae] = useState(a);
  const [pk, spk] = useState("guest");

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

  const appMetadata: HashConnectTypes.AppMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "https://www.hashpack.app/img/logo.svg",
  };

  async function initHashconnect() {
    //create the hashconnect instance
    const hashconnect = new HashConnect(true);
    console.log('init hashconnect')
    if (!loadLocalData()) {
      console.log('no local data')
      //first init, store the private key in localstorage
      let initData = await hashconnect.init(appMetadata);
      saveData.privateKey = initData.privKey;

      //then connect, storing the new topic in localstorage
      const state = await hashconnect.connect();
      console.log("Received state", state);
      saveData.topic = state.topic;

      //generate a pairing string, which you can display and generate a QR code from
      saveData.pairingString = hashconnect.generatePairingString(
        state,
        "mainnet",
        true
      );

      //find any supported local wallets
      hashconnect.findLocalWallets();
      console.log('just ran findlocalWallets')

      setStatus("connected");
    } else {
      await hashconnect.init(appMetadata, saveData.privateKey);
      await hashconnect.connect(saveData.topic, saveData.pairedWalletData!);

      setStatus("paired");
    }

    setUpEvents();
  }

  function setUpEvents() {
    console.log('setUpEvents');
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

      saveData.pairedWalletData = data.metadata;

      data.accountIds.forEach((id) => {
        if (saveData.pairedAccounts.indexOf(id) == -1)
          ssd((s) => {
            s.pairedAccounts.push(id);
            return s;
          });


      });
      console.log('pairing event fired')
      saveDataInLocalstorage();



    });
    hashconnect.transactionEvent.on((data) => {
      //this will not be common to be used in a dapp
      console.log("transaction event callback");
    });
  }
  async function connectToExtension() {
    console.log('connectToExtension')
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
    console.log("saveDataInLocalstorage")
    let data = JSON.stringify(saveData);

    localStorage.setItem("hashconnectData", data);
  }

  function loadLocalData(): boolean {
    let foundData = localStorage.getItem("hashconnectData");

    if (foundData) {
      ssd(JSON.parse(foundData));
      console.log("Found local data", saveData);
      return true;
    } else return false;
  }

  function clearPairings() {
    saveData.pairedAccounts = [];
    saveData.pairedWalletData = undefined;
    setStatus("connected");
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
      style={{ backgroundColor: "purple", borderRadius: 10 }}
      onClick={async () => {
        // alert("This button may not work      as expected yet.");
        await initHashconnect();

        await saveDataInLocalstorage();



        await connectToExtension();
      }}
    >
      🔗🎒{status + " " + pk}
    </button>
  );
}
