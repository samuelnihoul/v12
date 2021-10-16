<template>
  <div>
    <section class="first">
      <div
        class="
          white--text
          my-jumbo
          d-flex
          flex-column
          justify-center
          align-center
          offset-md-2
          col-md-8
        "
        style="min-height: 600px"
      >
        <div>
          <h1 class="mx-md-10">
            Lorem ipsum, dolor sit amet, cectetur adipisicing elit
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ratione facere nam optio obcaecati autem dolorem possimus eligendi
          </p>
          <!-- <my-input
            placeholder="Recherche par numéro de projet, industrie ou bénéfices"
          >
            <template #prepend>
              <q-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <q-btn
                    large
                    text
                    dark
                    v-bind="attrs"
                    v-on="on"
                    style="border-right: 1px solid"
                  >
                    Afrique
                    <q-icon> mdi-chevron-down </q-icon>
                  </q-btn>
                </template>
                <q-list>
                  <q-list-item
                    v-for="(item, index) in ['name', 'label', 'router-link']"
                    :key="index"
                  >
                    <q-list-item-title>{{ item }}</q-list-item-title>
                  </q-list-item>
                </q-list>
              </q-menu>
            </template>
            <template #append>
              <q-btn color="primary" rounded large>JE RECHERCHE</q-btn>
            </template>
          </my-input> -->
        </div>
      </div>
    </section>
    <section>
      <h2 class="my-title">Notre objectif</h2>

      <div class="my-row">
        <div class="offset-md-1 col-md-10">
          <div class="my-row">
            <div class="col-md-4" v-for="(f, i) in focus" :key="'tt-' + i">
              <card-focus
                :image="f.image"
                :body="f.body"
                :title="f.title"
              ></card-focus>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="offset-md-1 col-md-10">
        <h2 class="my-title">They support us</h2>
        <div class="w-100 d-flex mb-3">
          <q-card
            v-for="i in 5"
            :key="'zzz' + i"
            class="w-20 d-flex justify-center align-center"
            style="height: 150px"
          >
            <h3>SGBCI</h3>
          </q-card>
        </div>
        <div class="d-flex justify-end">
          <a href="#">See all partners ></a>
        </div>
      </div>
    </section>
    <section>
      <h2 class="my-title">Our latest projects</h2>
      <div class="offset-md-1 col-md-10">
        <div>
          <new-projects></new-projects>
        </div>
        <div class="w-100 d-flex justify-content-between align-items-center">
          <q-btn color="primary" rounded large :to="{ name: 'projects' }"
            >Tous les projets</q-btn
          >
          <div>
            <q-btn
              round
              class="my-button-prev mr-2"
              icon="mdi-arrow-left"
            ></q-btn>
            <!-- <q-btn round class="my-button-next" -->
            <!-- > -->
            <q-btn round icon="mdi-arrow-right"></q-btn>
            <!-- </q-btn> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="my-title">Our customers tell you</h2>
      <div class="offset-md-1 col-md-10">
        <div class="my-row">
          <div class="col-md-4" v-for="i in 3" :key="'cleint' + i">
            <card-customer></card-customer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import MyInput from "@/components/my-input.vue";
import CardCustomer from "@/components/card/Customer.vue";
import CardFocus from "@/components/card/Focus.vue";
import NewProjects from "@/components/NewProjects.vue";

export default defineComponent({
  components: {
    // MyInput,
    CardCustomer,
    NewProjects,
    CardFocus,
    
  },
  // layout: "fixed",
  data() {
    return {
      focus: [
        {
          image: "/own-forest.png",
          body: "Lorem ipsum sjdjs sjsjs eeeej jejejej sjssjsj Lorem ipsum dolor sit amet consectetur",
          title: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          image: "/carbon-footprint.png",
          body: "Lorem ipsum sjdjs sjsjs eeeej jejejej sjssjsj lotem ekkskdk ksd sdksdkddskdskdsksd",
          title: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          image: "/carbon-pollution.png",
          body: "Lorem ipsum sjdjs sjsjs eeeej jejejej sjssjsj",
          title: "Lorem ipsum dolor sit amet consectetur",
        },
      ],
    };
  },
});
</script>


<style lang="scss" scoped>
.my-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 25px;
}

.first {
  width: 100%;
  background: url("https://wallpaperaccess.com/full/1204217.jpg");
  background-size: cover;
  margin-top: 0 !important;
}
.my-jumbo {
  text-align: center;

  p,
  h1 {
    text-shadow: 1px 1px 2px #000;
  }
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