<script setup>
import { useRoute } from 'vue-router'
import {ProjectsArray} from "../assets/ProjectsArray.js";
import CaseStudyNav from "../components/CaseStudyNav.vue";

const route = useRoute();
const projectData = ProjectsArray.find((project) => project.name === route.name) || {
  imagePC: '',
  imageMobile: '',
  imageAlt: 'No image found',
  index: 0,
};

</script>

<template>
  <picture>
    <source :srcset="projectData.imagePC" media="(min-width: 768px)"/>
    <img :src="projectData.imageMobile" :alt="projectData.imageAlt" width="100%"/>
  </picture>

  <body>
    <slot></slot>
  </body>

  <div class="caseStudyNav">
    <CaseStudyNav :index="projectData.index"></CaseStudyNav>
  </div>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-inline: 8vw;
  margin-block: 2rem;

  @media (min-width: 768px) {
    margin-block: 6rem;
    margin-inline: 12vw;
    gap: 6rem;
  }
}

.caseStudyNav {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>