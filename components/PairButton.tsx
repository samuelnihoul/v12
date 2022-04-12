import { Client } from '@hashgraph/sdk'
import {init, pair}from '../helpers/hashconnect'
function genqr() {
    
}
const client = Client.forTestnet

export default function () {
    return (
        <button style={{backgroundColor:'purple', borderRadius:'20'}} onClick={async ()=>{await init();pair()}}>🔗🎒{sessionStorage.getItem('connectetd')=='true'?'- 🟢':''}</button>
    )
}