<script setup>

import CaseStudyNav from "./CaseStudyNav.vue";
import ContentBlock from "./ContentBlock.vue";

import Problem from "./saseContent/Problem.vue"
import DesignRequirements from "./saseContent/DesignRequirements.vue";
import Requirement1 from "./saseContent/Requirement1.vue";
import Requirement2 from "./saseContent/Requirement2.vue";
import TechStack from "./saseContent/TechStack.vue";
import ToggleResume from "./saseContent/ToggleResume.vue";
import MovingForward from "./saseContent/MovingForward.vue";

import TechStackImage from "../../src/assets/techstack.svg";
import SaseWebsiteTogglePDF from "../../src/assets/sase_togglePDF.svg";
import SaseBoard from "../../src/assets/sase_board.svg";
</script>

<template>
  <picture>
    <source srcset="../assets/saseCover.png" media="(min-width: 768px)"/>
    <img src="../assets/saseCoverMobile.svg" alt="Case study cover page" width="100%"/>
  </picture>

  <body>
    <ContentBlock :content-component1="Problem"/>
    <ContentBlock :content-component1="DesignRequirements"/>
    <ContentBlock :content-component1="Requirement1" :content-component2="Requirement2"/>
    <ContentBlock :content-component1="TechStack" :image="TechStackImage"/>
    <ContentBlock :content-component1="ToggleResume"/>
    <img :src="SaseWebsiteTogglePDF"/>
    <ContentBlock :content-component1="MovingForward" :image="SaseBoard"/>
  </body>

  <CaseStudyNav :index="1"></CaseStudyNav>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 4vw;
  @media (min-width: 768px) {
    margin-block: 6rem;
    margin-inline: 4vw;
    gap: 6rem;
  }
}

body > img {
  margin-inline: 16px;
  @media (min-width: 768px) {
    margin-inline: 8vw;
  }
}
</style>