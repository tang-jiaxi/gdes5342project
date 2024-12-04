<script setup>
import { h } from "vue";
import CaseStudyNav from "./CaseStudyNav.vue";
import ContentBlock from "./ContentBlock.vue";
import WhatIsFlexilist from "./govtechContent/WhatIsFlexilist.vue";
import DashboardOfActivities from "./govtechContent/DashboardOfActivities.vue";
import Research from "./govtechContent/Research.vue";
import UserInterviews from "./govtechContent/UserInterviews.vue";
import UIUXDesign from "./govtechContent/UIUXDesign.vue"
import DecisionMatrix from "./govtechContent/DecisionMatrix.vue"
import IterativeDesign from "./govtechContent/IterativeDesign.vue";
import FrontEndDev from "./govtechContent/FrontEndDev.vue";
import PullRequests from "./govtechContent/PullRequests.vue";
import ProgressInDifficulty from "./govtechContent/ProgressInDifficulty.vue";
import Reflection from "./govtechContent/Reflection.vue";
import Conclusion from "./govtechContent/Conclusion.vue";
import Hackathon from "./govtechContent/Hackathon.vue";

import govtechTable from "../assets/govtech_table.svg";
import govtechPhone from "../assets/govtech_phone.svg";
import govtechVenn from "../assets/govtech_venn.svg";
import govtechTechStack from "../assets/techstack.svg"

import ImageCaption from "./ImageCaption.vue";
</script>

<template>
  <picture>
    <source srcset="../assets/govtechCover.png" media="(min-width: 768px)"/>
    <img src="../assets/govtechCoverMobile.svg" alt="Case study cover page" width="100%"/>
  </picture>

  <body>
    <ContentBlock :content-component1="DashboardOfActivities" :image="govtechTable"/>
    <ContentBlock :content-component1="WhatIsFlexilist" :image="govtechPhone" layout-style="text-right"/>
    <ContentBlock :content-component1="Research"/>
    <ContentBlock :content-component1="UserInterviews" :image="govtechVenn" layout-style="text-right"/>
    <ContentBlock :content-component1="UIUXDesign"/>
    <ContentBlock :content-component1="IterativeDesign" :content-component2="DecisionMatrix"/>
    <ContentBlock :content-component1="FrontEndDev" :image="govtechTechStack"/>
<!--    <ContentBlock-->
<!--        :content-component1="() => h(ImageCaption, { image: govtechIterative, caption: 'Dashboard Table' })"-->
<!--        :content-component2="DashboardOfActivities"-->
<!--    />-->
    <ContentBlock :content-component1="ProgressInDifficulty" :content-component2="PullRequests" layout-style="text-right"/>
    <ContentBlock :content-component1="Reflection"/>
    <ContentBlock :content-component1="Conclusion" :content-component2="Hackathon" layout-style="text-right"/>
  </body>

  <CaseStudyNav :index="0"></CaseStudyNav>
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
</style>