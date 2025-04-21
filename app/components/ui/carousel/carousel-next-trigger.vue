<script setup lang="ts">
import { type PrimitiveProps } from "reka-ui";

const props = defineProps<
  PrimitiveProps & {
    class?: ClassValue;
  }
>();

const delegated = reactiveOmit(props, ["class"]);
const { scrollNext, state } = useCarousel();
</script>

<template>
  <UiButton
    v-bind="delegated"
    :disabled="!state.canScrollNext"
    variant="outline"
    :class="cx('touch-manipulation size-8 rounded-full p-0', props.class)"
    @click="scrollNext"
  >
    <slot>
      <Icon name="lucide:arrow-right" class="text-2xl" />
      <span class="sr-only">Next</span>
    </slot>
  </UiButton>
</template>
