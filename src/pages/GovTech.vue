<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";
import WhatIsFlexilist from "../content/govtechContent/WhatIsFlexilist.vue";
import DashboardOfActivities from "../content/govtechContent/DashboardOfActivities.vue";
import Research from "../content/govtechContent/Research.vue";
import UserInterviews from "../content/govtechContent/UserInterviews.vue";
import UIUXDesign from "../content/govtechContent/UIUXDesign.vue"
import DecisionMatrix from "../content/govtechContent/DecisionMatrix.vue"
import IterativeDesign from "../content/govtechContent/IterativeDesign.vue";
import FrontEndDev from "../content/govtechContent/FrontEndDev.vue";
import PullRequests from "../content/govtechContent/PullRequests.vue";
import ProgressInDifficulty from "../content/govtechContent/ProgressInDifficulty.vue";
import Reflection from "../content/govtechContent/Reflection.vue";
import Conclusion from "../content/govtechContent/Conclusion.vue";
import Hackathon from "../content/govtechContent/Hackathon.vue";

import govtechTable from "../assets/govtech_table.svg";
import govtechPhone from "../assets/govtech_phone.svg";
import govtechVenn from "../assets/govtech_venn.svg";
import govtechTechStack from "../assets/techstack.svg"
</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="DashboardOfActivities" :image="govtechTable"/>
    <ContentBlock :content-component1="WhatIsFlexilist" :image="govtechPhone" layout-style="text-right"/>
    <ContentBlock :content-component1="Research"/>
    <ContentBlock :content-component1="UserInterviews" :image="govtechVenn" layout-style="text-right"/>
    <ContentBlock :content-component1="UIUXDesign"/>
    <ContentBlock :content-component1="IterativeDesign" :content-component2="DecisionMatrix"/>
    <ContentBlock :content-component1="FrontEndDev" :image="govtechTechStack"/>
    <ContentBlock :content-component1="ProgressInDifficulty" :content-component2="PullRequests" layout-style="text-right"/>
    <ContentBlock :content-component1="Reflection"/>
    <ContentBlock :content-component1="Conclusion" :content-component2="Hackathon" layout-style="text-right"/>
  </CaseStudyTemplate>
</template>

<style scoped>

</style>