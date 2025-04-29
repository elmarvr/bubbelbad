<script setup lang="ts">
const app = useAppConfig();
</script>

<template>
  <UiSection id="contact" class="relative purple">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 900 200"
      class="w-full absolute top-0 -translate-y-full pointer-events-none"
    >
      <path
        d="M0 174L25 167.5C50 161 100 148 150 144.3C200 140.7 250 146.3 300 139.5C350 132.7 400 113.3 450 109.8C500 106.3 550 118.7 600 133.3C650 148 700 165 750 165.8C800 166.7 850 151.3 875 143.7L900 136L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z"
        fill="var(--color-background)"
        stroke-linecap="round"
        stroke-linejoin="miter"
      />
    </svg>

    <UiSectionContent class="flex gap-20">
      <UiSectionHeader class="max-w-min">
        <UiSectionTitle>
          <slot name="title" mdc-unwrap="p" />
        </UiSectionTitle>
        <UiSectionDescription>
          <slot />
          <ul class="pt-6 space-y-4">
            <li class="flex items-center gap-3">
              <Icon name="lucide:mail" class="text-2xl" />
              {{ app.info.email }}
            </li>
            <li class="flex items-center gap-3">
              <Icon name="lucide:phone" class="text-2xl" />
              {{ app.info.phone }}
            </li>
          </ul>
        </UiSectionDescription>
      </UiSectionHeader>

      <form class="w-full flex flex-col gap-9">
        <FormField name="name">
          <FormLabel>{{ $t("contact.name") }}</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>

        <div class="flex gap-6">
          <FormField name="email">
            <FormLabel>{{ $t("contact.email") }}</FormLabel>
            <UiInput />
            <FormMessage />
          </FormField>
          <FormField name="phone">
            <FormLabel>{{ $t("contact.phone") }}</FormLabel>
            <UiInput />
            <FormMessage />
          </FormField>
        </div>

        <FormField name="message">
          <FormLabel>{{ $t("contact.message") }}</FormLabel>
          <UiTextarea class="min-h-40" />
          <FormMessage />
        </FormField>
      </form>

      <div class="flex flex-col justify-end">
        <UiButton class="size-32"> {{ $t("contact.submit") }} </UiButton>
      </div>
    </UiSectionContent>
  </UiSection>
</template>

<style>
section:has(+ #contact) {
  padding-bottom: calc(var(--spacing) * 48);
}
</style>
