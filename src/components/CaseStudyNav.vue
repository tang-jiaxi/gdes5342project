<script setup>
import { useRouter } from "vue-router";

const props = defineProps( {
  index: {
    type: Number,
    required: true
  }
} );
const links = ["GovTech", "SASE"];
const prevLink = props.index > 0 ? links[props.index - 1] : links[links.length - 1];
const nextLink = props.index < links.length - 1 ? links[props.index + 1] : links[0];
const router = useRouter();
</script>

<template>
  <div class="container">
    <button @click="router.push({ name: prevLink })">
      ← Prev
    </button>

    <h4>Thanks for watching!</h4>

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
  width: 95%;
  margin: 0 auto;
}

button {
  border: unset;
  background-color: unset;
  margin: 1rem;
}

h4 {
  text-align: center;
}

@media (min-width: 768px) {
  .container {
    min-width: fit-content;
    width: 50%;
  }
}
</style>