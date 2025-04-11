t
<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <section :class="cx('py-20', props.class)">
    <slot />
  </section>
</template>
