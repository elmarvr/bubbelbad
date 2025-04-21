<script setup lang="ts">
import type { ClassValue } from "cva";
const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cx('min-w-0 shrink-0 basis-full pl-8', props.class)"
  >
    <slot />
  </div>
</template>
