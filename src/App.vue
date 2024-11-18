<script setup>
import PrimaryTemplate from "./components/PrimaryTemplate.vue";
</script>

<template>
  <PrimaryTemplate>
    <router-view></router-view> <!--Need to place router within content, router-view is the 'slot' for routed pages-->
  </PrimaryTemplate>
</template>

<style scoped>
</style>
<!--body {-->
<!--  margin-inline: 0.5rem;-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  body {-->
<!--    margin-inline: 2rem;-->
<!--  }-->
<!--}-->
