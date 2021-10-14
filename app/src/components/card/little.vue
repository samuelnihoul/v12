<template>
  <q-badge label="2">
    <q-card class="little-card">
      <q-icon>mdi-weather-sunny</q-icon>
    </q-card>
  </q-badge>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.little-card {
  $side: 60px;
  height: $side;
  width: $side;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-size: 2em;
  }
}
</style>