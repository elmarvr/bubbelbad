<script setup lang="ts">
const { api, state } = useCarousel();
</script>

<template>
  <div class="flex gap-2">
    <div
      v-for="(snap, index) in state.scrollSnapList"
      class="size-3 rounded-full bg-muted data-active:bg-foreground"
      :data-active="index === state.selectedScrollSnap ? '' : undefined"
      @click="api?.scrollTo(index)"
    />
  </div>
</template>
