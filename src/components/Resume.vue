<script setup>
import resumePDF from "../assets/Resume.pdf"
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'

const { pdf } = usePDF('../src/assets/Resume.pdf')
</script>

<template>
  <img src="../assets/Resume.png" alt="Jiaxi Tang Resume"/>
<!--  <iframe :src="resumePDF"></iframe>-->
<!--  <div class="container">-->
<!--    <VuePDF :pdf="pdf" text-annotation style="width: 95vw"></VuePDF>-->
<!--  </div>-->
</template>

<style scoped>

img {
  display: block;
  margin: 0 auto;
  border: 0.75px solid #C3BBBB;
  width: 95vw;
  height: 100%;
}

@media (min-width: 768px) {
  img {
    display: block;
    height: 100vh;
    width: auto;
  }
}
</style>