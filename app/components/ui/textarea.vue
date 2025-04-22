<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cx(
        'flex min-h-20 w-full rounded-md bg-border px-3 py-2 text-sm',
        props.class
      )
    "
  />
</template>
