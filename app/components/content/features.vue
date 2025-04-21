<script setup lang="ts">
const { data: features } = await useAsyncData(async () =>
  queryCollection("features_en").all()
);

const defaultValue = computed(() => {
  return features.value?.[0]?.id ?? undefined;
});
</script>

<template>
  <UiSection v-if="features" class="grid grid-cols-2 gap-y-20">
    <div>
      <UiSectionTitle class="pb-6">
        <slot name="title" mdc-unwrap="p" />
      </UiSectionTitle>

      <slot />
    </div>

    <div />

    <UiTabs :default-value="defaultValue" class="grid-cols-subgrid col-span-2">
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
  </UiSection>
</template>
