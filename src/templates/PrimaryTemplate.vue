<script setup>

import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Nav></Nav>

  <slot></slot>

  <Footer></Footer>
</template>

<style scoped>
a {
  &.router-link-active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
}

</style>