<template>
  <div class="page">
    <intro-video />
    <artifact
      :image="require(`@/assets/artifacts/garage.jpg`)"
      caption="Jobs in his garage, with two Apple Macintosh computers in the background. Source: MacRumours"
    />
    <extract-one />
    <artifact
      :image="require(`@/assets/artifacts/steve-jobs-ipod.webp`)"
      caption="Steve Jobs unveiling the first generation iPod. Source: TIME"
    />
    <extract-two />
    <youtube-artifact>
      <iframe
        width="700"
        height="400"
        src="https://www.youtube.com/embed/LOb3FJhDbYs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </youtube-artifact>
    <extract-three />
    <artifact
      :image="require(`@/assets/artifacts/dianawalkersteve.jpg`)"
      caption='Jobs busy in his home office in Palo Alto: "I like living at the intersection of humanity and reality". Source: Diana Walker / MacRumours'
    />
    <footer>
      <p>Created by <a href="https://willpakpoy.com">Will Pak Poy</a>.</p>
    </footer>
  </div>
</template>

<script>
import Artifact from "@/components/Artifact";
import IntroVideo from "@/components/1IntroVideo";
import ExtractOne from "@/components/2Extract1";
import ExtractTwo from "@/components/3Extract2";
import ExtractThree from "@/components/4Extract3";
import YoutubeArtifact from "@/components/YouTubeArtifact";

export default {
  components: {
    Artifact,
    YoutubeArtifact,
    IntroVideo,
    ExtractOne,
    ExtractTwo,
    ExtractThree,
  },
};
</script>
