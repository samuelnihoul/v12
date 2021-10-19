<template>
  <my-data-table :headers="headers" :items="items">
    <template #no-data>
      <h5>There are no issuances.</h5>
    </template>
  </my-data-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyDataTable from "@/components/MyDataTable.vue";
export default defineComponent({
  components: {
    MyDataTable,
  },
  data() {
    return {
      headers: [
        {
          text: "Vintage",
          value: "vintage",
          sortable: true,
        },
        { text: "Quantity", value: "quantity", sortable: true },
        { text: "Product", value: "product" },
        { text: "Insuance Dates", value: "date", sortable: true },
        { text: "Actions", value: "actions" },
      ],
      items: [
        {
          vintage: "ok",
          quantity: "ok",
          date: "ok",
          actions: "ok",
          product: "okki",
        },
        {
          vintage: "ok",
          quantity: "ok",
          product: "okki",
          date: "ok",
          actions: "ok",
        },
      ],
    };
  },
});
</script>

<style scoped>
</style>