<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import type { ButtonProps } from "./button.vue";

export interface ButtonLinkProps extends ButtonProps {
  to: RouteLocationRaw;
}

const props = defineProps<ButtonLinkProps>();

const delagatedProps = reactiveOmit(props, ["variant"]);
</script>

<template>
  <UiButton :variant="variant" as-child>
    <NuxtLink v-bind="delagatedProps">
      <slot />
    </NuxtLink>
  </UiButton>
</template>
