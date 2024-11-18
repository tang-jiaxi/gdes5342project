<script setup>
import {ProjectsArray} from "../assets/ProjectsArray.js";
import Card from "../components/Card.vue";
</script>

<template>
  <div class="container">
    <div class="welcomeMessage">
      <h1>
        Hi, I’m Jiaxi Tang!<br>
        UI Engineer and UX Designer.
      </h1>
      <p>
        I’m pursuing a double degree in <span>Computer Science and
        Graphic Design with a minor in UX Design.</span> Currently the
        President of design consultancy club, Design U!
      </p>
    </div>

    <picture>
      <source srcset="../assets/HomeBackgroundPC.png" media="(min-width: 768px)" />
      <img src="../assets/HomeBackgroundMobile.png" alt="Homepage background" width="100%"/>
    </picture>

    <div class="cards">
      <div v-for="(project, index) in ProjectsArray" :key="index">
        <Card
          :imagePC="project.imagePC"
          :imageMobile="project.imageMobile"
          :title="project.title"
          :tags="project.tags"
          :hashtags="project.hashtags"
          :link="project.link"
        >
        </Card>
      </div>
    </div>

    <div class="endMessage">
      <h3 style="font-weight: bold" >That's all!</h3>
      <h3 style="font-weight: normal">You've reached the end :)</h3>
    </div>

  </div>
</template>

<style scoped>

.welcomeMessage {
  margin-inline: 1rem;
  margin-top: 4vh;
  h1 {
    font-size: clamp(1.6rem, 4.5vw, 2.5rem);
    line-height: clamp(2.25rem, 6vw, 3rem);
    padding-bottom: 0;
  }

  p {
    font-size: clamp(1rem, 4.5vw, 1.1rem);
    line-height: clamp(1.25rem, 6vw, 1.4rem);
  }

  span {
    text-decoration: underline;
    text-decoration-thickness: 0.125rem;
    text-decoration-color: #DD5868;
    text-underline-offset: 0.25rem;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #FBF4F5;
}

.endMessage {
  text-align: center;
  background-color: #FBF4F5;
  margin: unset;
  padding-top: 5rem;

  h3 {
    margin: unset;
  }
}

@media (min-width: 768px) {
  .welcomeMessage {
    margin-inline: 5rem;
    margin-top: 16vh;
    position: absolute;

    h1 {
      font-size: 3vw;
      line-height: 3.75vw;
    }

    p {
      font-size: 2vw;
      line-height: 2.9vw;
      width: 50vw;
    }

    span {
      text-decoration: underline;
      text-decoration-thickness: 0.25vw;
      text-decoration-color: #DD5868;
      text-underline-offset: 0.55vw;
    }
  }
}
</style>