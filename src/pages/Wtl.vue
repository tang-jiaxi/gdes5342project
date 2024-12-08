<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";
import MeetTheTeam from "../content/wtlContent/1_MeetTheTeam.vue";
import UniversityLogos from "../content/wtlContent/1_radioK_universityLogos.svg"
import Research from "../content/wtlContent/2_Research.vue"
import WTLData from "../content/wtlContent/2_wtl_data.svg"
import DesignBrief from "../content/wtlContent/3_DesignBrief.vue"
import UIDesign from "../content/wtlContent/4_UIDesignProcess.vue"
import UIDesignImage from "../content/wtlContent/4_wtl_uiDesign.svg"
import UserResearch from "../content/wtlContent/5_UserResearch.vue"
import FinalDesign from "../content/wtlContent/6_FinalDesign.vue"
import FinalDesignImage from "../content/wtlContent/6_wtl_finalDesign.svg"
import MovingForward from "../content/wtlContent/7_MovingForward.vue"

</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="MeetTheTeam" :image="UniversityLogos"/>
    <ContentBlock :content-component1="Research" layout="text-right" :full-image="WTLData"/>
    <ContentBlock :content-component1="DesignBrief" layout="text-right"/>
    <ContentBlock :content-component1="UIDesign" :full-image="UIDesignImage"/>
    <ContentBlock :content-component1="UserResearch" layout="text-right"/>
    <ContentBlock :content-component1="FinalDesign" :full-image="FinalDesignImage"/>
    <ContentBlock :content-component1="MovingForward" layout="text-right"/>
  </CaseStudyTemplate>
</template>

<style scoped>

</style>