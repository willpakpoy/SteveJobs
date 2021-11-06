<template>
  <div class="block fh block-intro-video">
    <div class="title-wrap">
      <div class="lower">
        <span>
          <h1>Steve Jobs</h1>
          <p>The man who changed the world.</p>
        </span>
        <span class="down">
          
          <font-awesome-icon icon="chevron-down" />
          <p class="source">Source: Apple Inc (Narration: Steve Jobs)</p>
        </span>
      </div>
    </div>
    <video
      src="@/assets/think-different-jobs.mp4"
      autoplay
      loop
      :muted="!isVisible"
      v-observe-visibility="visibilityStateUpdated"
    >
      <source src="@/assets/think-different-jobs.mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.block-intro-video {
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .title-wrap {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    .lower {
      margin: 0px;
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
      padding: var(--l-inner-padding);
      position: absolute;
      bottom: 0px;
      width: calc(100% - var(--l-inner-padding) * 2);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      * {
        margin: 0px;
      }
      h1 {
        font-size: 4em;
      }
      .down {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        svg {
          height: 2em;
          width: 2em;
          animation: pulsate 2s ease-out;
          opacity: 0.3;
          animation-iteration-count: infinite;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      isVisible: true,
    };
  },
  methods: {
    visibilityStateUpdated(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>
