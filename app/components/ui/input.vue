<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cx('flex h-10 w-full rounded-md px-3 py-2 text-sm bg-border', props.class)
    "
  />
</template>
