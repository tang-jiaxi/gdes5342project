<script setup>
import ImageCaption from "../../components/ImageCaption.vue";
import firstPull from "./govtech_firstPull.svg"
import finalPull from "./govtech_finalPull.svg"
</script>

<template>
  <div class="images">
    <ImageCaption caption="First pull request!" :image="firstPull"></ImageCaption>
    <ImageCaption caption="Final feature built from scratch" :image="finalPull"></ImageCaption>
  </div>
</template>

<style scoped>
.images {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}
</style>