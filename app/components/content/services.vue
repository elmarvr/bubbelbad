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
    <UiSectionHeader>
      <UiSectionTitle>
        <slot name="title" mdc-unwrap="p" />
      </UiSectionTitle>

      <UiSectionDescription>
        <slot />
      </UiSectionDescription>
    </UiSectionHeader>

    <UiSectionContent>
      <UiTabs :default-value="services[0]?.id">
        <UiTabsList>
          <UiTabsTrigger
            v-for="service in services"
            :key="service.id"
            :value="service.id"
          >
            {{ service.title }}
          </UiTabsTrigger>
        </UiTabsList>

        <UiTabsContent
          v-for="service in services"
          :key="service.id"
          :value="service.id"
        >
          <ContentRenderer :value="service" />

          <div class="pt-8 flex gap-4">
            <UiButtonLink :to="service.path"> Read more </UiButtonLink>
            <UiButtonLink variant="link" :to="service.path">
              See all
              <Icon name="lucide:chevron-right" class="text-xl ml-3" />
            </UiButtonLink>
          </div>
        </UiTabsContent>
      </UiTabs>
    </UiSectionContent>
  </UiSection>
</template>
