<script setup lang="ts">
const { data: testimonials } = await useAsyncData(async () =>
  queryCollection("testimonials_en").all()
);
</script>

<template>
  <UiSection
    id="testimonials"
    class="yellow relative bg-[url('/patterns/tiles.svg')]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 108"
      fill="none"
      class="w-full absolute top-0 -translate-y-full left-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 78.2249L42.9268 65.7872C84.8781 53.7264 170.732 28.851 255.61 13.775C341.463 -0.924142 426.341 -5.82384 512.195 8.87526C597.073 23.9513 682.927 58.6261 767.805 65.7872C853.659 73.3252 938.537 53.7264 1024.39 46.1884C1109.27 38.6504 1195.12 43.5501 1237.07 46.1884L1280 48.4498V108H1237.07C1195.12 108 1109.27 108 1024.39 108C938.537 108 853.659 108 767.805 108C682.927 108 597.073 108 512.195 108C426.341 108 341.463 108 255.61 108C170.732 108 84.8781 108 42.9268 108H0V78.2249Z"
        fill="var(--color-background)"
      />
    </svg>

    <UiSectionContent class="flex gap-12">
      <UiSectionHeader>
        <UiSectionTitle>
          <slot name="title" mdc-unwrap="p" />
        </UiSectionTitle>

        <UiSectionDescription>
          <slot />
        </UiSectionDescription>
      </UiSectionHeader>

      <UiCarousel>
        <UiCarouselContent>
          <UiCarouselItem
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="basis-1/2 flex flex-col gap-8"
          >
            <div>
              <Icon
                v-for="i in 5"
                name="lucide:star"
                class="text-4xl"
                :key="i"
              />
            </div>

            <ContentRenderer :value="testimonial" />

            <div class="flex items-center gap-5">
              <div class="size-14 bg-muted rounded-full" />
              <div>
                <div class="font-bold">
                  {{ testimonial.name }}
                </div>
                <div class="text-muted">
                  {{ testimonial.role }}
                </div>
              </div>
            </div>
          </UiCarouselItem>
        </UiCarouselContent>

        <div class="flex justify-between w-full items-center pt-12">
          <UiCarouselIndicator />

          <div class="flex gap-4">
            <UiCarouselPrevTrigger />
            <UiCarouselNextTrigger />
          </div>
        </div>
      </UiCarousel>
    </UiSectionContent>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 78"
      class="w-full absolute bottom-px translate-y-full left-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1280 22.1172L1237.07 30.9848C1195.12 39.5837 1109.27 57.319 1024.39 68.0676C938.537 78.5476 853.659 82.0409 767.805 71.5609C682.927 60.8123 494.878 36.0904 410 30.9848C324.146 25.6105 245.354 42.063 159.5 47.4374C74.6219 52.8117 59.9512 47.3221 18 45.4411L0 43.3458V0.888672H42.9268C84.8779 0.888672 170.732 0.888672 255.61 0.888672C341.463 0.888672 426.341 0.888672 512.195 0.888672C597.073 0.888672 682.927 0.888672 767.805 0.888672C853.659 0.888672 938.537 0.888672 1024.39 0.888672C1109.27 0.888672 1195.12 0.888672 1237.07 0.888672H1280V22.1172Z"
        fill="var(--color-background)"
      />
    </svg>
  </UiSection>
</template>

<style>
#testimonials + section {
  padding-top: calc(var(--spacing) * 40);
}

section:has(+ #testimonials) {
  padding-bottom: calc(var(--spacing) * 40);
}
</style>
