<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <!-- <q-select
          v-model="model"
          :options="['name', 'description', 'active', 'action']"
          label="Filtrer"
        ></q-select> -->

        <!-- <q-select filled v-model="model" :options="options" label="Filled" /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xl-3" v-for="(item, i) in itemsToShow" :key="i">
        <card-project></card-project>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="page" :max="paginationLength" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from "vue";
import CardProject from "@/components/card/Project.vue";
export default defineComponent({
  components: {
    CardProject,
  },
  setup() {
    // const { app } = useContext();

    // console.log(vuetify.breakpoint.name)

    const items = new Array(37);

    const page = ref(1);

    const perPage = computed(() => {
      return 5;
      // switch (app.vuetify.framework.breakpoint.name) {
      //   case "xs":
      //   case "sm":
      //     return 4;
      //   case "lg":
      //     return 6;
      //   default:
      //     return 8;
      // }
    });

    const paginationLength = computed(() =>
      Math.round(items.length / perPage.value)
    );

    const itemsToShow = computed(() =>
      items.slice((page.value - 1) * perPage.value, perPage.value * page.value)
    );

    const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

    const data = reactive({ model: "" });
    return {
      options,
      page,
      paginationLength,
      itemsToShow,
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
</style>