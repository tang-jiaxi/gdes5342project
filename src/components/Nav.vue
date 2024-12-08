<script setup>
import GovTech from "../pages/GovTech.vue";
import router from "../router.js";

</script>

<template>
  <div class="nav">
    <button @click="router.push({ name: 'Home' })" class="logo">
      <img src="../assets/logo.png" alt="logo"/>
      <div class="logoName">Jiaxi Tang</div>
    </button>

    <div class="links">
      <button @click="router.push({ name: 'GovTech' })">
        GovTech
      </button>
      <button @click="router.push({ name: 'SASE' })">
        SASE
      </button>
      <button @click="router.push({ name: 'RadioK' })">
        RadioK
      </button>
      <button @click="router.push({ name: 'Portfolio' })">
        Portfolio
      </button>
      <button @click="router.push({ name: 'WTL' })">
        WTL
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
  margin-block: 1rem;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 1rem;
  }
}

img {
  width: 3.5rem;
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
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.75rem, 1rem, 2rem);
  row-gap: 0.2rem;
  margin-inline: 0.5rem;
}

.links button {
  all: unset;
}

.links button:hover {
  text-decoration: underline;
}
</style>
