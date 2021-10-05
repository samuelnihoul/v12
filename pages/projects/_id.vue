<template>
  <v-container class="pt-5">
    <section>
      <v-parallax
        height="250"
        width="100%"
        class="d-flex align-center pl-8"
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        lazy-src="/logo.png"
      >
        <h1 class="white--text">Ici on a le titre du projet</h1>
      </v-parallax>
    </section>
    <section class="mt-10">
      <div class="row">
        <div class="col-md-4">
          <div class="row">
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
        <div class="col-md-4">
          <div class="product-box">
            <h4>PRODUCT</h4>
            <div class="row">
              <div class="col-md-4">
                <v-icon>mdi-cube</v-icon>
                <p>NONE</p>
              </div>
              <div class="col-md-4">
                <v-icon color="primary">mdi-pound</v-icon>
                <p>ISSUED</p>
              </div>
              <div class="col-md-4">
                <v-icon color="primary">mdi-pound</v-icon>
                <p>RETIRED</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <h4>PLANNED SDG IMPACTS</h4>
              <div class="row mt-5">
                <div
                  class="col-md-6 d-flex justify-center"
                  v-for="i in 3"
                  :key="i"
                >
                  <card-little></card-little>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h4>PROJECT TYPE</h4>
            </div>
            <div class="col-md-4">
              <h4>STATUS</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style scoped lang="scss">
.product-box {
  .col-md-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .v-icon {
    font-size: 2em;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>