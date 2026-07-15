import { redirect } from 'next/navigation';
import { BLOG_POSTS } from '@/src/blog-posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

/** Legacy URL — canonical post lives at /blog/[slug] */
export default function InsightSlugRedirect({ params }: Props) {
  redirect(`/blog/${params.slug}`);
}
