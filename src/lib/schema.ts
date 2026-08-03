import { SITE_URL, SITE_NAME, SITE_DEFAULT_DESCRIPTION, SITE_LOGO_URL } from "./seo";

export const CONTACT_EMAIL = "info@nexiogbl.com";
export const CONTACT_PHONE = "+94713900047";
export const CONTACT_PHONE_2 = "+94714939193";
export const ADDRESS = {
  streetAddress: "Colombo",
  addressLocality: "Colombo",
  addressCountry: "LK",
};

/**
 * JSON-LD schema generators — production-ready structured data
 * for Google Rich Results, Schema.org, and social crawlers.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO_URL,
    image: SITE_LOGO_URL,
    description: SITE_DEFAULT_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    sameAs: [
      "https://www.linkedin.com/company/nexioglobal",
      "https://www.facebook.com/nexiogbl",
      "https://www.instagram.com/nexiogbl",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/resources?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  provider?: string;
  offers?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: opts.name,
    areaServed: "Worldwide",
    availableLanguage: ["en"],
    ...(opts.offers
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contactpage`,
    name: "Contact Nexio Global",
    url: `${SITE_URL}/contact`,
    description: "Contact Nexio Global to discuss your digital transformation, AI automation, or cybersecurity needs.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        ...ADDRESS,
      },
    },
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: opts.breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
  };
}
