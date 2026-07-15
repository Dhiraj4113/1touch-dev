import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { SITE, BLOG_KEYWORDS } from '@/src/content';
import { getBlogPostsSorted } from '@/src/blog-posts';

export const metadata: Metadata = {
  title: 'Blog — AI, ML, LLM & Multi-Agent Insights',
  description: `The ${SITE.name} blog covering multi-agent systems, LLM development, AI consulting, computer vision, automation, and technology licensing — built for SEO, press, and backlinks.`,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description: 'Enterprise AI articles for keyword SEO, PR, and backlinks.',
    url: `${SITE.url}/blog`,
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getBlogPostsSorted();

  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Blog</p>
          <h1 className="page-hero-title">AI Insights for Search, Press & Backlinks</h1>
          <p className="page-hero-subtitle">
            Keyword-focused articles on multi-agent systems, LLM development, AI/ML consulting,
            computer vision, automation, and more — ready to cite and link.
          </p>
          <div className="tag-list" style={{ marginTop: '1.75rem', gap: '0.65rem' }}>
            {BLOG_KEYWORDS.map((kw) => (
              <span key={kw} className="tag" style={{ padding: '0.5rem 0.9rem' }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="insight-card">
                <div className="insight-card-body">
                  <div className="insight-meta">
                    <span className="badge badge-cyan">{post.category}</span>
                    <span>{post.read_time} min read</span>
                  </div>
                  <h2 className="insight-title">{post.title}</h2>
                  <p className="insight-excerpt">{post.excerpt}</p>
                  <div className="insight-read-more">Read Article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
