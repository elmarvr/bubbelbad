<template>
  <UiSection>
    <UiSectionContent class="flex">
      <UiSectionTitle> Book a free consultation </UiSectionTitle>

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
          <UiTextarea />
          <FormMessage />
        </FormField>
      </form>
    </UiSectionContent>
  </UiSection>
</template>
