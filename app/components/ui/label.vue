<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  for?: string;
  class?: ClassValue;
}>();
</script>

<template>
  <RekaLabel
    :for="props.for"
    :class="cx('leading-none font-medium', props.class)"
  >
    <slot />
  </RekaLabel>
</template>
