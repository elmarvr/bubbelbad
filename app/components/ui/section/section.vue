<script setup lang="ts">
import type { ClassValue, VariantProps } from "cva";

const sectionVariants = cva({
  base: "py-20",
  variants: {
    align: {
      start: "*:data-[slot=header]:items-start",
      center:
        "*:data-[slot=header]:items-center *:data-[slot=header]:text-center",
      end: "*:data-[slot=header]:items-end",
    },
  },
});

type SectionVariants = VariantProps<typeof sectionVariants>;

const props = defineProps<{
  id: string;
  class?: ClassValue;
  align?: SectionVariants["align"];
}>();
</script>

<template>
  <section
    :id="id"
    :class="
      sectionVariants({
        class: props.class,
        align,
      })
    "
  >
    <slot />
  </section>
</template>
