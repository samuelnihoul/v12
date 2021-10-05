<template>
  <v-badge overlap content="2">
    <v-card class="little-card">
      <v-icon>mdi-weather-sunny</v-icon>
    </v-card>
  </v-badge>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.little-card {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-size: 2em;
  }
}
</style>