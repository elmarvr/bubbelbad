<script setup lang="ts">
const { data: features } = await useAsyncData(async () =>
  queryCollection("features_en").all()
);

const defaultValue = computed(() => {
  return features.value?.[0]?.id ?? undefined;
});
</script>

<template>
  <UiSection
    v-if="features"
    id="features"
    class="purple bg-linear-to-b from-[#D9D8FD] via-[#DFE2FE] to-[#F3F5FE]"
  >
    <UiSectionHeader>
      <UiSectionTitle>
        <slot name="title" mdc-unwrap="p" />
      </UiSectionTitle>

      <UiSectionDescription>
        <slot />
      </UiSectionDescription>
    </UiSectionHeader>

    <UiSectionContent class="grid grid-cols-2">
      <UiTabs
        :default-value="defaultValue"
        class="grid-cols-subgrid col-span-2"
      >
        <UiTabsList>
          <UiTabsTrigger
            v-for="feature in features"
            :key="feature.id"
            :value="feature.id"
          >
            {{ feature.title }}
          </UiTabsTrigger>
        </UiTabsList>

        <UiTabsContent
          v-for="feature in features"
          :key="feature.id"
          :value="feature.id"
        >
          <ContentRenderer :value="feature" />
        </UiTabsContent>
      </UiTabs>
    </UiSectionContent>
  </UiSection>
</template>
