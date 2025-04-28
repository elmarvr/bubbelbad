<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";

const props = withDefaults(
  defineProps<
    TabsRootProps & {
      class?: ClassValue;
    }
  >(),
  {
    orientation: "vertical",
  }
);
const emits = defineEmits<TabsRootEmits>();
const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardPropsEmits(delegated, emits);
</script>

<template>
  <RekaTabsRoot
    v-bind="forwarded"
    :class="
      cx(
        'grid data-[orientation=vertical]:grid-cols-2 w-full gap-x-32',
        props.class
      )
    "
  >
    <slot />
  </RekaTabsRoot>
</template>
