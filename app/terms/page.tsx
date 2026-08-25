import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalContact } from '@/components/LegalPage';
import { SITE } from '@/src/content';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE.name} covering use of the public website, products, AI features, and third-party integrations.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="Last updated: August 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern access to and use of the 1touch.ai
        website at <a href="https://1touch.ai">https://1touch.ai</a> and related 1Touch.ai
        products and services we make available (together, the &quot;Services&quot;). By using
        the Services, you agree to these Terms.
      </p>

      <h2>Acceptance</h2>
      <p>
        If you use the Services on behalf of an organization, you represent that you have
        authority to bind that organization, and &quot;you&quot; includes that organization. If
        you do not agree, do not use the Services. Additional terms may apply to a specific
        engagement, order, or license; those terms control if they conflict with these Terms
        for that engagement.
      </p>

      <h2>Service description</h2>
      <p>
        1Touch.ai provides AI/ML consulting information, a public website, and, where offered,
        software, licensing, automations, and related product features. Features, availability,
        and scope may change. Marketing descriptions on the website are informational and are
        not a commitment to deliver any particular capability unless agreed in a separate
        writing.
      </p>

      <h2>Accounts</h2>
      <p>
        Some products may require an account. You are responsible for the accuracy of account
        information and for keeping credentials confidential. You must notify us promptly if
        you believe an account has been compromised. We may refuse, suspend, or close accounts
        that violate these Terms.
      </p>

      <h2>Authorized use</h2>
      <p>
        You may use the Services only for lawful purposes and in accordance with these Terms
        and any documentation we provide. You must have the rights and consents needed for
        content you submit and for any third-party account you connect.
      </p>

      <h2>AI-generated output</h2>
      <p>
        Features may generate text, code, plans, or other output using AI models. Output may
        be inaccurate, incomplete, or similar to content generated for others. You are
        responsible for reviewing output before you rely on it or publish it. 1Touch.ai does
        not warrant that output is error-free, unique, or fit for a particular purpose.
      </p>

      <h2>AI agents and automations</h2>
      <p>
        Where offered, agents and automations may take actions you configure, including
        interacting with connected systems. You are responsible for the instructions, triggers,
        and permissions you set, and for monitoring results. You should not grant broader
        access than a workflow requires.
      </p>

      <h2>Third-party integrations</h2>
      <p>
        The Services may allow connections to third-party platforms, including Google (such as
        Gmail, Google Calendar, and Google Drive). Those providers have their own terms and
        privacy policies. Your use of an integration is optional and requires your explicit
        authorization. We are not responsible for third-party services we do not control.
      </p>

      <h2>User responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate information when you contact us or create an account.</li>
        <li>Use the Services in compliance with applicable law and third-party terms.</li>
        <li>Obtain all rights needed for content and data you provide or connect.</li>
        <li>Review AI output and automated actions before they have legal or operational effect.</li>
      </ul>

      <h2>Prohibited use</h2>
      <p>You may not:</p>
      <ul>
        <li>Violate law, infringe others&apos; rights, or attempt unauthorized access.</li>
        <li>Interfere with or disrupt the Services or other users.</li>
        <li>Use the Services to send spam, malware, or deceptive content.</li>
        <li>Reverse engineer the Services except where the law allows.</li>
        <li>Misrepresent your identity or affiliation.</li>
        <li>
          Use Google user data or other third-party data obtained through the Services except
          as allowed by these Terms, the third-party provider&apos;s rules, and the purpose you
          authorized.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        1Touch.ai and its licensors own the Services, including software, branding, and site
        content, except for your content and third-party materials. These Terms do not transfer
        ownership of our intellectual property. You may not copy, modify, or redistribute our
        materials except as we expressly allow.
      </p>

      <h2>User and customer content</h2>
      <p>
        You retain rights in content you submit. You grant 1Touch.ai a limited license to host,
        process, and display that content solely to provide the Services you requested. You
        represent that you have the rights to grant that license.
      </p>

      <h2>Third-party services</h2>
      <p>
        Links, APIs, models, and cloud providers used with the Services are offered or operated
        by third parties. Your relationship with those parties is governed by their terms. We
        do not endorse or assume responsibility for third-party content or outages.
      </p>

      <h2>Service availability</h2>
      <p>
        We aim to keep the website and products available, but we do not guarantee
        uninterrupted, timely, or error-free operation. Maintenance, failures, or third-party
        outages may occur. These Terms do not create a service-level agreement.
      </p>

      <h2>Billing</h2>
      <p>
        Some Services may be offered under a separate proposal, order, subscription, or license.
        Fees, taxes, refunds, and payment terms, if any, are those stated in that separate
        agreement or checkout flow. The public website itself does not constitute an offer of
        paid services unless you enter such an agreement.
      </p>

      <h2>Suspension and termination</h2>
      <p>
        You may stop using the Services at any time. We may suspend or terminate access if we
        reasonably believe you violated these Terms, if required by law, or if we discontinue
        a Service. Provisions that by their nature should survive (including intellectual
        property, disclaimers, and limitation of liability) will survive.
      </p>

      <h2>Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE
        MAXIMUM EXTENT PERMITTED BY LAW, 1TOUCH.AI DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES OR ANY AI OUTPUT WILL
        MEET YOUR REQUIREMENTS OR BE ACCURATE, COMPLETE, OR UNINTERRUPTED.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, 1TOUCH.AI AND ITS SUPPLIERS WILL NOT BE LIABLE
        FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST
        PROFITS, REVENUE, DATA, OR BUSINESS, ARISING OUT OF OR RELATED TO THE SERVICES, EVEN IF
        ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES
        IS LIMITED TO THE AMOUNTS YOU PAID TO 1TOUCH.AI FOR THE SERVICES GIVING RISE TO THE
        CLAIM IN THE TWELVE MONTHS BEFORE THE CLAIM, OR IF YOU PAID NOTHING, ZERO. SOME
        JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE CASES OUR LIABILITY IS LIMITED
        TO THE FULLEST EXTENT PERMITTED.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms. The &quot;Last updated&quot; date will change when we do.
        Continued use after an update constitutes acceptance of the revised Terms. If you do
        not agree, stop using the Services.
      </p>

      <h2>Contact</h2>
      <LegalContact />
      <p>
        Related: <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
