<script setup lang="ts">
const { data: projects } = await useAsyncData(async () =>
  queryCollection("projects_en").all()
);
</script>

<template>
  <UiSection
    id="projects"
    class="pink bg-linear-to-b from-[#FAF5FF] via-[#FEFCFF] to-[#f1dceb]"
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
      <div
        v-for="project in projects"
        :key="project.id"
        class="flex gap-12 odd:flex-row-reverse not-last:pb-32"
      >
        <div class="flex-1 flex flex-col items-start">
          <h3 class="font-medium text-2xl pb-4">
            {{ project.title }}
          </h3>
          <ContentRenderer :value="project" />

          <div class="flex-1" />

          <UiButtonLink :to="project.path"> Read more </UiButtonLink>
        </div>

        <div class="flex-1 aspect-[5/3] bg-muted rounded"></div>
      </div>
    </UiSectionContent>
  </UiSection>
</template>
