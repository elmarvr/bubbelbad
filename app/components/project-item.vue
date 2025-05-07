<script setup lang="ts">
import type { ProjectsEnCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsEnCollectionItem;
}>();

const item = useTemplateRef("item");
const isHovered = useHoverElement(item);
</script>

<template>
  <div
    ref="item"
    class="w-full relative py-6 transition hover:bg-accent group hover:text-accent-foreground"
  >
    <div class="container relative flex z-10 items-center gap-16">
      <div
        class="h-96 shrink-0 aspect-video bg-muted rounded-xl duration-300 overflow-hidden transition group-hover:scale-105"
      >
        <NuxtImg
          :src="project.image"
          format="webp"
          class="size-full object-cover"
        />
      </div>

      <div>
        <h4 class="text-4xl pb-2">
          {{ project.title }}
        </h4>
        <ContentRenderer :value="project" />
      </div>
    </div>
    <BubbleParticles v-if="isHovered" class="size-full absolute left-0 top-0" />
  </div>
</template>
