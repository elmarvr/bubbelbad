<script setup lang="ts">
const { data: contacts } = await useAsyncData(() => {
  return queryCollection("team_en").all();
});
</script>

<template>
  <UiSection class="blue">
    <div class="flex justify-center">
      <UiSectionTitle class="pb-4">
        <slot mdc-unwrap="p" />
      </UiSectionTitle>
      <slot />
    </div>
    <UiSectionContent>
      <UiTabs default-value="2" orientation="horizontal">
        <UiTabsList>
          <UiTabsTrigger value="1">Bubbelbad</UiTabsTrigger>
          <UiTabsTrigger value="2">Behind bubbelbad</UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="1"> </UiTabsContent>
        <UiTabsContent value="2" class="grid grid-cols-2">
          <div></div>
          <ul class="grid grid-cols-2 gap-4">
            <li
              v-for="contact in contacts"
              :key="contact.id"
              class="flex flex-col gap-4 items-center"
            >
              <p class="font-medium">
                {{ contact.name }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ contact.role }}
              </p>

              <ContentRenderer :value="contact" />
            </li>
          </ul>
        </UiTabsContent>
      </UiTabs>
    </UiSectionContent>
  </UiSection>
</template>
