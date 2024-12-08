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
  layout: {
    type: String,
    required: false,
    default: 'text-left'
  },
  align: {
    type: String,
    required: false,
    default: 'center',
  },
  fullImage: {
    required: false,
  },
  fullComponent: {
    required: false,
  }
})
</script>

<template>
  <div class="container">
    <section class="content-block style" :class="layout" :style="{ alignItems: align }">
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

    <section v-if="fullImage || fullComponent" class="full-width">
      <div class="fullWidthImage" v-if="fullImage">
        <img :src="fullImage" alt="Case Study Image"/>
      </div>
      <div class="fullWidthImage" v-else-if="fullComponent">
        <component :is="fullComponent"/>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    gap: 1rem;
  }
}

section.content-block {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  text-align: left;

  .content {
    width: 100%;
  }

  .image {
    align-content: center;

    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
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