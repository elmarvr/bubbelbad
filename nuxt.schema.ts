import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  info: group({
    title: "Info",
    description: "Company details",
    icon: "lucide:info",
    fields: {
      email: field({
        type: "string",
        title: "Email",
        description: "Company email address",
      }),
      phone: field({
        type: "string",
        title: "Phone",
        description: "Company phone number",
      }),
    },
  }),
});
