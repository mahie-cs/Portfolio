import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/constants/projects';
import { sidebarNav } from '@/config/docs';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sidebarNav[0]!.items.map((i) => ({ url: `${siteConfig.url}${i.href === '/' ? '' : i.href}` }));
  const work = projects.map((p) => ({ url: `${siteConfig.url}/projects/${p.slug}` }));
  return [...pages, ...work].map((p) => ({ ...p, lastModified: new Date() }));
}
