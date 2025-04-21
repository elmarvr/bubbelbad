<script setup lang="ts">
const path = usePagePath("services");

const { data: service } = await useAsyncData(path.value, async () => {
  return await queryCollection("services_en").path(path.value).first();
});

if (!service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Service not found",
  });
}

const { data: relatedServices } = await useAsyncData(
  `${path.value}_related-services`,
  async () => {
    return await queryCollection("services_en")
      .where("path", "IN", service.value?.relatedServices)
      .all();
  }
);
</script>

<template>
  <template v-if="service">
    <h1>
      {{ service.title }}
    </h1>

    <ContentRenderer :value="service" />

    <ul>
      <li v-for="relatedService in relatedServices" :key="relatedService.id">
        <NuxtLink :to="relatedService.path">
          {{ relatedService.title }}
        </NuxtLink>
      </li>
    </ul>
  </template>
</template>
