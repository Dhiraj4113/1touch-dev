import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { SITE } from '@/src/content';
import { BLOG_POSTS, getBlogPost } from '@/src/blog-posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Blog' };
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\n+/);
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)) || p.category === post.category)
    .slice(0, 3);

  return (
    <PageShell>
      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="datePublished" content={post.published_at} />
        <meta itemProp="author" content={post.author} />

        <section className="page-hero">
          <div className="container" style={{ maxWidth: 800 }}>
            <Link
              href="/blog"
              style={{
                color: 'var(--cyan)',
                fontSize: '0.875rem',
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}
            >
              ← All Blog Posts
            </Link>
            <div className="insight-meta" style={{ marginBottom: '1rem' }}>
              <span className="badge badge-cyan">{post.category}</span>
              <span>{post.read_time} min read</span>
              <span>{post.author}</span>
            </div>
            <h1
              className="page-hero-title"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              itemProp="name"
            >
              {post.title}
            </h1>
            <p className="page-hero-subtitle" itemProp="description">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container" style={{ maxWidth: 720 }}>
            <div
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85 }}
              itemProp="articleBody"
            >
              {paragraphs.map((block, idx) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2
                      key={idx}
                      style={{
                        color: 'var(--white)',
                        fontSize: '1.35rem',
                        marginTop: '2.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {block.replace(/^## /, '')}
                    </h2>
                  );
                }
                if (block.startsWith('- ')) {
                  const items = block.split('\n').filter((l) => l.startsWith('- '));
                  return (
                    <ul
                      key={idx}
                      style={{ marginBottom: '1.25rem', paddingLeft: '1.25rem', lineHeight: 1.75 }}
                    >
                      {items.map((item) => (
                        <li key={item}>{item.replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (/^\d+\.\s/.test(block)) {
                  const items = block.split('\n').filter((l) => /^\d+\.\s/.test(l));
                  return (
                    <ol
                      key={idx}
                      style={{ marginBottom: '1.25rem', paddingLeft: '1.25rem', lineHeight: 1.75 }}
                    >
                      {items.map((item) => (
                        <li key={item}>{item.replace(/^\d+\.\s/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={idx} style={{ marginBottom: '1.25rem' }}>
                    {block}
                  </p>
                );
              })}
            </div>

            <div className="tag-list" style={{ marginTop: '2.5rem' }}>
              {post.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            {related.length > 0 && (
              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                  Related articles
                </h2>
                <div className="grid-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="card" style={{ padding: '1.25rem' }}>
                      <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>
                        {r.category}
                      </span>
                      <h3 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                        {r.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                        {r.excerpt.slice(0, 100)}…
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Need help applying this at your company?
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact {SITE.name} →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
