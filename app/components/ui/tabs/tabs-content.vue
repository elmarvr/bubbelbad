<script setup lang="ts">
import type { ClassValue } from "cva";
import type { TabsContentProps } from "reka-ui";

const props = defineProps<TabsContentProps & { class?: ClassValue }>();
const delegated = reactiveOmit(props, ["class"]);
</script>

<template>
  <RekaTabsContent v-bind="delegated" :class="cx(props.class)">
    <slot />
  </RekaTabsContent>
</template>
