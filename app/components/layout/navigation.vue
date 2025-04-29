<script setup lang="ts"></script>

<template>
  <div class="pb-20">
    <div class="fixed top-0 py-4 w-full z-30">
      <nav
        class="container bg-white px-7 h-16 shadow-sm backdrop-blur-md w-full rounded-full flex items-center justify-end"
      >
        <I18nLangSwitch />

        <UiButton class="h-9 text-sm ml-6">
          {{ $t("navigation.contact") }}
        </UiButton>
      </nav>
    </div>
  </div>
</template>
