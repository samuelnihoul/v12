<template>
  <div>
    <q-img src="@/assets/images/tucan.jpg" height="500">
      <h1>Contact Us</h1></q-img
    >
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
<script>
import {useWallet }from "@solana/wallet-adapter-vue" 
const wallet = useWallet()
export default wallet
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
