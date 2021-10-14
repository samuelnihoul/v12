<template>
  <q-img src="@/assets/images/back.jpg" style="height: 500px" width="100%">
    <div class="content d-flex align-items-center">
      <div class="my-content">
        <h2 class="t1">OFFSET</h2>
        <h2 class="font-weight-medium font-italic">your emissions</h2>
        <p class="text-h5 font-weight-regular mt-8">
          After reducing your climate impact, offsetting is an effective way to
          reduce emissions globally and create sustainable development benefits
          for communities around the world. And why not aim high? Go Climate+
          rather than simply carbon neutral and offset more than your footprint.
        </p>
      </div>
    </div>
  </q-img>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.my-content {
  color: #fff;
  width: 70%;
  margin: 0 auto;

  .t1 {
    font-size: 2em;
  }
  .text {
    margin-top: 30px;
  }
}

.content {
  height: 100%;
  width: 100%;
}
</style>