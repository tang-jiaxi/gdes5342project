<script setup>

import CaseStudyNav from "./CaseStudyNav.vue";
</script>

<template>
  <picture>
    <source srcset="../assets/saseCover.png" media="(min-width: 768px)"/>
    <img src="../assets/saseCoverMobile.svg" alt="Case study cover page" width="100%"/>
  </picture>
  <CaseStudyNav :index="1"></CaseStudyNav>
</template>

<style scoped>

</style>