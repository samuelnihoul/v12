import { reactive } from 'vue';
import { reactive } from 'vue';
<template>
  <div>
    <navbar>
      <!-- <v-container class="d-flex align-center">
        <img src="/logo.png" alt="" height="80px" @click="$router.push('/')" />
        <v-spacer />
        <q-btn icon @click.stop="rightDrawer = !rightDrawer">
          <q-icon>mdi-menu</q-icon>
        </q-btn>
      </v-container> -->
    </navbar>
    <main>
      <router-view />
    </main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click="right = !right">
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <footer>
      <div class="w-100 d-flex flex-column flex-md-row align-center">
        <div>
          <img src="/logo.png" alt="" height="160px" />
        </div>
        <div>
          <v-link about-us>About us</v-link><br /><v-link contact-us
            >Contact Us</v-link
          >
        </div>
        <v-spacer></v-spacer>
        <div>
          <q-btn icon>
            <q-icon x-large>mdi-facebook</q-icon>
          </q-btn>
          <q-btn icon>
            <q-icon x-large>mdi-twitter</q-icon>
          </q-btn>
          <q-btn icon>
            <q-icon x-large>mdi-instagram</q-icon>
          </q-btn>
        </div>
      </div>
      <div class="w-100 d-flex justify-center mt-3">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent } from "vue";
export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const data = reactive({
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>


<style lang="scss" scoped>
</style>