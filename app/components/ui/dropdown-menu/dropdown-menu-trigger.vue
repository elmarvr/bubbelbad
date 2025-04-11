<script setup lang="ts">
import { type DropdownMenuTriggerProps, useForwardProps } from "reka-ui";

const props = defineProps<
  DropdownMenuTriggerProps & {
    class?: ClassValue;
  }
>();
const delagated = reactiveOmit(props, ["class"]);
const forwarded = useForwardProps(delagated);
</script>

<template>
  <RekaDropdownMenuTrigger
    :class="cx('outline-none', props.class)"
    v-bind="forwarded"
  >
    <slot />
  </RekaDropdownMenuTrigger>
</template>
