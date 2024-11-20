import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/services", "/projects", "/aboutus", "/contacts"];

  return routes.map((route) => {
    return {
      url: `${process.env.DOMAIN_NAME}${route}`,
      alternates: {
        languages: {
          en: `${process.env.DOMAIN_NAME}/en${route}`,
          ro: `${process.env.DOMAIN_NAME}/ro${route}`,
          ru: `${process.env.DOMAIN_NAME}/ru${route}`,
        },
      },
    };
  });
}
