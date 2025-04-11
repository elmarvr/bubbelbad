import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**/*.md",
        exclude: ["en/services/*.md"],
        prefix: "/",
      },
      schema: contentSchema(),
    }),

    services_en: defineCollection({
      type: "page",
      source: {
        include: "en/services/*.md",
        prefix: "/services",
      },
      schema: serviceSchema(),
    }),

    projects_en: defineCollection({
      type: "page",
      source: {
        include: "en/projects/*.md",
        prefix: "/projects",
      },
      schema: projectSchema(),
    }),
  },
});

function contentSchema() {
  return z.object({
    title: z.string(),
  });
}

function serviceSchema() {
  return z.object({
    title: z.string(),
    relatedServices: z.array(z.string()).default([]),
  });
}
function projectSchema() {
  return z.object({
    title: z.string(),
  });
}
