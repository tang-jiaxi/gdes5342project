<script setup>
import CaseStudyTemplate from "../templates/CaseStudyTemplate.vue";
import ContentBlock from "../components/ContentBlock.vue";
import Inspiration from "../content/portfolioContent/1_Inspiration.vue";
import InspirationImage from "../content/portfolioContent/1_portfolio_inspiration.svg";
import Takeaways from "../content/portfolioContent/2_Takeaways.vue";
import Prototype from "../content/portfolioContent/3_PrototypingFigma.vue";
import Code from "../content/portfolioContent/4_Code.vue"
import TechStack from "../content/portfolioContent/5_TechStack.vue"
import MovingForward from "../content/portfolioContent/6_MovingForward.vue";
</script>

<template>
  <CaseStudyTemplate>
    <ContentBlock :content-component1="Inspiration" :full-image="InspirationImage"></ContentBlock>
    <ContentBlock :content-component1="Takeaways" layout="text-right"></ContentBlock>
    <ContentBlock :content-component1="Prototype"></ContentBlock>
    <ContentBlock :content-component1="Code" layout="text-right" :full-component="TechStack"></ContentBlock>
    <ContentBlock :content-component1="MovingForward"></ContentBlock>
  </CaseStudyTemplate>
</template>

<style scoped>

</style>