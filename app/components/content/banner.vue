<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = useTemplateRef("section");
useHoverElement(computed(() => unrefElement(section)));

const topTrack = useTemplateRef("toptrack");
const bottomTrack = useTemplateRef("bottomtrack");

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
</script>

<template>
  <UiSection
    id="banner"
    ref="section"
    class="purple w-full bg-linear-to-b from-[#C3C3FD] via-[#EAE8FE] to-[#D9D8FD]"
  >
    <div
      class="flex flex-col gap-4 whitespace-nowrap font-display text-9xl font-bold leading-none overflow-hidden"
    >
      <div class="relative">
        <div class="inline-flex gap-16" ref="toptrack">
          <span v-for="i in 2" :key="'top-' + i">
            <slot mdc-unwrap="p" />!
          </span>
        </div>
      </div>

      <div class="relative" dir="rtl">
        <div class="inline-flex gap-16" ref="bottomtrack">
          <span v-for="i in 2" :key="'bottom-' + i">
            !<slot mdc-unwrap="p" />
          </span>
        </div>
      </div>
    </div>

    <div class="container relative h-full">
      <NuxtImg
        class="absolute bottom-full translate-y-1/4 left-0 object-cover h-[700px]"
        src="/images/milkshake-duck.png"
        loading="lazy"
        :modifiers="{
          flop: true,
        }"
      />
    </div>
  </UiSection>
</template>
