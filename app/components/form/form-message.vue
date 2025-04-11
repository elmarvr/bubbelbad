<script setup lang="ts">
import { type ClassValue } from "cva";
import { useFieldError } from "vee-validate";

const props = defineProps<{
  class?: ClassValue;
}>();

const field = useFormField();
const errorMessage = useFieldError();
</script>

<template>
  <p
    v-if="errorMessage"
    :id="field?.messageId"
    :class="cx('text-sm font-medium text-destructive', props.class)"
  >
    <slot>
      {{ errorMessage }}
    </slot>
  </p>
</template>
