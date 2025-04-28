import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    info: group({
      title: "Info",
      description: "Company details",
      icon: "lucide:info",
      fields: {
        email: field({
          icon: "lucide:mail",
          type: "string",
          title: "Email",
          description: "Company email address",
          default: "",
        }),
        phone: field({
          icon: "lucide:phone",
          type: "string",
          title: "Phone",
          description: "Company phone number",
          default: "+1 234 567 890",
        }),
      },
    }),
    socials: group({
      instagram: field({
        icon: "lucide:instagram",
        type: "string",
        title: "Instagram",
        description: "Instagram profile link",
        default: "",
      }),
      youtube: field({
        icon: "lucide:youtube",
        type: "string",
        title: "YouTube",
        description: "YouTube channel link",
        default: "",
      }),
    }),
  },
});
