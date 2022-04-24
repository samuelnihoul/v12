import {HashConnect, HashConnectTypes} from 'hashconnect'

let hashconnect: HashConnect;
    
let saveData = {
    topic: "",
    pairingString: "",
    privateKey: "",
    pairedWalletData: null,
    pairedAccounts: []
}

let appMetadata: HashConnectTypes.AppMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "https://www.hashpack.app/img/logo.svg"
}

async function initHashconnect() {
    //create the hashconnect instance
    hashconnect = new HashConnect();

    if(!loadLocalData()){
        //first init and store the private for later
        let initData = await hashconnect.init(appMetadata);
        saveData.privateKey = initData.privKey;

        //then connect, storing the new topic for later
        const state = await hashconnect.connect();
        saveData.topic = state.topic;
        
        //generate a pairing string, which you can display and generate a QR code from
        saveData.pairingString = hashconnect.generatePairingString(state, "testnet", true);
        
        //find any supported local wallets
        hashconnect.findLocalWallets();
    }
    else {
        //use loaded data for initialization + connection
        await hashconnect.init(appMetadata, saveData.privateKey);
        await hashconnect.connect(saveData.topic, saveData.pairedWalletData);
    }
}

function loadLocalData(): boolean {
    let foundData = localStorage.getItem("hashconnectData");

    if(foundData){
        saveData = JSON.parse(foundData);
        return true;
    }
    else
        return false;
}