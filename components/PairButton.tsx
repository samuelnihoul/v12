import { Client } from '@hashgraph/sdk'
import { useState } from 'react'
import {init, pair}from '../helpers/hashconnect'
function genqr() {
    
}
const client = Client.forTestnet
export default function () {
    const [connected, setConnected]=useState(false)
    return (
        <button style={{backgroundColor:'purple', borderRadius:10}} onClick={async ()=>{await init();pair();sessionStorage.getItem('connectetd')=='true'?setConnected(true):null}}>🔗🎒{connected?'- 🟢':''}</button>
    )
}