<script setup>
import Tag from '../components/Tag.vue'

defineProps( {
  imagePC: {
    type: String,
    required: true
  },
  imageMobile: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <router-link :to="{ name: link }" class="link">
  <div class="container">
    <picture>
      <source :srcset="imagePC" media="(min-width: 768px)"/>
      <img :src="imageMobile" :alt="imageAlt" width="100%"/>
    </picture>
    <div class="content">
      <h1>{{title}}</h1>
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="index">
          <Tag :tagName="tag"></Tag>
        </div>
      </div>
      <div class="hashtags">
        <div v-for="(hashtag, index) in hashtags" :key="index">
          {{ hashtag }}
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<style scoped>

.link {
  text-decoration: unset;
}

.link:visited {
  color: inherit;
}

.container {
  border: black 1.5px solid;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  margin: 0 auto;
  width: 90vw;
}

picture {
  border-bottom: black 1.5px solid;
}

.content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
     margin: unset;
     font-size: 6vw;
  }

  .hashtags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    row-gap: 0rem;
    color: #C3BBBB;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}

@media (min-width: 768px) {
  .container {
    width: 75vw;
  }

  .content h1 {
    margin: unset;
    font-size: 3vw;
  }
}
</style>