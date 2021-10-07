<template>
  <div>
    <section>
      <v-img
        class="white--text"
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        height="600px"
      >
        <div
          class="
            my-jumbo
            d-flex
            flex-column
            justify-center
            align-center
            offset-md-2
            col-md-8
          "
          style="height: 600px"
        >
          <div>
            <h1 class="mx-md-10">
              Lorem ipsum, dolor sit amet, cectetur adipisicing elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ratione facere nam optio obcaecati autem dolorem possimus eligendi
            </p>
            <v-text-field
              outlined
              class="rounded-input mx-md-10"
              placeholder="Recherche par numéro de projet, industrie ou bénéfices"
            >
              <template #prepend-inner>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      large
                      text
                      dark
                      v-bind="attrs"
                      v-on="on"
                      style="border-right: 1px solid"
                    >
                      Afrique
                      <v-icon> mdi-chevron-down </v-icon>
                      <!-- <v-icon v-else>mdi-chevron-up</v-icon> -->
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in ['name', 'label', 'router-link']"
                      :key="index"
                    >
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
              <template #append>
                <v-btn color="primary" rounded large>JE RECHERCHE</v-btn>
              </template>
            </v-text-field>
          </div>
        </div>
      </v-img>
    </section>
    <section>
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="i in 3" :key="'tt-' + i">
              <card-home></card-home>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="offset-md-2 col-md-8">
        <h2 class="my-title">Ces partenaires nous font confiance</h2>
        <div class="w-100 d-flex">
          <div class="w-20" v-for="i in 4" :key="'zzz' + i">ok</div>
        </div>
        <div class="d-flex justify-end">
          <a>Voir tous les partenaires</a>
        </div>
      </div>
    </section>
    <section>
      <h2 class="my-title">Nos derniers projets</h2>
      <div class="offset-md-2 col-md-10">
        <carousel :items="2.5" ref="carousel">
          <div class="mr-4" v-for="i in 5" :key="'oui' + i">
            <card-project :elevation="2" :presentation="true"></card-project>
          </div>
        </carousel>
        <div class="w-100 d-flex justify-space-between align-center">
          <v-btn color="primary" rounded large :to="{ name: 'projects' }"
            >Tous les projets</v-btn
          >
          <div>
            <v-btn :id="prevId" outlined icon
              ><v-icon>mdi-arrow-left </v-icon></v-btn
            >
            <v-btn :id="nextId" icon outlined
              ><v-icon>mdi-arrow-right</v-icon></v-btn
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="my-title">Nos clients vous le dise</h2>
      <div class="offset-md-2 col-md-8">
        <div class="row">
          <div class="col-md-4" v-for="i in 3" :key="'cleint' + i">
            <card-customer></card-customer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      prevId: '',
      nextId: '',
    }
  },
  mounted() {
    // const prev = document.querySelector('[id^="carousel_prev_"')
    // const next = document.querySelector('[id^="carousel_next_"')
    // this.prevId = prev.id
    // this.nextId = next.id
    // prev.remove()
    // next.remove()
    // console.log('ici')
  },
})
</script>


<style lang="scss" scoped>
.my-title {
  text-align: center;
  font-size: 2em;
}
.my-jumbo {
  text-align: center;

  h1 {
    font-size: 3.2em;
    line-height: 1.2em;
  }

  p {
    font-size: 1.2em;
    margin: 30px 0;
  }
}
</style>