<template>
  <UiSection>
    <UiSectionContent class="flex">
      <div class="pb-20 flex flex-col gap-4">
        <UiSectionTitle class="pb-0">
          <slot name="title" mdc-unwrap="p" />
        </UiSectionTitle>
        <slot />
        <ul class="pt-4">
          <li>
            <Icon name="lucide:mail" />
          </li>
          <li>
            <Icon name="lucide:phone" />
          </li>
        </ul>
      </div>

      <form class="w-full flex flex-col gap-9">
        <FormField name="name">
          <FormLabel>Name</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>

        <div class="flex gap-6">
          <FormField name="email">
            <FormLabel>E-mail</FormLabel>
            <UiInput />
            <FormMessage />
          </FormField>
          <FormField name="phone">
            <FormLabel>Phone</FormLabel>
            <UiInput />
            <FormMessage />
          </FormField>
        </div>

        <FormField name="message">
          <FormLabel>Message</FormLabel>
          <UiTextarea class="min-h-40" />
          <FormMessage />
        </FormField>
      </form>
    </UiSectionContent>
  </UiSection>
</template>
