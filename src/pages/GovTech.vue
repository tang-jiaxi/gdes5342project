<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";
import WhatIsFlexilist from "../content/govtechContent/2_WhatIsFlexilist.vue";
import DashboardOfActivities from "../content/govtechContent/1_DashboardOfActivities.vue";
import Research from "../content/govtechContent/3_Research.vue";
import UserInterviews from "../content/govtechContent/4_UserInterviews.vue";
import UIUXDesign from "../content/govtechContent/5_UIUXDesign.vue"
import DesignProcess from "../content/govtechContent/6_DesignProcess.vue";
import FrontEndDev from "../content/govtechContent/7_FrontEndDev.vue";
import PullRequests from "../content/govtechContent/8_PullRequests.vue";
import ProgressInDifficulty from "../content/govtechContent/8_ProgressInDifficulty.vue";
import Reflection from "../content/govtechContent/9_Reflection.vue";
import Conclusion from "../content/govtechContent/10_Conclusion.vue";
import Hackathon from "../content/govtechContent/10_Hackathon.vue";
import govtechTable from "../content/govtechContent/1_govtech_table.svg";
import govtechPhone from "../content/govtechContent/2_govtech_phone.svg";
import govtechVenn from "../content/govtechContent/4_govtech_venn.svg";
import govtechTechStack from "../content/govtechContent/7_govtech_techStack.svg"
</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="DashboardOfActivities" :image="govtechTable"/>
    <ContentBlock :content-component1="WhatIsFlexilist" :image="govtechPhone" layout="text-right"/>
    <ContentBlock :content-component1="Research"/>
    <ContentBlock :content-component1="UserInterviews" :image="govtechVenn" layout="text-right"/>
    <ContentBlock :content-component1="UIUXDesign" :full-component="DesignProcess"/>
    <ContentBlock :content-component1="FrontEndDev" :image="govtechTechStack"/>
    <ContentBlock :content-component1="ProgressInDifficulty" :content-component2="PullRequests" layout="text-right"/>
    <ContentBlock :content-component1="Reflection"/>
    <ContentBlock :content-component1="Conclusion" :content-component2="Hackathon" layout="text-right"/>
  </CaseStudyTemplate>
</template>

<style scoped>

</style>