<template>
  <div class="page">
    <intro-video />
    <extract-one />
    <artifact
      :image="require(`@/assets/artifacts/steve-jobs-ipod.webp`)"
      caption="Steve Jobs unveiling the first generation iPod. Source: TIME"
    />
    <extract-two />
  </div>
</template>

<script>
import Artifact from "@/components/Artifact";
import IntroVideo from "@/components/1IntroVideo";
import ExtractOne from "@/components/2Extract1";
import ExtractTwo from "@/components/3Extract2";

export default {
  components: {
    Artifact,
    IntroVideo,
    ExtractOne,
    ExtractTwo,
  },
};
</script>
