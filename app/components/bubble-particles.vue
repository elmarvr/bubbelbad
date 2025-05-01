<script setup lang="ts">
import type { ClassValue } from "cva";
import type { Bubble } from "~/utils/bubble";

const props = defineProps<{
  class?: ClassValue;
}>();

const canvas = useTemplateRef("canvas");
const bubbles = ref<Bubble[]>([]);

onMounted(() => {
  if (!canvas.value) return;

  bubbles.value = createRandomBubbles();
});

useRafFn(() => {
  if (!canvas.value) return;
  const ctx = canvas.value.getContext();
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  bubbles.value.forEach((bubble, index) => {
    bubble.update();
    bubble.draw(ctx);

    if (
      bubble.y + bubble.radius < 0 ||
      bubble.x + bubble.radius < 0 ||
      bubble.x - bubble.radius > canvas.value!.width
    ) {
      // Remove bubble when out of screen
      bubbles.value = bubbles.value.filter((_, i) => i !== index);
    }
  });
});

useIntervalFn(() => {
  if (!canvas.value) return;

  bubbles.value.push(...createRandomBubbles());
}, 200);

function createRandomBubbles() {
  const count = Math.floor(Math.random() * 5) + 1;

  if (!canvas.value) return [];

  return Array.from({ length: count }, () => {
    const radius = 10 + Math.random() * 30;
    const x = Math.random() * canvas.value!.width;
    const y = canvas.value!.height + Math.random() * 50;
    const speed = 1 + Math.random() * 2;
    const drift = (Math.random() - 0.5) * 2;

    return createBubble({ x, y, radius, speed, drift });
  });
}
</script>

<template>
  <Canvas ref="canvas" :class="cx('size-full', props.class)" />
</template>
