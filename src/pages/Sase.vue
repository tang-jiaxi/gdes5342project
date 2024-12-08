<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import CaseStudyNav from "../components/CaseStudyNav.vue";
import ContentBlock from "../components/ContentBlock.vue";

import Problem from "../content/saseContent/Problem.vue"
import DesignRequirements from "../content/saseContent/DesignRequirements.vue";
import Requirement1 from "../content/saseContent/Requirement1.vue";
import Requirement2 from "../content/saseContent/Requirement2.vue";
import TechStack from "../content/saseContent/TechStack.vue";
import ToggleResume from "../content/saseContent/ToggleResume.vue";
import MovingForward from "../content/saseContent/MovingForward.vue";

import TechStackImage from "../assets/techstack.svg";
import SaseWebsiteTogglePDF from "../assets/sase_togglePDF.svg";
import SaseBoard from "../assets/sase_board.svg";
</script>

<template>
  <CaseStudyTemplate>
    <template #coverPicture>
      <picture>
        <source srcset="../assets/saseCover.png" media="(min-width: 768px)"/>
        <img src="../assets/saseCoverMobile.svg" alt="Case study cover page" width="100%"/>
      </picture>
    </template>

    <template #body>
      <ContentBlock :content-component1="Problem"/>
      <ContentBlock :content-component1="DesignRequirements"/>
      <ContentBlock :content-component1="Requirement1" :content-component2="Requirement2"/>
      <ContentBlock :content-component1="TechStack" :image="TechStackImage"/>
      <ContentBlock :content-component1="ToggleResume"/>
      <img :src="SaseWebsiteTogglePDF"/>
      <ContentBlock :content-component1="MovingForward" :image="SaseBoard"/>
    </template>

    <template #bottomNav>
      <CaseStudyNav :index="1"></CaseStudyNav>
    </template>
  </CaseStudyTemplate>
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