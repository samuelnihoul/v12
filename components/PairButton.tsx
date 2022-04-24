import { Client } from '@hashgraph/sdk'
import { useState } from 'react'
import {showResultOverlay,clearPairings,requestAccountInfo,sendTransaction,connectToExtension,initHashconnect,status,availableExtensions } from '../helpers/hashconnect'
export default function () {
    return (
        <button style={{backgroundColor:'purple', borderRadius:10}} onClick={async ()=>{await initHashconnect();connectToExtension()}}>🔗🎒{status?'- 🟢':''}</button>
    )
}