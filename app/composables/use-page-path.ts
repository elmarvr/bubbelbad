import type { Collections } from "@nuxt/content";
import type { RouteNamedMap } from "vue-router/auto-routes";
import { joinURL, withLeadingSlash } from "ufo";

export function usePagePath(collection?: Collection) {
  const { params } = useRoute<SlugRoute>();
  const { locale, defaultLocale } = useI18n();

  return computed(() => {
    const localePrefix =
      locale.value === defaultLocale ? "" : `${locale.value}`;

    return withLeadingSlash(
      joinURL(localePrefix, collection ?? "", ...(params.slug ?? []))
    );
  });
}

type Collection = Exclude<
  keyof Collections extends `${infer C}_${string}` ? C : never,
  "content"
>;

type SlugRoute = Extract<keyof RouteNamedMap, `${string}slug${string}`>;
