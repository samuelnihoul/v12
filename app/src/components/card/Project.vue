<template>
  <q-card class="project-card" :elevation="elevation">
    <div>
      <q-img
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        lazy-src="/logo.png"
        height="300"
      >
        <v-badge
          inline
          content="$10.00 USD/TONNE"
          class="price"
          color="#000"
        ></v-badge>
        <v-fade-transition>
          <v-overlay absolute color="#000">
            <q-btn :to="{ name: 'projects-id', params: { id: 1 } }"
              >See more info</q-btn
            >
          </v-overlay>
        </v-fade-transition>
      </q-img>
    </div>

    <q-card-title class="primary--text">
      Adavikanda, Kuruwita Division Mini Hydro Power Project
    </q-card-title>
    <div style="padding: 0 16px">
      Travel to the best outdoor experience on planet Earth. A vacation you will
      never forget!
    </div>
    <q-card-actions v-if="!presentation">
      <div class="d-flex align-center w-100">
        <div class="col-md-3">
          <v-text-field class="my-input" outlined value="1"></v-text-field>
        </div>
        <div class="col-md-9">
          <q-btn block color="primary">Acheter</q-btn>
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    elevation: {
      type: Number,
      default: 0,
    },
    presentation: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.project-card {
  padding-bottom: 15px;
  .my-input {
    .v-messages,
    .v-text-field__details {
      display: none;
    }

    .v-input__slot {
      margin-bottom: 0 !important;
      min-height: 0 !important;
    }
  }

  .price {
    position: absolute;
    right: 12px;
    top: 13px;

    * {
      height: auto !important;
      font-size: 1em !important;
    }
  }
}
</style>