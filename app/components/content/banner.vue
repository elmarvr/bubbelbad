<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topTrack = useTemplateRef("toptrack");
const bottomTrack = useTemplateRef("bottomtrack");

const banner = useTemplateRef("banner");

const { x, y, isOutside } = useMouseInElement(banner, {});

onMounted(() => {
  const width = topTrack.value?.offsetWidth ?? 0;

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

function onBeforeEnter(el: Element) {
  gsap.set(el, {
    scale: 0.5,
    opacity: 0,
  });
}

function onEnter(el: Element, done: () => void) {
  gsap.to(el, {
    scale: 1,
    opacity: 1,
    duration: 0.2,
    ease: "bounce.in",
    onComplete: done,
  });
  document.body.style.cursor = "none";
}

function onLeave() {
  document.body.style.cursor = "auto";
}
</script>

<template>
  <UiSection
    ref="banner"
    class="flex purple flex-col hover:cursor-none gap-4 w-full whitespace-nowrap font-display text-9xl font-bold leading-none overflow-x-hidden bg-linear-to-b from-[#C3C3FD] via-[#EAE8FE] to-[#D9D8FD]"
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

    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
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
    </Transition>
  </UiSection>
</template>
