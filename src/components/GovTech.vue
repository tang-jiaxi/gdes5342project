<script setup>
import CaseStudyNav from "./CaseStudyNav.vue";
</script>

<template>
  <picture>
    <source srcset="../assets/govtechCover.png" media="(min-width: 768px)"/>
    <img src="../assets/govtechCoverMobile.svg" alt="Case study cover page" width="100%"/>
  </picture>
  <CaseStudyNav :index="0"></CaseStudyNav>
</template>

<style scoped>

</style>