<template>
  <div>
    <v-row>
      <div class="col-md-3">
        <v-select
          :items="['name', 'description', 'active', 'action']"
          label="Filtrer"
        ></v-select>
      </div>
    </v-row>
    <v-row>
      <div class="col-md-4 col-xl-3" v-for="i in 6" :key="i">
        <card-project></card-project>
      </div>
    </v-row>
    <div class="w-100 text-center mt-4">
      <v-pagination v-model="page" :length="5" circle></v-pagination>
    </div>
  </div>
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