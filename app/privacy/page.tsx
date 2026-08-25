import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalContact } from '@/components/LegalPage';
import { SITE } from '@/src/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE.name}, including how we handle website data and Google user data for Gmail, Google Calendar, and Google Drive.`,
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="Last updated: August 2026">
      <p>
        This Privacy Policy describes how 1touch.ai (&quot;1Touch.ai,&quot; &quot;we,&quot; &quot;us&quot;)
        handles information in connection with our public website at{' '}
        <a href="https://1touch.ai">https://1touch.ai</a> and related 1Touch.ai products and
        services that you choose to use. It is written for a public audience, including Google
        OAuth verification.
      </p>
      <p>
        We do not sell personal information. We do not use Google user data for advertising. If
        you do not agree with this policy, please do not use the website or connect third-party
        accounts.
      </p>

      <h2>Information we collect</h2>
      <p>The information we collect depends on how you interact with 1Touch.ai.</p>

      <h3>Information you provide</h3>
      <ul>
        <li>
          Contact and inquiry details submitted through our website forms (for example name, work
          email, company, role, phone, service interest, budget range, and message).
        </li>
        <li>Newsletter email addresses if you subscribe.</li>
        <li>
          Other information you send us by email or other channels you choose to use.
        </li>
      </ul>

      <h3>Account and user information</h3>
      <p>
        If you create or are invited to a 1Touch.ai product account, we may process account
        identifiers such as name, email address, organization, role, authentication credentials
        or tokens, and settings you configure. The public marketing website does not require an
        account.
      </p>

      <h3>Service usage information</h3>
      <p>
        We may receive technical and usage information needed to operate and improve the
        services, such as browser type, device information, approximate location derived from IP
        address, pages viewed, referring URLs, timestamps, and diagnostic logs. We do not claim
        the use of any specific analytics vendor on this site.
      </p>

      <h2>Third-party integrations</h2>
      <p>
        Some 1Touch.ai products let you connect third-party services (including Google) so that
        features you enable can run. We only request access after you take an explicit
        authorization action (for example, Google&apos;s OAuth consent screen). We request only
        the scopes needed for the features you turn on. Disconnecting an integration stops new
        access; it does not automatically delete historical records you asked us to keep.
      </p>

      <h2>AI and automation processing</h2>
      <p>
        1Touch.ai provides AI/ML consulting, licensed software, and product features that may
        include large language models, agents, and automations. If you enable those features,
        content you submit or that an authorized integration retrieves (for example an email,
        calendar event, or file you asked an agent to use) may be processed to complete the
        requested task, generate output, or operate the workflow.
      </p>
      <p>
        AI output can be incomplete or incorrect. Do not rely on it as the sole basis for legal,
        financial, medical, or other high-stakes decisions. We do not use Google user data to
        train generalized AI/ML models in a way that violates the Google API Services User Data
        Policy, including Limited Use requirements.
      </p>

      <h2>How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Respond to inquiries, provide services, and communicate with you.</li>
        <li>Operate, maintain, secure, and improve the website and products you use.</li>
        <li>Perform the specific automations and integrations you enable.</li>
        <li>Send service-related messages; send newsletters only if you subscribe.</li>
        <li>Comply with law and enforce our terms where applicable.</li>
      </ul>

      <h2>Storage and security</h2>
      <p>
        We use reasonable administrative and technical safeguards appropriate to the nature of
        the information, such as access controls, encryption in transit where supported, and
        least-privilege access for staff and systems that need it. No method of transmission or
        storage is completely secure. We do not claim specific security certifications in this
        policy.
      </p>

      <h2>Sharing and service providers</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          Service providers that host infrastructure, email delivery, or other processing we
          instruct them to perform on our behalf.
        </li>
        <li>Professional advisors where needed to provide the service or respond to you.</li>
        <li>Authorities if required by law or to protect rights, safety, or security.</li>
        <li>
          A successor in connection with a merger, acquisition, or similar transaction, subject
          to appropriate protections.
        </li>
      </ul>
      <p>
        We do not sell Google user data. We do not share Google user data with third parties for
        their independent advertising or marketing.
      </p>

      <h2>Retention</h2>
      <p>
        We retain information only as long as needed for the purposes described here, including
        to provide the service, keep records of inquiries, resolve disputes, and meet legal
        obligations. Retention periods vary by data type and product configuration. You may
        request deletion as described below, subject to those obligations.
      </p>

      <h2>Your rights and choices</h2>
      <p>Depending on where you live and which product you use, you may be able to:</p>
      <ul>
        <li>Request access to or a copy of personal information we hold about you.</li>
        <li>Request correction or deletion.</li>
        <li>Unsubscribe from marketing or newsletter emails.</li>
        <li>Disconnect third-party integrations, including Google.</li>
      </ul>
      <p>
        To make a request, email <a href="mailto:hello@1touch.ai">hello@1touch.ai</a>. We may
        need to verify your request. Some rights are limited by law or by what we can identify
        from the information you provided.
      </p>

      <h2>Connected integrations</h2>
      <p>
        When you connect an integration, we store the authorization artifacts needed to call
        that provider on your behalf (for example OAuth tokens) and the configuration you
        choose. You control which features are enabled. Revoking access in the third-party
        account (including Google) or in the 1Touch.ai product stops further use of that
        connection.
      </p>

      <h2>Google user data</h2>
      <p>
        1Touch.ai accesses Google user data only after you explicitly authorize access through
        Google&apos;s OAuth consent flow, and only for functionality you enable. We do not
        access Gmail, Google Calendar, or Google Drive unless you connect Google and turn on
        features that require those APIs.
      </p>
      <p>
        <strong>How Google user data may be accessed.</strong> After you grant permission, our
        products may call Google APIs using your authorization to perform the tasks you
        requested or configured (for example running an automation, agent, or workflow).
      </p>
      <p>
        <strong>How Google user data may be used.</strong> Data is used solely to provide and
        operate the enabled feature: display relevant items, draft or send content you
        initiate, create or update events you request, read or write files you select, or
        complete an automation you configured. We do not use Google user data for serving
        advertisements.
      </p>
      <p>
        <strong>How Google user data may be stored.</strong> We may store OAuth tokens, account
        identifiers, and limited records needed to run, debug, or audit the feature you
        enabled (for example logs of a workflow run). We do not keep copies of Gmail, Calendar,
        or Drive content longer than needed for that purpose unless you explicitly save or
        export it into a 1Touch.ai workspace.
      </p>
      <p>
        <strong>How Google user data may be shared.</strong> Google user data is not sold. It
        may be processed by infrastructure or model providers we use only as needed to deliver
        the feature you enabled, under instructions that prohibit independent use. It is not
        shared for third-party advertising.
      </p>
      <p>
        1Touch.ai&apos;s use and transfer to any other app of information received from Google
        APIs will adhere to the{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h3>Gmail</h3>
      <p>
        If you authorize Gmail scopes, 1Touch.ai may read, send, or organize email only as
        needed for the email-related features you enable (for example drafting or sending a
        message you initiate, or processing messages a workflow is configured to handle). We
        do not use Gmail content to build advertising profiles.
      </p>

      <h3>Google Calendar</h3>
      <p>
        If you authorize Google Calendar scopes, 1Touch.ai may read or write calendar events
        only as needed for scheduling features you enable (for example creating, updating, or
        listing events you request through an automation or agent).
      </p>

      <h3>Google Drive</h3>
      <p>
        If you authorize Google Drive scopes, 1Touch.ai may access files and folders you
        select or that a feature you enable is configured to use (for example reading a
        document to summarize it, or writing an output file you requested). We do not
        independently browse your Drive for unrelated purposes.
      </p>

      <h2>Revoking or disconnecting Google access</h2>
      <p>You can stop 1Touch.ai from accessing your Google account at any time:</p>
      <ul>
        <li>
          Disconnect Google from the 1Touch.ai product settings, if that option is available
          in the product you use.
        </li>
        <li>
          Revoke access in your Google Account under{' '}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Third-party apps with account access
          </a>
          .
        </li>
      </ul>
      <p>
        After revocation we will no longer be able to call Google APIs with that authorization.
        You may also email <a href="mailto:hello@1touch.ai">hello@1touch.ai</a> to request
        deletion of stored tokens or related records, subject to legal retention needs.
      </p>

      <h2>Policy updates</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
        at the top will change when we do. Continued use of the website or products after an
        update means the revised policy applies to that use. Material changes will be posted on
        this page.
      </p>

      <h2>Contact</h2>
      <LegalContact />
      <p>
        Related: <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
