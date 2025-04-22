<script setup lang="ts">
const { data: testimonials } = await useAsyncData(async () =>
  queryCollection("testimonials_en").all()
);

const items = computed(() => {
  return [...(testimonials.value ?? []), ...(testimonials.value ?? [])];
});
</script>

<template>
  <UiSection class="yellow bg-[url('/patterns/tiles.svg')]">
    <UiSectionContent class="flex gap-20">
      <div>
        <UiSectionTitle class="pb-4 w-min">
          <slot name="title" mdc-unwrap="p" />
        </UiSectionTitle>

        <slot />
      </div>

      <div>
        <UiCarousel>
          <UiCarouselContent>
            <UiCarouselItem
              v-for="testimonial in items"
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
      </div>
    </UiSectionContent>
  </UiSection>
</template>
