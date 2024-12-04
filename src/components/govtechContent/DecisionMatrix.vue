<script setup>
import govtechMatrix from "../../assets/govtech_matrix.svg";
</script>

<template>
  <div class="container">
    <img :src="govtechMatrix">
    <h3>Decision making matrix</h3>
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