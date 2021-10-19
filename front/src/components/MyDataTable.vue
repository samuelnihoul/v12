<script lang="ts" >
import { PropType } from "@vue/runtime-core";

export default {
  props: {
    headers: {
      type: Object as PropType<any[]>,
    },
    items: {
      type: Object as PropType<any[]>,
    },
    text: {
      type: String,
    },
  },
  setup(props: any) {
    const keys = props.headers.map((c: any) => c.value);

    return {
      keys,
    };
  },
};
</script>


<template>
  <div class="q-pa-md">
    <div
      class="
        q-table__container q-table--horizontal-separator
        column
        no-wrap
        q-table__card q-table--no-wrap
      "
    >
      <table class="q-table">
        <thead>
          <tr>
            <th v-for="col in headers" :key="col.name" v-text="col.text"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="row in items" :key="'row' + row.value">
            <td class="text-center" v-for="key in keys" :key="row + key">
              {{ row[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

