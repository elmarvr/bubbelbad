<template>
  <UiSection>
    <UiSectionTitle>Contact</UiSectionTitle>

    <form class="w-full flex flex-col gap-9">
      <div class="flex gap-6">
        <FormField name="name" class="w-full">
          <FormLabel>Name</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>
        <FormField name="company" class="w-full">
          <FormLabel>Company</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>
      </div>

      <div class="flex gap-6">
        <FormField name="email" class="w-full">
          <FormLabel>E-mail</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>
        <FormField name="phone" class="w-full">
          <FormLabel>Phone</FormLabel>
          <UiInput />
          <FormMessage />
        </FormField>
      </div>

      <div class="flex gap-6">
        <FormField name="message" class="w-full">
          <FormLabel>Message</FormLabel>
          <UiTextarea />
          <FormMessage />
        </FormField>

        <div class="w-full" />
      </div>
    </form>
  </UiSection>
</template>
