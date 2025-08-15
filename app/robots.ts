// app/robots.ts
import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const isIndexable =
  process.env.NEXT_PUBLIC_SITE_ENV === "production";

export default function robots(): MetadataRoute.Robots {

  if (!isIndexable) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/private/",
          "/about/",
          "/data/",
          "/drafts/",
          "/404",
          "/500",
          "/*?*preview=",
          "/*?*token=",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.ts`,
    host: siteUrl,
  };
}
