<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <h2 :class="cx('text-7xl pb-20', props.class)">
    <slot />
  </h2>
</template>
