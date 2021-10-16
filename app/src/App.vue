<template>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
// import { initWallet, useWallet } from "@solana/wallet-adapter-vue";
// import { getPhantomWallet, WalletName } from "@solana/wallet-adapter-wallets";
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    onBeforeMount(() => {
      console.log("baam");

      // const wallets = [getPhantomWallet()];
      // initWallet({ wallets, autoConnect: true });
      // const { select } = useWallet();

      // select(WalletName.Phantom);
    });
  },
});
</script>
