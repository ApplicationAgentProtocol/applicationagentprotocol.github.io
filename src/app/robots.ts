import type { MetadataRoute } from "next";

/**
 * Force static generation for `robots.txt` to support `output: "export"`.
 * This route must not rely on runtime-only values (e.g. request headers).
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/dashboard",
    },
    sitemap: "https://applicationagentprotocol.github.io/sitemap.xml",
  };
}
