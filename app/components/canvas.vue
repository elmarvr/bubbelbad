<script setup lang="ts">
const props = defineProps<{
  class?: ClassValue;
}>();

const canvas = useTemplateRef("canvas");

onMounted(() => {
  updateCanvas();
});

useEventListener("resize", () => {
  updateCanvas();
});

defineExpose({
  getContext() {
    return canvas.value?.getContext("2d");
  },
  get width() {
    return canvas.value?.width ?? 0;
  },
  get height() {
    return canvas.value?.height ?? 0;
  },
});

function updateCanvas() {
  if (!canvas.value) return;

  const rect = canvas.value.getBoundingClientRect();
  canvas.value.width = rect.width;
  canvas.value.height = rect.height;
}
</script>

<template>
  <canvas ref="canvas" :class="props.class" />
</template>
