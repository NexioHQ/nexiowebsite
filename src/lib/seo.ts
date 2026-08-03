import { useEffect } from "react";

export const SITE_URL = "https://nexiogbl.com";
export const SITE_NAME = "Nexio Global";
export const SITE_DEFAULT_DESCRIPTION =
  "Nexio Global — Transforming Businesses Through Technology. We deliver enterprise-grade digital solutions, AI automation, cloud infrastructure, and cybersecurity services.";
export const SITE_DEFAULT_TITLE = "Nexio Global | Digital Solutions, AI Automation & Cybersecurity";
export const SITE_TWITTER_HANDLE = "@nexiogbl";
export const SITE_LOGO_URL = `${SITE_URL}/favicon.png`;

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
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
  document.head.querySelectorAll<HTMLScriptElement>('script[data-seo-json-ld="true"]').forEach((s) => s.remove());
}

/**
 * Reusable SEO hook — sets unique title, meta description, canonical URL,
 * Open Graph, Twitter Card, robots directives, and injects JSON-LD schema.
 * All metadata is cleaned up on unmount so each route gets fresh tags.
 */
export function useSeo({ title, description, path, type = "website", image, noindex = false, schema = [] }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
    const ogImage = image ?? SITE_LOGO_URL;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertLink("canonical", canonicalUrl);

    // Open Graph
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", "en_US");

    // Twitter / X Card
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", SITE_TWITTER_HANDLE);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    // JSON-LD structured data
    removeJsonLd();
    schema.forEach(upsertJsonLd);

    return () => {
      removeJsonLd();
    };
  }, [title, description, path, type, image, noindex, schema]);
}
