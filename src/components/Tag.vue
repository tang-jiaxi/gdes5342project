<script setup>
defineProps({
  tagName: {
    type: String,
    required: true
  }
})

// const tagData = computed(() => {
//   switch(tagName) {
//     case 'UX':
//       return {
//         text: 'UI/UX Design',
//         color: '#DD5868',
//       }
//     case 'CS':
//       return {
//         text: 'Computer Science',
//         color: '#75ABDB',
//       }
//     default:
//       return {
//         text: tagName,
//       }
//   }
// })
</script>

<template>
    <div v-if="tagName=='UX'">
      <div class="container">
        <div class="circle" style="background-color:#DD5868"></div>
        <p>UI/UX Design</p>
      </div>
    </div>
    <div v-else-if="tagName=='CS'">
      <div class="container">
        <div class="circle" style="background-color:#75ABDB"></div>
        <p>Computer Science</p>
      </div>
    </div>
    <div v-else-if="tagName=='School'">
      <div class="container">
        <p>School</p>
      </div>
    </div>
    <div v-else-if="tagName=='Work'">
      <div class="container">
        <p>Work</p>
      </div>
    </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  border: 1px black solid;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
}

.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 5rem;
}

p {
  margin: unset;
  white-space: nowrap;
}
</style>