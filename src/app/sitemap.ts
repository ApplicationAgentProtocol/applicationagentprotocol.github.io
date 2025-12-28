import type { MetadataRoute } from "next";

/**
 * Force static generation for `sitemap.xml` to support `output: "export"`.
 * Keep values deterministic to avoid export-time/runtime mismatches.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a stable value for static export. Update manually when you ship a new release.
  const lastModified = new Date("2025-01-01T00:00:00.000Z");

  return [
    {
      url: "https://applicationagentprotocol.github.io/",
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
    // Add more URLs here
  ];
}
