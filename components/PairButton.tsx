import { Client } from '@hashgraph/sdk'
import {init, pair}from '../helpers/hashconnect'
function genqr() {
    
}
const client = Client.forTestnet

export default function () {
    return (
        <button style={{backgroundColor:'purple'}} onClick={async ()=>{await init();pair()}}>🔗🎒</button>
    )
}