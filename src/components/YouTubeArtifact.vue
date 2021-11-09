<template>
  <div class="block youtube-embed">
    <slot />
  </div>
</template>

<script>
export default {
  name: "YouTubeArtifact"
}
</script>
<style scoped lang="scss">
.youtube-embed {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
