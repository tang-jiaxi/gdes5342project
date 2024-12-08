<script setup>
import DecisionMatrix from "./DecisionMatrix.vue"
import IterativeDesign from "./IterativeDesign.vue"
import ContentBlock from "../../components/ContentBlock.vue";
</script>

<template>
  <ContentBlock :content-component1="IterativeDesign" :content-component2="DecisionMatrix"></ContentBlock>
</template>

<style scoped>
</style>