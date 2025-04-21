<script setup lang="ts">
import type { ClassValue } from "cva";
import { useForwardProps, type TabsTriggerProps } from "reka-ui";

const props = defineProps<TabsTriggerProps & { class?: ClassValue }>();
const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardProps(delegated);
</script>

<template>
  <RekaTabsTrigger
    v-bind="forwarded"
    :class="
      cx(
        'text-start font-display text-2xl font-semibold rounded-full px-6 py-4 flex items-center data-active:bg-accent data-active:text-accent-foreground',
        props.class
      )
    "
  >
    <slot />
  </RekaTabsTrigger>
</template>
