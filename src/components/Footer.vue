<script setup>
import router from "../router.js";
function openLink(url) {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="container">
    <div class="FooterImage" v-if="$route.name === 'Home'">
      <picture>
        <source srcset="../assets/BottomWaves.png" media="(min-width: 768px)" />
        <img src="../assets/BottomWavesMobile.png" alt="logo" width="100%"/>
      </picture>
    </div>
    <div v-else>
      <picture>
        <source srcset="../assets/bottomLogoWavePC.png" media="(min-width: 768px)" />
        <img src="../assets/BottomLogoWaveMobile.png" alt="logo" width="100%"/>
      </picture>
    </div>

    <div class="linkContainer">

      <div class="nav">
        <button @click="router.push({ name: 'Home' })" class="logo">
          <img src="../assets/logo.png" alt="logo" width="80"/>
          <div class="logoName">Jiaxi Tang</div>
        </button>

        <div class="links">
          <button @click="router.push({ name: 'Home' })">
            Home
          </button>
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

      <div class="externalLinks">
        <button @click="openLink('https://www.linkedin.com/in/jiaxi--tang/')">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
        </button>
        <button @click="openLink('https://github.com/tang-jiaxi')">
          <font-awesome-icon :icon="['fab', 'github']" size="3x"/>
        </button>
        <button @click="openLink('https://www.behance.net/jiaxi_tang')">
          <font-awesome-icon :icon="['fab', 'square-behance']" size="3x"/>
        </button>
        <button @click="openLink('mailto:jt.jiaxitang@gmail.com')">
          <font-awesome-icon :icon="['fas', 'envelope']" size="3x"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.linkContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  align-items: center;
}

.logo{
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  font-size: large;
}

.logo:hover {
  text-decoration: none ;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

button {
  all: unset;
}

button:hover {
  text-decoration: underline;
}

.externalLinks {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.logoName {
  font-weight: 600;
}

@media (min-width: 768px) {
  .container {
    margin: 1rem 0;
  }

  .linkContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 1rem;
  }

  .nav {
    display: contents;
  }

  .logo{
    all: unset;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    font-size: large;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .externalLinks {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-content: center;
    margin-left: 1rem;
  }
}

</style>