<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div
    data-slot="header"
    :class="cx('container flex flex-col pb-20', props.class)"
  >
    <slot />
  </div>
</template>
