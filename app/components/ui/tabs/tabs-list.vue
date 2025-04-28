<script setup lang="ts">
import type { ClassValue } from "cva";
import type { TabsListProps } from "reka-ui";

const props = defineProps<TabsListProps & { class?: ClassValue }>();
const delegated = reactiveOmit(props, ["class"]);
</script>

<template>
  <RekaTabsList
    v-bind="delegated"
    :class="cx('flex data-[orientation=vertical]:flex-col', props.class)"
  >
    <slot />
  </RekaTabsList>
</template>
