<script setup lang="ts">
import type { ClassValue } from "cva";
import {
  useForwardPropsEmits,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
} from "reka-ui";

const props = withDefaults(
  defineProps<DropdownMenuContentProps & { class?: ClassValue }>(),
  {
    sideOffset: 4,
  }
);
const emits = defineEmits<DropdownMenuContentEmits>();

const delegatedProps = reactiveOmit(props, ["class"]);
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RekaDropdownMenuPortal>
    <RekaDropdownMenuContent
      v-bind="forwarded"
      :class="
        cx(
          'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class
        )
      "
    >
      <slot />
    </RekaDropdownMenuContent>
  </RekaDropdownMenuPortal>
</template>
