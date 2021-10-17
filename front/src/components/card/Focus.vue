<template>
  <q-card>
    <div class="text-center px-xl-4 pb-5">
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <h4 v-text="title" class="mb-3"></h4>
      <p class="" v-text="body"></p>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["image", "body", "title"],
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 150px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>