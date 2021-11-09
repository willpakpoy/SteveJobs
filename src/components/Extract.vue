<template>
  <div class="block extract">
    <h1>{{ title }}</h1>
    <span class="extract-slot"><slot /></span>
    <span class="extract">
      <button @click="openLightbox">Show extract</button>
    </span>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showExtract"
      @close="showExtract = false"
      :images="images"
    />
  </div>
</template>

<script>
import VueImageLightboxCarousel from "vue-image-lightbox-carousel";
export default {
  name: "Extract",
  props: ["title", "images"],
  data: function () {
    return {
      showExtract: false,
    };
  },
  components: {
    VueImageLightboxCarousel,
  },
  methods: {
    openLightbox() {
      this.showExtract = true;
      this.$refs.lightbox.showImage(0);
    },
  },
};
</script>
