<template>
  <div class="block extract">
    <h1>{{ title }}</h1>
    <span class="extract-slot"><slot /></span>
    <span class="extract">
      <button @click="openLightbox">Show extract</button>
    </span>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="images"
      @change="changeImage"
      >
  </div>
</template>

<script>
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel';
export default {
  name: "Extract",
  props: ["title", "extract-images"],
  data: function() {
    return {
      showExtract: false,
    }
  },
  components: {
    VueImageLightboxCarousel
  },
  methods: {
    openLightbox() {
      this.showLightbox = true
      this.$refs.lightbox.showImage(1)
    }
  }
};
</script>
