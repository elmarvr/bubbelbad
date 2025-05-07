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

    features_en: defineCollection({
      type: "data",
      source: {
        include: "en/features/*.md",
        prefix: "/features",
      },
      schema: featureSchema(),
    }),

    testimonials_en: defineCollection({
      type: "data",
      source: {
        include: "en/testimonials/*.md",
        prefix: "/testimonials",
      },
      schema: testimonialSchema(),
    }),

    team_en: defineCollection({
      type: "data",
      source: {
        include: "en/team/*.md",
        prefix: "/team",
      },
      schema: teamSchema(),
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
    image: z.string().editor({ input: "media" }),
    relatedServices: z.array(z.string()).default([]),
  });
}

function projectSchema() {
  return z.object({
    title: z.string(),
    image: z.string().editor({ input: "media" }),
  });
}

function featureSchema() {
  return z.object({
    title: z.string(),
    body: z.any(),
  });
}

function testimonialSchema() {
  return z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    company: z.string(),
    body: z.any(),
  });
}

function teamSchema() {
  return z.object({
    name: z.string(),
    image: z.string(),
    role: z.string(),
    body: z.any(),
  });
}
