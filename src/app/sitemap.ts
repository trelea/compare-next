import { url } from 'inspector';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/services', '/projects', '/aboutus', '/contacts'];

  const sitemaps = routes.map((route) => {
    return [
      { url: `${process.env.DOMAIN_NAME}/en${route}` },
      { url: `${process.env.DOMAIN_NAME}/ro${route}` },
      { url: `${process.env.DOMAIN_NAME}/ru${route}` },
    ];
  });

  return sitemaps.flat(1);
}
