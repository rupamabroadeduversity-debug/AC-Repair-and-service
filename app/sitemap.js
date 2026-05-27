import { services, siteConfig } from "@/lib/site-data";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/pricing", "/gallery", "/testimonials", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
