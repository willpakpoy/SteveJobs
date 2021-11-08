<template>
  <div class="block artifact">
    <img :src="image" />
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: "Artifact",
  props: ["image", "caption"],
};
</script>
