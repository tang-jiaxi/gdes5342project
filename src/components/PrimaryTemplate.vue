<script setup>

import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <Nav></Nav>

  <slot></slot>

  <Footer></Footer>
</template>

<style scoped>
a {
  &.router-link-active {

  }

  &:hover {
    text-decoration: underline;
  }
}

</style>