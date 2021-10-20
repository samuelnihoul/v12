<template>
  <div>
    <section>
      <jumbotron></jumbotron>
    </section>
    <div class="mx-auto col-md-10">
      <div class="d-flex align-center mb-8">
        <div class="col-md-5 calculator">
          <h2 class="title primary--text">
            HOW BIG IS YOUR ENVIRONMENTAL FOOTPRINT?
          </h2>
          <h3 class="subtitle">
            The planet is in crisis - from climate change to the pollution in
            our oceans and devastation of our forests. It's up to all of us to
            fix it. Take your first step with our environmental footprint
            calculator.
          </h3>
          <a
            v-show="isMobile"
            href="https://footprint.wwf.org.uk/#/"
            target="_blank"
            class="primary--text"
            >WWF UK CARBON FOORPRINT CALCULATOR</a
          >
        </div>
        <div class="col" v-show="!isMobile">
          <div class="d-md-flex justify-end">
            <card-black></card-black>
          </div>
        </div>
      </div>
      <section class="mt-4">
        <grid-projects></grid-projects>
      </section>
      <section class="mt-6">
        <h3 class="section-title">FEATURE YOUR PROJECT</h3>
        <p class="mt-md-10 mb-10 text-body1">
          If you have a project that you would like to
          include on this page, please read our
          <a href="#">Terms & Conditions>></a>, fill in this
          <a href="#">project profile template>></a> and provide it to
          <a href="#"> Make An Impact>></a> along with at least three
          high-resolution images and your logo. If you would like to sell
          credits through our Project Marketplace, please email
          <a href="#">Make An Impact>></a>
          for more details.
        </p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";
import CardBlack from "@/components/card//black.vue";
import GridProjects from "@/components/grid/Projects.vue";
export default defineComponent({
  components: {
    Jumbotron,
    CardBlack,
    GridProjects,
  },
  computed: {
    isMobile() {
      // if (this.$vuetify) {
      //   return ["xs", "sm"].includes(this.$vuetify.breakpoint.name);
      // }

      return null;
    },
  },
});
</script>

<style scoped lang="scss">
.calculator {
  .title {
    font-size: 2.2rem !important;
    line-height: 50px;
  }

  .subtitle {
    margin-top: 15px;
    font-size: 1.3em;
  }
}
</style>