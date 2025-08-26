import { useEffect } from "react";

export type OpenGraph = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
  site_name?: string;
};

export type TwitterCard = {
  card?: string; // e.g., summary_large_image
  title?: string;
  description?: string;
  image?: string;
};

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og?: OpenGraph;
  twitter?: TwitterCard;
  robots?: string; // e.g., "index, follow" | "noindex, nofollow"
  structuredData?: Array<Record<string, any>>; // JSON-LD blocks to inject
}

export const DEFAULT_KEYWORDS =
  "cricbet99, lotus365, mahadev book, mahakal book, reddy anna app, reddy anna betting, reddy anna book, reddy anna book 247, reddy anna book live login, reddy anna book login, reddy anna club, reddy anna club live, reddy anna customer care number, reddy anna live, reddy anna live casino, reddy anna live cricket, reddy anna live login, reddy anna live score, reddy anna live today, reddy anna login, reddy anna online, reddy anna online book id, reddy anna website, reddy anna whatsapp number, reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id";

function upsertMetaByName(name: string, content?: string) {
  if (!content) return;
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content?: string) {
  if (!content) return;
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href?: string) {
  if (!href) return;
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

// Global brand and title settings
const BRAND = "Reddy Anna Live";
const MAX_TITLE_CHARS = 60;

function buildTitle(base?: string): string | undefined {
  const basePart = base?.trim();
  const suffix = ` | ${BRAND}`;

  if (!basePart || basePart.length === 0) return BRAND;

  let finalTitle = `${basePart}${suffix}`;
  if (finalTitle.length <= MAX_TITLE_CHARS) return finalTitle;

  // Trim base part to fit within max length, preserve whole words where possible
  const allowedBaseLen = Math.max(0, MAX_TITLE_CHARS - suffix.length);
  if (basePart.length <= allowedBaseLen) return finalTitle; // already fits

  let trimmed = basePart.slice(0, allowedBaseLen);
  // Try trimming to last space to avoid cutting words
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace > 20) {
    trimmed = trimmed.slice(0, lastSpace);
  }
  return `${trimmed}${suffix}`;
}

export function SEO({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  og,
  twitter,
  robots,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const computedTitle = buildTitle(title);
    if (computedTitle) document.title = computedTitle;

    if (description) upsertMetaByName("description", description);
    if (keywords) upsertMetaByName("keywords", keywords);
    if (robots) upsertMetaByName("robots", robots);

    if (canonical) upsertLink("canonical", canonical);

    if (og) {
      upsertMetaByProperty("og:title", og.title || computedTitle);
      upsertMetaByProperty("og:description", og.description || description);
      if (og.type) upsertMetaByProperty("og:type", og.type);
      if (og.image) {
        upsertMetaByProperty("og:image", og.image);
      } else {
        upsertMetaByProperty("og:image", "/images/reddy-anna-live-og.png");
      }
      if (og.url || canonical) upsertMetaByProperty("og:url", og.url || canonical);
      upsertMetaByProperty("og:site_name", og.site_name || BRAND);
    } else {
      // fallback to title/description when provided
      if (computedTitle) upsertMetaByProperty("og:title", computedTitle);
      if (description) upsertMetaByProperty("og:description", description);
      upsertMetaByProperty("og:image", "/images/reddy-anna-live-og.png");
      upsertMetaByProperty("og:site_name", BRAND);
    }

    if (twitter) {
      upsertMetaByName("twitter:card", twitter.card || "summary_large_image");
      upsertMetaByName("twitter:title", twitter.title || computedTitle || "");
      upsertMetaByName(
        "twitter:description",
        twitter.description || description || "",
      );
      upsertMetaByName(
        "twitter:image",
        twitter.image || "/images/reddy-anna-live-og.png",
      );
    } else {
      // sane defaults
      upsertMetaByName("twitter:card", "summary_large_image");
      if (computedTitle) upsertMetaByName("twitter:title", computedTitle);
      if (description) upsertMetaByName("twitter:description", description);
      upsertMetaByName("twitter:image", "/images/reddy-anna-live-og.png");
    }

    // Inject JSON-LD structured data blocks if provided
    if (structuredData && structuredData.length > 0) {
      // remove previous ld+json scripts we may have added
      const existing = Array.from(
        document.head.querySelectorAll<HTMLScriptElement>(
          'script[type="application/ld+json"][data-seo="true"]',
        ),
      );
      existing.forEach((el) => el.parentElement?.removeChild(el));

      structuredData.forEach((obj) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "true");
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
      });
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    robots,
    JSON.stringify(og),
    JSON.stringify(twitter),
    JSON.stringify(structuredData),
  ]);

  return null;
}

export default SEO;

