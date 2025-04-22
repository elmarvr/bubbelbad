<template>
  <div
    ref="banner"
    class="flex flex-col hover:cursor-none py-20 gap-4 w-full whitespace-nowrap font-display text-9xl font-bold leading-none overflow-x-hidden"
  >
    <div class="relative">
      <div class="inline-flex gap-16" ref="toptrack">
        <span v-for="i in 2" :key="'top-' + i"> <slot mdc-unwrap="p" />! </span>
      </div>
    </div>

    <div class="relative" dir="rtl">
      <div class="inline-flex gap-16" ref="bottomtrack">
        <span v-for="i in 2" :key="'bottom-' + i">
          !<slot mdc-unwrap="p" />
        </span>
      </div>
    </div>

    <div
      v-if="!isOutside"
      class="shadow-bubble pointer-events-none absolute -translate-1/2 size-16 flex justify-center items-center rounded-full z-50"
      :style="{
        top: y + 'px',
        left: x + 'px',
      }"
    >
      <Icon name="lucide:arrow-up" class="text-3xl rotate-45" />
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topTrack = useTemplateRef("toptrack");
const bottomTrack = useTemplateRef("bottomtrack");

const banner = useTemplateRef("banner");

const { x, y, isOutside } = useMouseInElement(banner, {});

onMounted(() => {
  const width = topTrack.value.offsetWidth;

  const tracks = [topTrack.value, bottomTrack.value];

  tracks.forEach((track, index) => {
    gsap.to(track, {
      x: `${((index % 2 === 0 ? -1 : 1) * width) / 3}px`,
      ease: "linear",
      scrollTrigger: {
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
});

watch(isOutside, (v) => {
  document.body.style.cursor = v ? "auto" : "none";
});
</script>
