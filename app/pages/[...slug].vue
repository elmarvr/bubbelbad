<script setup lang="ts">
const path = usePagePath();

const { data: page } = await useAsyncData(path.value, async () => {
  return await queryCollection("content_en").path(path.value).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
