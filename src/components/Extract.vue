<template>
  <div class="block extract">
    <h1>{{ title }}</h1>

    <span class="extract-slot"><slot /></span>
  </div>
</template>

<script>
export default {
  name: "Extract",
  props: ["title"],
};
</script>
