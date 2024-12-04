<script setup>
defineProps({
  image: {
    required: false
  },
  contentComponent1: {
    required: true
  },
  contentComponent2: {
    required: false
  },
  layoutStyle: {
    type: String,
    required: false,
    default: 'text-left'
  }
})
</script>

<template>
  <section class="content-block style" :class="layoutStyle">
    <div class="content">
      <component :is="contentComponent1"/>
    </div>

    <template v-if="image || contentComponent2">
      <div v-if="image" class="image">
        <img :src="image" alt="Case Study Image"/>
      </div>
      <div v-else-if="contentComponent2" class="content">
        <component :is="contentComponent2"/>
      </div>
    </template>

  </section>
</template>

<style scoped>
/* Mobile first */
section.content-block {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  text-align: left;
  margin: 1rem;
  align-items: flex-start;

  .image {
    align-content: center;

    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    margin-inline: 8vw;
    gap: 4rem;

    &.style {
      flex-direction: row;

      &.text-right {
        flex-direction: row-reverse;
      }
    }

    .image {
      flex-basis: 50%;
      max-width: 50%;

      img {
        max-height: 50vh;
      }
    }

    .content {
      flex-basis: 50%;
      max-width: 50%;
      align-content: center;
    }
  }
}
</style>