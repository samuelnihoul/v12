<template>
  <div>
    <q-img src="@/assets/images/tucan.jpg" height="500">
      <h1>Contact Us {{wallet.publicKey}}</h1></q-img
    >
    <q-btn @click="test">test</q-btn>
    <h2>Contact Details</h2>
    <div class="container">
      <div class="container">
        <p>icon</p>

        <div class="vcontainer">
          <h2>Call Us</h2>
          <p>+33970406998</p>
        </div>
      </div>
      <div class="container">
        <p>icon</p>

        <div class="vcontainer">
          <h2>Email Us</h2>
          <p>contact@harmonia-eko.ooo</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import {defineComponent} from "vue"
import {useWallet, initWallet }from "@solana/wallet-adapter-vue"
import { getPhantomWallet, WalletName } from '@solana/wallet-adapter-wallets';

// Initialise the wallet store once.
const wallets = [getPhantomWallet()]
initWallet({ wallets, autoConnect: true });

const { wallet, select, connect, disconnect, connected, sendTransaction } = useWallet();
select(WalletName.Phantom)

function test() {
  console.log(wallet);
  
}

</script>



<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-size: large;
  width: 50%;
  font-size: 1.7em;
}
.vcontainer {
  display: flex;
  flex-direction: column;
  font-size: large;
  width: 50%;
  font-size: 1em;
}
h1 {
  color: white;
  font-size: 10em;
}
q-img {
  align-items: bottom;
  display: flex;
}
h2 {
  text-align: center;
}
</style>
