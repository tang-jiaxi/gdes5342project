<script setup>
import GovTech from "./GovTech.vue";
import router from "../router.js";

</script>

<template>
  <div class="nav">
    <button @click="router.push({ name: 'Home' })" class="logo">
      <img src="../assets/logo.png" alt="logo" width="40"/>
      <div class="logoName">Jiaxi Tang</div>
    </button>

    <div class="links">
      <button @click="router.push({ name: 'GovTech' })">
        GovTech
      </button>
      <button @click="router.push({ name: 'SASE' })">
        SASE
      </button>
      <button @click="router.push({ name: 'Resume' })">
        Resume
      </button>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;
  }
}

.logo{
  all: unset;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}

.logoName {
  font-weight: 600;
}

.links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.links button {
  all: unset;
}

.links button:hover {
  text-decoration: underline;
}
</style>
