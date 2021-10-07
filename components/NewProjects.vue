<template>
  <swiper :options="options" class="my-slide">
    <swiper-slide v-for="i in 5" :key="'oui' + i">
      <card-project :elevation="2" :presentation="true"></card-project>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    options() {
      const opts = {
        loop: false,
        slidesPerView: 2.5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.my-button-next',
          prevEl: '.my-button-prev',
        },
      }
      if (['xs', 'sm'].includes(this.device)) {
        opts.slidesPerView = 1
      }

      return opts
    },
    device() {
      // @ts-ignore
      return this.$vuetify.breakpoint.name
    },
  },
})
</script>

<style scoped lang="scss">
.my-slide {
  overflow-y: hidden;
  overflow: hidden;
}
</style>