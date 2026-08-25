import type { MetadataRoute } from 'next';
import { SITE } from '@/src/content';
import { BLOG_POSTS } from '@/src/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/solutions',
    '/licensing',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' || path === '/blog' ? 1 : 0.8,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...posts];
}
