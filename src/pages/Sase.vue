<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";

import Problem from "../content/saseContent/1_Problem.vue"
import DesignRequirements from "../content/saseContent/2_DesignRequirements.vue";
import Requirement1 from "../content/saseContent/3_Requirement1.vue";
import Requirement2 from "../content/saseContent/3_Requirement2.vue";
import TechStack from "../content/saseContent/4_TechStack.vue";
import ToggleResume from "../content/saseContent/5_ToggleResume.vue";
import MovingForward from "../content/saseContent/7_MovingForward.vue";

import TechStackImage from "../content/saseContent/4_sase_techstack.svg";
import SaseWebsiteTogglePDF from "../content/saseContent/6_sase_togglePDF.svg";
import SaseBoard from "../content/saseContent/7_sase_board.svg";
</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="Problem"/>
    <ContentBlock :content-component1="DesignRequirements"/>
    <ContentBlock :content-component1="Requirement1" :content-component2="Requirement2" align="flex-start"/>
    <ContentBlock :content-component1="TechStack" :image="TechStackImage"/>
    <ContentBlock :content-component1="ToggleResume" :full-image="SaseWebsiteTogglePDF"/>
    <ContentBlock :content-component1="MovingForward" :image="SaseBoard"/>
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