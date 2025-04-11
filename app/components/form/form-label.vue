<script setup lang="ts">
import type { ClassValue } from "cva";
import { useFieldError } from "vee-validate";

const props = defineProps<{
  for?: string;
  class?: ClassValue;
}>();

const forAttr = computed(() => props.for ?? field?.id);
const field = useFormField();
const error = useFieldError();
</script>

<template>
  <UiLabel
    :class="cx('data-error:text-destructive', props.class)"
    :for="forAttr"
    :data-error="error ? '' : undefined"
  >
    <slot />
  </UiLabel>
</template>
