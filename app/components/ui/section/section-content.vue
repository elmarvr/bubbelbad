<script setup lang="ts">
import type { ClassValue } from "cva";
import type { PrimitiveProps } from "reka-ui";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: ClassValue;
    }
  >(),
  {
    as: "div",
  }
);
</script>

<template>
  <RekaPrimitive
    data-slot="content"
    :class="cx('container', props.class)"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </RekaPrimitive>
</template>
