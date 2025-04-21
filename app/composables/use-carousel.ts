import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue, {
  type EmblaCarouselVueType,
} from "embla-carousel-vue";
import type { UnwrapRef } from "vue";

export type CarouselApi = NonNullable<UnwrapRef<EmblaCarouselVueType[1]>>;

const [provideCarousel, injectCarousel] = createInjectionState(() => {
  const state = reactive({
    canScrollNext: false,
    canScrollPrev: false,
    selectedScrollSnap: 0,
    scrollSnapList: [] as number[],
  });

  const [node, api] = emblaCarouselVue({
    align: "start",
    loop: true,
    axis: "x",
  });

  const events = ["init", "reInit", "select"] as const;

  onMounted(() => {
    events.forEach((event) => {
      api.value?.on(event, onSelect);
    });
  });

  onUnmounted(() => {
    events.forEach((event) => {
      api.value?.off(event, onSelect);
    });
  });

  function scrollNext() {
    if (api.value) {
      api.value.scrollNext();
    }
  }

  function scrollPrev() {
    if (api.value) {
      api.value.scrollPrev();
    }
  }

  const onSelect = (api: CarouselApi) => {
    state.canScrollNext = api.canScrollNext();
    state.canScrollPrev = api.canScrollPrev();
    state.selectedScrollSnap = api.selectedScrollSnap();
    state.scrollSnapList = api.scrollSnapList();
  };

  return {
    node,
    api,
    state,
    scrollNext,
    scrollPrev,
  };
});

function useCarousel() {
  const carouselState = injectCarousel();

  if (!carouselState) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return carouselState;
}

export { useCarousel, provideCarousel };
