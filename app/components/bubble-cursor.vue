<script setup lang="ts">
const element = useHoverElement();
const isVisible = computed(() => !!element.value);
const prevCursor = ref("auto");

watch(isVisible, (v) => {
  if (v) {
    prevCursor.value = document.body.style.cursor;
    document.body.style.cursor = "none";
    return;
  }
  document.body.style.cursor = prevCursor.value;
});

const { x, y } = useMouse({
  type: "client",
});
</script>

<template>
  <div
    v-if="isVisible"
    class="shadow-bubble bg-background/70 backdrop-blur-sm pointer-events-none fixed -translate-1/2 size-16 flex justify-center items-center rounded-full z-50"
    :style="{
      top: y + 'px',
      left: x + 'px',
    }"
  >
    <Icon name="lucide:arrow-up" class="text-3xl rotate-45" />
  </div>
  <slot />
</template>
