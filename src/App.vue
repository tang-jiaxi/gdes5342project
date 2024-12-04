<script setup>
import PrimaryTemplate from "./templates/PrimaryTemplate.vue";
</script>

<template>
  <PrimaryTemplate>
    <router-view></router-view> <!--Need to place router within content, router-view is the 'slot' for routed pages-->
  </PrimaryTemplate>
</template>

<style scoped>
</style>
