<template>
  <!-- <q-layout>
    <q-toolbar fixed app>
      <v-container class="d-flex align-center">
        <v-spacer />
        <q-btn icon @click.stop="rightDrawer = !rightDrawer">
          <q-icon>mdi-menu</q-icon>
        </q-btn>
      </v-container>
    </q-toolbar>
    <main>
      <router-view />
    </main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click="right = !right">
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <footer>
      <div class="w-100 d-flex flex-column flex-md-row align-center">
        <div>
          <img src="/logo.png" alt="" height="160px" />
        </div>
        <v-spacer></v-spacer>
        <div>
          <q-btn round>
            <q-icon name="facebook"></q-icon>
          </q-btn>
          <q-btn round>
            <q-icon name="twitter"></q-icon>
          </q-btn>
          <q-btn round>
            <q-icon name="instagram"></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="w-100 d-flex justify-center mt-3">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </div>
    </footer>
  </q-layout> -->

  <q-layout style="min-height: 100vh" view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar style="background: #fff !important; height: 70px">
        <div class="col-md-10 mx-auto">
          <q-avatar>
            <img src="/logo.png" />
          </q-avatar>
        </div>
        <!-- <img src="" alt="" height="80px" @click="$router.push('/')" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
    <footer>
      <div class="mx-auto col-md-10">
        <div class="w-100 d-flex flex-column flex-md-row align-center">
          <div>
            <img src="/logo.png" alt="" height="160px" />
          </div>
          <div>
            <!-- <v-link about-us>About us</v-link><br /><v-link contact-us
              >Contact Us</v-link
            > -->
          </div>
          <q-space />
          <div>
            <q-btn icon="mdi-facebook" round> </q-btn>
            <q-btn icon="mdi-twitter" round class="mx-md-5"> </q-btn>
            <q-btn icon="mdi-instagram" round> </q-btn>
          </div>
        </div>
        <div class="w-100 d-flex justify-center mt-3">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
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
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>
