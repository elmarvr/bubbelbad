<script setup lang="ts">
import type { ClassValue, VariantProps } from "cva";
import type { PrimitiveProps } from "reka-ui";

const buttonVariants = cva({
  base: "px-5 h-12 rounded-full font-medium inline-flex items-center justify-center",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground",
      outline: "border border-primary text-primary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends PrimitiveProps {
  class?: ClassValue;
  variant?: ButtonVariants["variant"];
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), { as: "button" });
const delegated = reactiveOmit(props, ["variant", "class"]);
</script>

<template>
  <RekaPrimitive
    v-bind="delegated"
    :class="buttonVariants({ variant, class: props.class })"
  >
    <slot />
  </RekaPrimitive>
</template>
