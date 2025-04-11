<script setup lang="ts">
import type { ClassValue } from "cva";
import { type DropdownMenuItemProps, useForwardProps } from "reka-ui";

const props = defineProps<DropdownMenuItemProps & { class?: ClassValue }>();

const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardProps(delegated);
</script>

<template>
  <RekaDropdownMenuItem
    v-bind="forwarded"
    :class="
      cx(
        'relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
        props.class
      )
    "
  >
    <slot />
  </RekaDropdownMenuItem>
</template>
