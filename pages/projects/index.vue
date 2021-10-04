<template>
  <div>
    <section>
      <jumbotron></jumbotron>
    </section>
    <v-container>
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
        </div>
        <div class="col">
          <div class="d-md-flex justify-end">
            <v-card class="black-card">
              <div class="content">
                <v-icon class="ticon">mdi-pencil-ruler</v-icon>
                <p class="text">WWF UK CARBON FOORPRINT CALCULATOR</p>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <grid-projects></grid-projects>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.black-card {
  $side: 370px;
  padding: 2%;
  background: #000;
  height: $side;
  width: $side;
  * {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background: var(--primary);
    * {
      color: #000;
      font-weight: bold;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ticon {
      font-size: 3.5rem;
    }
    .text {
      margin-top: 20px;
    }
  }
}

.calculator {
  .title {
    font-size: 2.5rem !important;
    line-height: 50px;
  }

  .subtitle {
    margin-top: 15px;
    font-size: 1.3em;
  }
}
</style>