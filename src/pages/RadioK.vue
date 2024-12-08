<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";
import Investigate from "../content/radioKContent/1_Investigate.vue";
import PainPoint from "../content/radioKContent/1_radiok_painpoint.svg";
import AccessPath from "../content/radioKContent/2_AccessPathways.vue";
import Research from "../content/radioKContent/3_Research.vue";
import JourneyMap from "../content/radioKContent/3_radioK_journeyMap.svg"
import KeyOpportunities from "../content/radioKContent/4_KeyOpportunities.vue";
import FinalDesign from "../content/radioKContent/5_FinalDesign.vue";
import FinalDesignImage from "../content/radioKContent/5_radioK_finalDesign.svg"
import MovingForward from "../content/radioKContent/MovingForward.vue";
</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="Investigate" :full-image="PainPoint"></ContentBlock>
    <ContentBlock :content-component1="AccessPath" layout="text-right"></ContentBlock>
    <ContentBlock :content-component1="Research" :full-image="JourneyMap"></ContentBlock>
    <ContentBlock :content-component1="KeyOpportunities" layout="text-right"></ContentBlock>
    <ContentBlock :content-component1="FinalDesign" :fullImage="FinalDesignImage"></ContentBlock>
    <ContentBlock :content-component1="MovingForward" layout="text-right"></ContentBlock>
  </CaseStudyTemplate>
</template>

<style scoped>

</style>