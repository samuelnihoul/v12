<template>
  <q-table :columns="columns" :rows="items" row-key="name">
    <template #no-data>
      <h5>There are no issuances.</h5>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      columns: [
        {
          label: "Vintage",
          name: "calories",
          field: "calories",
          sortable: true,
        },
        {
          label: "Quantity",
          name: "fat",
          field: "fat",
          sortable: true,
        },
        { label: "Product", name: "carbs", field: "carbs" },
        {
          label: "Insuance Dates",
          name: "protein",
          field: "protein",
          sortable: true,
        },
        { label: "Actions", name: "iron", field: "iron" },
      ],
      items: [],
    };
  },
});
</script>

<style scoped>
</style>