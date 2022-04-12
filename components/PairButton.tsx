import { Client } from '@hashgraph/sdk'
import {init, pair}from '../helpers/hashconnect'

export default function () {
    return (
        <button style={{backgroundColor:'purple', borderRadius:20, marginLeft:'1vw'}} onClick={async ()=>{await init();pair()}}>🔗🎒{sessionStorage.getItem('connectetd')=='true'?'- 🟢':''}</button>
    )
}