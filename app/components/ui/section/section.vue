t
<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  id: string;
  class?: ClassValue;
}>();
</script>

<template>
  <section :id="id" :class="cx('py-20', props.class)">
    <slot />
  </section>
</template>
