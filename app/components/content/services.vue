<script setup lang="ts">
const { data: services } = await useAsyncData(async () =>
  queryCollection("services_en").all()
);
</script>

<template>
  <UiSection
    v-if="services"
    id="services"
    class="blue bg-gradient-to-b from-[#DEE7FC] to-[#FAF5FF]"
  >
    <UiSectionContent as-child>
      <UiTabs :default-value="services[0]?.id">
        <div>
          <UiSectionHeader>
            <UiSectionTitle>
              <slot name="title" mdc-unwrap="p" />
            </UiSectionTitle>

            <UiSectionDescription>
              <slot />
            </UiSectionDescription>
          </UiSectionHeader>
          <UiTabsList>
            <UiTabsTrigger
              v-for="service in services"
              :key="service.id"
              :value="service.id"
            >
              {{ service.title }}
            </UiTabsTrigger>
          </UiTabsList>
        </div>

        <UiTabsContent
          v-for="service in services"
          :key="service.id"
          :value="service.id"
          class="flex flex-col justify-end"
        >
          <div class="flex justify-center h-80 pb-16">
            <NuxtImg :src="service.image" loading="lazy" />
          </div>

          <ContentRenderer :value="service" class="h-[28ch] pb-8" />

          <div class="flex gap-4">
            <UiButtonLink :to="service.path">
              {{ $t("services.read-more") }}
            </UiButtonLink>
            <UiButtonLink variant="link" :to="service.path">
              {{ $t("services.see-all") }}
              <Icon name="lucide:chevron-right" class="text-xl ml-3" />
            </UiButtonLink>
          </div>
        </UiTabsContent>
      </UiTabs>
    </UiSectionContent>
  </UiSection>
</template>
