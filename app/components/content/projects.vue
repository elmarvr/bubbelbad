<script setup lang="ts">
const { data: projects } = await useAsyncData(async () =>
  queryCollection("projects_en").all()
);
</script>

<template>
  <UiSection
    id="projects"
    class="bg-linear-to-b from-[#FAF5FF] via-[#FEFCFF] to-[#f1dceb] pink"
  >
    <UiSectionHeader>
      <UiSectionTitle>
        <slot name="title" mdc-unwrap="p" />
      </UiSectionTitle>
      <UiSectionDescription>
        <slot />
      </UiSectionDescription>
    </UiSectionHeader>
    <div>
      <ul>
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </ul>
    </div>
  </UiSection>
</template>
