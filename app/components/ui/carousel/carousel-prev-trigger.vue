<script setup lang="ts">
import { type PrimitiveProps } from "reka-ui";

const props = defineProps<
  PrimitiveProps & {
    class?: ClassValue;
  }
>();

const delegated = reactiveOmit(props, ["class"]);
const { scrollPrev, state } = useCarousel();
</script>

<template>
  <UiButton
    v-bind="delegated"
    :disabled="!state.canScrollPrev"
    variant="outline"
    :class="cx('touch-manipulation size-8 rounded-full p-0', props.class)"
    @click="scrollPrev"
  >
    <slot>
      <Icon name="lucide:arrow-left" class="text-2xl" />
      <span class="sr-only">Previous</span>
    </slot>
  </UiButton>
</template>
