<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <h2 data-slot="title" :class="cx('text-5xl', props.class)">
    <slot />
  </h2>
</template>
