<script setup lang="ts">
const { data: services } = await useAsyncData(async () =>
  queryCollection("services_en").all()
);
</script>

<template>
  <UiSection v-if="services" class="grid grid-cols-2 gap-20">
    <UiSectionTitle class="pb-8">Services</UiSectionTitle>

    <RekaTabsRoot
      :default-value="services[0]?.id"
      orientation="vertical"
      class="contents"
    >
      <div class="row-start-2">
        <RekaTabsList class="flex flex-col">
          <RekaTabsTrigger
            class="text-start rounded-full px-5 py-3 flex items-center data-active:bg-primary data-active:text-primary-foreground"
            v-for="(service, index) in services"
            :key="service.id"
            :value="service.id"
          >
            <span class="text-4xl w-14"> 0{{ index + 1 }} </span>
            {{ service.title }}
          </RekaTabsTrigger>
        </RekaTabsList>
      </div>
      <div class="flex row-start-2">
        <RekaTabsContent
          v-for="service in services"
          :key="service.id"
          :value="service.id"
        >
          <ContentRenderer :value="service" />

          <div class="pt-8 flex gap-4">
            <UiButtonLink class="w-full" :to="service.path">
              Read more
            </UiButtonLink>
            <UiButtonLink variant="outline" class="w-full" :to="service.path">
              See all
            </UiButtonLink>
          </div>
        </RekaTabsContent>
      </div>
    </RekaTabsRoot>
  </UiSection>
</template>
