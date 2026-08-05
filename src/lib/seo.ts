import { useLayoutEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_DEFAULT_IMAGE,
  SITE_TWITTER_HANDLE,
  SITE_LOCALE,
  SITE_LANGUAGE,
} from "./site";

export {
  SITE_URL,
  SITE_NAME,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_DEFAULT_IMAGE,
  SITE_TWITTER_HANDLE,
};

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  schema?: object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(schema: object) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  script.dataset.seoJsonLd = "true";
  document.head.appendChild(script);
}

function removeJsonLd() {
  document.head
    .querySelectorAll<HTMLScriptElement>('script[data-seo-json-ld="true"]')
    .forEach((s) => s.remove());
}

/**
 * Reusable SEO hook — sets unique title, meta description, canonical URL,
 * Open Graph, Twitter Card, robots directives, and injects JSON-LD schema.
 * The work happens in a layout effect so metadata is committed as early as
 * possible in the client render path.
 */
export function useSeo({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt,
  noindex = false,
  schema = [],
}: SeoOptions) {
  useLayoutEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
    const ogImage = image ?? SITE_DEFAULT_IMAGE;

    document.documentElement.lang = SITE_LANGUAGE;
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    upsertMeta("name", "application-name", SITE_NAME);
    upsertMeta("name", "apple-mobile-web-app-title", SITE_NAME);
    upsertMeta("name", "referrer", "strict-origin-when-cross-origin");
    upsertMeta("name", "format-detection", "telephone=no,email=no,address=no");
    upsertMeta("name", "color-scheme", "light dark");
    upsertLink("canonical", canonicalUrl);

    // Open Graph
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", imageAlt ?? description);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:locale", SITE_LOCALE);

    // Twitter / X Card
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", SITE_TWITTER_HANDLE);
    upsertMeta("name", "twitter:creator", SITE_TWITTER_HANDLE);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", imageAlt ?? description);

    removeJsonLd();
    schema.forEach(upsertJsonLd);

    return () => {
      removeJsonLd();
    };
  }, [title, description, path, type, image, imageAlt, noindex, schema]);
}
