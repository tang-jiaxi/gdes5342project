<script setup>
import CardComponent from "./TextCard.vue";
import ImageComponent from "./ImageCaption.vue";

defineProps({
  fileContent: {
    type: String,
    required: true,
  },
});

const parseFileContent = (content) => {
  const lines = content.split("\n");
  const blocks = [];
  let currentBlock = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "CARD_START") {
      currentBlock = { component: "CardComponent", props: {} };
    } else if (trimmed === "CARD_END" && currentBlock) {
      blocks.push(currentBlock);
      currentBlock = null;
    } else if (trimmed === "IMAGE_START") {
      currentBlock = { component: "ImageComponent", props: {} };
    } else if (trimmed === "IMAGE_END" && currentBlock) {
      blocks.push(currentBlock);
      currentBlock = null;
    } else if (currentBlock) {
      const [key, value] = trimmed.split(",").map((str) => str.trim());
      currentBlock.props[key.toLowerCase()] = value;
    }
  }

  return blocks;
};

const parsedBlocks = computed(() => parseFileContent(fileContent));

</script>

<template>
  <div v-for="(block, index) in blocks" :key="index">
    <component :is="block.component" v-bind="block.props" />
  </div>
</template>

<style scoped>

</style>