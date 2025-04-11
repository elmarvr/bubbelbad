<script setup lang="ts">
import { useField } from "vee-validate";
import { computed, toRef } from "vue";
import type { ClassValue } from "cva";

const props = defineProps<{
  name: string;
  class?: ClassValue;
}>();

const name = toRef(props, "name");

const { handleChange, handleBlur, value, errors } = useField(name, undefined, {
  syncVModel: true,
});

const isInvalid = computed(() => errors.value.length > 0);

const ctx = provideFormField(name);

const field = computed(() => ({
  id: ctx.id,
  name: name.value,
  modelValue: value.value as any,
  "onUpdate:modelValue": (e: any) => handleChange(e, true),
  onBlur: (e: Event) => handleBlur(e, true),
  "aria-describedby": isInvalid.value ? ctx.messageId : undefined,
  "aria-invalid": isInvalid.value,
}));
</script>

<template>
  <div :class="cx('flex w-full flex-col gap-y-2', props.class)">
    <slot :field="field" />
  </div>
</template>
