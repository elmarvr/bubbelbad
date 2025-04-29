<script setup lang="ts">
const { data: contacts } = await useAsyncData(() => {
  return queryCollection("team_en").all();
});
</script>

<template>
  <UiSection
    id="about-us"
    class="blue bg-gradient-to-b from-[#F3F5FE] from-20% via-[#E1ECFF] to-[#dce3f9]"
    align="center"
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
      <UiTabs default-value="2" orientation="horizontal">
        <UiTabsList>
          <UiTabsTrigger value="1">Bubbelbad</UiTabsTrigger>
          <UiTabsTrigger value="2">Behind bubbelbad</UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="1"> </UiTabsContent>
        <UiTabsContent value="2" class="grid grid-cols-2">
          <div></div>

          <ul class="grid grid-cols-2 gap-12">
            <li
              v-for="contact in contacts"
              :key="contact.id"
              class="flex flex-col gap-4 items-center text-center"
            >
              <div
                class="w-full aspect-square rounded-full shadow-bubble m-8"
              ></div>

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
