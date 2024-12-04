<script setup>
import ContentParser from "../components/ContentParser.vue";
</script>

<template>
  <slot name="coverPicture"></slot>

  <body>
    <slot name="body"></slot>
  </body>

  <slot name="bottomNav"></slot>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-inline: 4vw;

  @media (min-width: 768px) {
    margin-block: 6rem;
    margin-inline: 4vw;
    gap: 6rem;
  }
}
</style>