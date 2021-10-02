<template>
  <v-row>
    <div class="col-md-4" v-for="i in 3" :key="i">
      <card-project></card-project>
    </div>
    <div class="w-100 text-center">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const page = ref(1)
    return {
      page,
    }
  },
})
</script>

<style scoped>
</style>