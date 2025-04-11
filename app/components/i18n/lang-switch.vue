<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <UiDropdownMenu>
    <RekaDropdownMenuTrigger class="flex uppercase items-center gap-1">
      {{ locale }}
      <Icon name="lucide:chevron-down" class="size-3" />
    </RekaDropdownMenuTrigger>
    <RekaDropdownMenuPortal>
      <UiDropdownMenuContent align="end">
        <UiDropdownMenuItem
          v-for="locale in locales"
          :key="locale.code"
          as-child
        >
          <SwitchLocalePathLink :locale="locale.code">
            {{ locale.language }}
          </SwitchLocalePathLink>
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </RekaDropdownMenuPortal>
  </UiDropdownMenu>
</template>
