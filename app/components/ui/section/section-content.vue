<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div :class="cx('container', props.class)">
    <slot />
  </div>
</template>
