import { BRAND, DEFAULT_LOCALE, LOCALES } from "$lib/CONFIG";

import type { RequestHandler } from "./$types";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GET: RequestHandler = () => {
  const files = import.meta.glob("$routes/**/*.{svelte,md}");
  const urls = Object.keys(files)
    .map((file) => {
      let url = file
        .replace("/src/routes", "")
        .replace(".svelte", "")
        .replace(".md", "")
        .replace("+page", "")
        .replace("+layout", "")
        .replace("+error", "")
        .replace("+server", "")
        .replace("+404", "")
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .slice(0, -1);
      if (url.startsWith("//")) {
        url = url.slice(1);
      }
      return url;
    })
    .filter((url) => url !== "");
  const uniqueUrls = Array.from(new Set(urls));

  interface SitemapEntry {
    changefreq: string;
    links: { lang: string; url: string }[];
    location: string;
    priority: number;
  }
  // eslint-disable-next-line sonarjs/cognitive-complexity
  const generateSitemap = (): SitemapEntry[] => {
    const sitemap: SitemapEntry[] = [];
    uniqueUrls.forEach((url) => {
      LOCALES.forEach((locale) => {
        const localeToUse = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
        const entry: SitemapEntry = {
          changefreq: "monthly",
          links: [],
          location:
            url === "/"
              ? `${BRAND.url}${localeToUse}?owlang=true`
              : `${BRAND.url}${localeToUse}${url}?owlang=true`,
          priority: 0.5,
        };
        LOCALES.forEach((otherLocale) => {
          if (otherLocale !== locale) {
            const otherLocaleToUse = otherLocale === DEFAULT_LOCALE ? "" : `/${otherLocale}`;
            entry.links.push({
              lang: otherLocale,
              url:
                url === "/"
                  ? `${BRAND.url}${otherLocaleToUse}?owlang=true`
                  : `${BRAND.url}${otherLocaleToUse}${url}?owlang=true`,
            });
          }
        });
        sitemap.push(entry);
      });
    });
    return sitemap;
  };
  function generateSitemapString(): string {
    const sitemapEntries = generateSitemap();
    let sitemapString = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">`;
    sitemapEntries.forEach((entry) => {
      sitemapString += `
            <url>
                <loc>${entry.location}</loc>
                <changefreq>${entry.changefreq}</changefreq>
                <priority>${entry.priority}</priority>`;
      entry.links.forEach((link) => {
        sitemapString += `
                <xhtml:link
                    rel="alternate"
                    hreflang="${link.lang}"
                    href="${link.url}" />`;
      });
      sitemapString += `
            </url>`;
    });
    sitemapString += `
        </urlset>`;
    return sitemapString;
  }

  return new Response(generateSitemapString().trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
