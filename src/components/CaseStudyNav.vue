<script setup>
import { useRouter } from "vue-router";
import {ProjectsArray} from "../assets/ProjectsArray.js";

const props = defineProps( {
  index: {
    type: Number,
    required: false
  },
  pageName: {
    type: String,
    required: false
  }
} );
const links = ProjectsArray
    .sort((a, b) => a.index - b.index)
    .map (project => project.name)
    .flat();
const prevLink = props.index > 0 ? links[props.index - 1] : links[links.length - 1];
const nextLink = props.index < links.length - 1 ? links[props.index + 1] : links[0];
const router = useRouter();
</script>

<template>
  <div class="container">
    <button @click="router.push({ name: prevLink })">
      ← Prev
    </button>

    <h3>Thanks for watching!</h3>

    <button @click="router.push({ name: nextLink })">
      Next →
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 20px;
  width: 90vw;
  margin: 0 auto;
  align-items: center;
}

button {
  border: unset;
  background-color: unset;
  margin: 1rem;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 1.1rem;
}

h3 {
  text-align: center;
  color: black;
  font-weight: bold;
}

@media (min-width: 768px) {
  .container {
    width: clamp(40vw, 50vw, 368px);
  }
}
</style>