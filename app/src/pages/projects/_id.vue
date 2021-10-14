<template>
  <div class="mx-auto col-md-10 pt-4">
    <section>
      <q-parallax
        :height="250"
        width="100%"
        class="d-flex align-center pl-8"
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
      >
        <h1 class="white--text">Ici on a le titre du projet</h1>
      </q-parallax>
    </section>

    <section>
      <div class="my-row">
        <div class="col-md-2 col-lg-3">
          <div class="d-flex flex-md-column flex-lg-row">
            <div class="col">
              <h4>GS ID</h4>
              <p>11256</p>
            </div>
            <div class="col">
              <h4>REGION</h4>
              <p>11256</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="product-box">
            <h4>PRODUCT</h4>
            <div class="my-row">
              <div class="col-4">
                <q-icon name="mdi-cube"></q-icon>
                <p>NONE</p>
              </div>
              <div class="col-4">
                <q-icon color="primary" name="mdi-pound"></q-icon>
                <p>ISSUED</p>
              </div>
              <div class="col-4">
                <q-icon color="primary" name="mdi-pound"></q-icon>
                <p>RETIRED</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="my-row">
            <div class="col-md-4">
              <h4>PLANNED SDG IMPACTS</h4>
              <div class="my-row mt-5">
                <div
                  class="col-4 col-md-6 d-flex justify-center"
                  v-for="i in 3"
                  :key="i"
                >
                  <card-little></card-little>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 d-flex flex-column align-center">
              <h4>PROJECT TYPE</h4>
              <q-icon class="myicon" name="mdi-weather-sunny"></q-icon>
              <p>Geothermal</p>
            </div>
            <div class="col-6 col-md-4 d-flex flex-column align-center">
              <h4>STATUS</h4>
              <q-icon class="myicon" name="mdi-weather-sunny"></q-icon>
              <p>Listed</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-row">
        <div class="col-md-8">
          <table-project-infos></table-project-infos>
        </div>
        <div class="col-md-4">
          <h3>Description</h3>
          <p class="mt-2">
            The project activity is designed to introduce geothermal energy
            based space heating system to realize heat supply to a series of new
            residential buildings and commercial buildings in Changdao county
            over winter season, which will displace heat supply from isolated
            coal-fired boilers as a business-as-usual scenario in the project
            area. Changdao county is in Yantai City of Shandong Province.
            According to the current Changdao County Urban Master Plan
            requirements, the Changdao County government will take a series of
            measures to improve the environment and the living conditions of
            residents. The proposed project will involve the construction and
            operation of geothermal production wells, reinjection wells, heat
            substations and heat supply pipelines. The project owner is Jiangsu
            Zhiji New Energy Technology Co., Ltd. It can supply geothermal heat
            to 6,332.5 thousand m2 of newly built residential buildings and
            1,117.5 thousand m2 of newly built commercial buildings with a total
            heating load of 381.4 MW. The scenario prior to the implementation
            of the proposed project activity is that heat supplied to the
            building areas in winter would be provided by isolated coal-fired
            boilers.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2 class="section-title">ISSUANCE LIST</h2>
      <table-insuance></table-insuance>
    </section>
    <section>
      <h2 class="section-title">CERTIFICATION DOCUMENTS</h2>
      <!-- <a v-if="$vuetify.breakpoint.name == 'xs'"
        >VIEW CERTIFICATION DOCUMENTS IN SUSTAINCERT</a
      >
      <q-btn color="primary" outlined x-large v-else
        >VIEW CERTIFICATION DOCUMENTS IN SUSTAINCERT</q-btn
      > -->
    </section>
    <section>
      <h2 class="section-title">RETIREMENTS</h2>
      <table-retirements></table-retirements>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableInsuance from "@/components/table/Insuance.vue";
import CardLittle from "@/components/card/little.vue";
import TableRetirements from "@/components/table/retirements.vue";
import TableProjectInfos from "@/components/table/ProjectInfos.vue";
export default defineComponent({
  components: {
    TableInsuance,
    TableRetirements,
    TableProjectInfos,
    CardLittle,
  },
});
</script>


<style scoped lang="scss">
.myicon {
  font-size: 3em;
  margin-top: 20px;
  margin-bottom: 20px;
}
.product-box {
  .col-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .q-icon {
    font-size: 2em;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>