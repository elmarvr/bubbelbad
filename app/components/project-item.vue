<script setup lang="ts">
import type { ProjectsEnCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsEnCollectionItem;
}>();

const item = useTemplateRef("item");
const isHovered = useElementHover(item);
</script>

<template>
  <div
    ref="item"
    class="w-full relative py-6 hover:bg-[#e5679f] group hover:text-white"
  >
    <div class="container flex gap-12 relative z-10">
      <div
        class="h-80 aspect-video rounded-md transition overflow-hidden shrink-0 relative group-hover:scale-105"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover transition group-hover:scale-110"
          :src="`https://picsum.photos/seed/${project.title}/800/800/`"
        />
      </div>

      <div>
        <h3 class="text-6xl pb-4">
          {{ project.title }}
        </h3>
        <ContentRenderer :value="project" />
      </div>
    </div>

    <BubbleParticles
      v-if="isHovered"
      class="w-full h-full absolute top-0 left-0"
    />
  </div>
</template>
