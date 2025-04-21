<script setup lang="ts">
import type { ClassValue } from "cva";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: ClassValue;
}>();

const { node } = useCarousel();
</script>

<template>
  <div ref="node" class="overflow-hidden">
    <div :class="cx('flex -ml-8', props.class)" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
