<script setup lang="ts">
import type { ClassValue } from "cva";

const rootRef = useTemplateRef("root");
const props = defineProps<{ class?: ClassValue }>();

const { scrollNext, scrollPrev } = provideCarousel();

useEventListener(rootRef, "keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    scrollNext();
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    scrollPrev();
    return;
  }
});
</script>

<template>
  <div
    ref="root"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    :class="cx(props.class)"
  >
    <slot />
  </div>
</template>
