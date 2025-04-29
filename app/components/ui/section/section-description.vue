<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div data-slot="description" :class="cx('pt-6 max-w-2xl', props.class)">
    <slot />
  </div>
</template>
