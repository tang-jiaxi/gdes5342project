<script setup>
defineProps({
  image: {
    required: true,
  },
  caption: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="container">
    <img :src="image">
    <h3>{{caption}}</h3>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
}

h3 {
  text-align: center;
}
</style>