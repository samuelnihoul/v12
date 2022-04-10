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
    localStorage.getItem('toxen')?initData = await hashconnect.init(appMetadata):initData;
    console.log('init')
    let privateKey = initData.privKey; 
    localStorage.setItem('toxen',privateKey)
}
async function connectToNodNPairingString() {
    console.log(hashconnect)
    let state = await hashconnect.connect();
let topic
    localStorage.getItem('toxen') ? topic = state.topic + localStorage.setItem('topi', topic) : topic
    return hashconnect.generatePairingString(state, "testnet", false);//tihs is the pairing string
}
// function findWallet() {
//    return hashconnect.findLocalWallets()
// }
async function pair() {
    hashconnect.connectToLocalWallet(await connectToNodNPairingString())
}

export {init, pair,connectToNodNPairingString}