import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/" },
    sitemap: "https://nc-site-2026.vercel.app/sitemap.xml",
  };
}