<script setup>
import govtechIterative from "../../assets/govtech_iterative.svg";
</script>

<template>
  <div class="container">
    <img :src="govtechIterative">
    <h3>Iterative Design Process</h3>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h3 {
  text-align: center;
}

</style>