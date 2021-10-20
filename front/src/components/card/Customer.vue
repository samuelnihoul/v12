<template>
  <q-card class="customer-card">
    <q-icon
      color="primary"
      class="customer-icon"
      name="mdi-format-quote-open"
    ></q-icon>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
      corrupti hic asperiores at consectetur, aperiam
    </p>
    <div class="d-flex align-items-center mb-2">
      <div>
        <q-avatar class="ml-0 mr-3">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </q-avatar>
      </div>
      <div>
        <h5 class="m-0">JOHN DOE</h5>

        <p class="mb-0">Responsable</p>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.customer-card {
  padding: 10px;
  .customer-icon {
    font-size: 3.5em;
  }
}
</style>