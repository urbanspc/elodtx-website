import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elodtx.com";
  const pages = [
    "",
    "/how-it-works",
    "/industries",
    "/the-whisper",
    "/proximity",
    "/developers",
    "/about",
    "/waitlist",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
