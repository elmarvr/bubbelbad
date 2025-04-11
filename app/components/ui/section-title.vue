<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <h2 :class="cx('text-4xl font-bold', props.class)">
    <slot />
  </h2>
</template>
