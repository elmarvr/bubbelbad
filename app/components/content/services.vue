<script setup lang="ts">
const { data: services } = await useAsyncData(async () =>
  queryCollection("services_en").all()
);
</script>

<template>
  <UiSection v-if="services" class="blue grid grid-cols-2 gap-y-20">
    <div>
      <UiSectionTitle class="pb-6">
        <slot name="title" mdc-unwrap="p" />
      </UiSectionTitle>

      <slot />
    </div>

    <div />

    <UiTabs
      :default-value="services[0]?.id"
      class="grid-cols-subgrid col-span-2"
    >
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
  </UiSection>
</template>
