<template>
  <v-text-field outlined class="rounded-input" :placeholder="placeholder">
    <template #prepend-inner>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
</style>