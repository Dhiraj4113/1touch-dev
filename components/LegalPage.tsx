import Link from 'next/link';
import PageShell from '@/components/PageShell';

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{eyebrow}</p>
          <h1 className="page-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            {title}
          </h1>
          <p className="legal-updated">{updated}</p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <article className="legal-doc">{children}</article>
        </div>
      </section>
    </PageShell>
  );
}

export function LegalContact() {
  return (
    <p>
      Questions about this page: email{' '}
      <a href="mailto:hello@1touch.ai">hello@1touch.ai</a> or use our{' '}
      <Link href="/contact">contact form</Link>.
    </p>
  );
}
