import { HashConnect, HashConnectTypes } from 'hashconnect'
import { allowedNodeEnvironmentFlags } from 'process';
let hashconnect = new HashConnect
let appMetadata: HashConnectTypes.AppMetadata = {
    name: "Karbon Basar",
    description: "The web3 carbon offset marketplace",
    icon: "/assets/images/D21.png"
}
async function init() {
    let initData
    //maybe here it automatically becomes 'undefined' when queried, if non existinng
    localStorage.getItem('toxen')?localStorage.getItem('toxen')!=='undefined'?initData=localStorage.getItem('toxen'):initData = await hashconnect.init(appMetadata):'';
    //console.log('init')
    let privateKey = initData.privKey; 
    localStorage.setItem('toxen',privateKey)
}
async function connectToNodNPairingString() {
    
    let state = await hashconnect.connect();
let topic
    localStorage.getItem('topi') ? topic = state.topic + localStorage.setItem('topi', topic) : topic
    return hashconnect.generatePairingString(state, "testnet", false);//tihs is the pairing string
}
// function findWallet() {
//    return hashconnect.findLocalWallets()
// }
async function setConnected(a:boolean){
    sessionStorage.setItem('connectetd',a?'true':'false')
}
async function pair() {
    hashconnect.foundExtensionEvent.once((walletMetadata)=>{sessionStorage.setItem('theDudeHasHashpack','true')})
    hashconnect.findLocalWallets()
    sessionStorage.getItem('theDudeHasHashpack')? hashconnect.connectToLocalWallet(await connectToNodNPairingString().then((e)=>{setConnected(true);return e})):alert('Please install the Hashpack browser extension 😊')
   
    
}

export {init, pair,connectToNodNPairingString}