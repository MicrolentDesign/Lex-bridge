import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ResponsibilityTable } from '../components/common/ResponsibilityTable';
import { CtaBlock } from '../components/common/CtaBlock';
import { faqData } from '../data/faq';
import { Link } from '../lib/router';

interface UtilityPageProps {
  pageType: 'faq' | 'professional-status' | 'privacy' | 'terms' | 'cookies' | 'contact-thank-you' | 'counsel-thank-you' | '404';
}

export function UtilityPage({ pageType }: UtilityPageProps) {
  if (pageType === 'faq') {
    return <FaqView />;
  }
  if (pageType === 'professional-status') {
    return <ProfessionalStatusView />;
  }
  if (pageType === 'privacy') {
    return <PrivacyNoticeView />;
  }
  if (pageType === 'terms') {
    return <TermsView />;
  }
  if (pageType === 'cookies') {
    return <CookiesView />;
  }
  if (pageType === 'contact-thank-you') {
    return <ThankYouView type="contact" />;
  }
  if (pageType === 'counsel-thank-you') {
    return <ThankYouView type="counsel" />;
  }
  return <NotFoundView />;
}

/* 1. FAQ View */
function FaqView() {
  const [openId, setOpenId] = useState<string | null>('q1');

  const categories = ['Core Model & Operations', 'Counsel Engagement & Oversight', 'Commercial & Mandate Delivery'] as const;

  return (
    <div className="bg-paper">
      <section className="py-20 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Resources"
            title="Frequently Asked Questions"
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6">
            Clear answers regarding our international legal coordination model, counsel selection, and engagement structures.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-16">
          {categories.map((cat) => {
            const items = faqData.filter((q) => q.category === cat);
            return (
              <div key={cat}>
                <h2 className="text-eyebrow uppercase text-gold-500 mb-6 border-b border-hairline pb-2">
                  {cat}
                </h2>
                <div className="space-y-4">
                  {items.map((q) => {
                    const isOpen = openId === q.id;
                    return (
                      <div
                        key={q.id}
                        className="rounded-card border border-hairline bg-paper overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : q.id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-base/50 transition-colors"
                        >
                          <span className="text-display-s text-navy-900 font-semibold pr-4">
                            {q.question}
                          </span>
                          <span className="h-8 w-8 rounded-full border border-hairline flex items-center justify-center shrink-0 text-navy-900">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-body-sm text-ink leading-relaxed border-t border-hairline/40 pt-4 bg-tint/30">
                            {q.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBlock variant="B" />
    </div>
  );
}

/* 2. Professional Status View */
function ProfessionalStatusView() {
  return (
    <div className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Regulatory Disclaimer"
          title="Professional Status &amp; Disclaimer"
        />

        <div className="prose max-w-none my-12 text-body text-ink space-y-6 leading-relaxed border-b border-hairline pb-12">
          <p className="font-semibold text-navy-900 text-lg">
            Lex Bridge Advisory Group is an international legal management and coordination consultancy headquartered in Hong Kong. Lex Bridge Advisory Group is NOT a law firm, is NOT registered as a law firm, and does NOT practice law in Hong Kong or any other jurisdiction.
          </p>

          <p>
            Lex Bridge Advisory Group does not provide formal legal advice, legal opinions, litigation representation, court advocacy, or reserved legal activities under the Legal Practitioners Ordinance (Cap. 159 of the Laws of Hong Kong) or equivalent legal profession legislation in foreign territories.
          </p>

          <p>
            All jurisdiction-specific legal advice, legal opinion, litigation, and regulatory representation required for client mandates are provided exclusively by independent, qualified local law firms and advocates engaged directly by or on behalf of the client.
          </p>
        </div>

        <h2 className="text-display-s text-navy-900 font-semibold mb-6">
          Allocation of Mandate Responsibilities
        </h2>
        <ResponsibilityTable />
      </div>
    </div>
  );
}

/* 3. Privacy Notice View */
function PrivacyNoticeView() {
  return (
    <div className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeader eyebrow="Legal" title="Privacy Notice" />
        <p className="text-body-sm text-ink-60 mt-2 mb-12">Last updated: 15 July 2026</p>

        <div className="space-y-8 text-body-sm text-ink leading-relaxed">
          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">1. Scope of Privacy Notice</h2>
            <p>Lex Bridge Advisory Group ("Lex Bridge", "we", "our") respects your privacy. This Privacy Notice outlines how we collect, process, and protect personal data collected through our website and commercial enquiry channels in accordance with the Hong Kong Personal Data (Privacy) Ordinance (PDPO) and international data protection standards.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">2. Data We Collect</h2>
            <p>We collect information provided directly by you during commercial enquiries or local counsel introductions, including: full name, corporate title, business email, telephone number, jurisdiction preferences, and mandate description details.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">3. Purpose of Processing</h2>
            <p>Personal data is processed strictly for: responding to client service enquiries, evaluating local counsel submissions, managing project coordination logistics, and fulfilling legal/regulatory obligations.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">4. Disclosure to Third Parties</h2>
            <p>We do not sell personal data. We disclose information to independent local legal counsel only as required to assess mandate capacity and execute approved coordination workflows.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">5. Cross-Border Data Transfers</h2>
            <p>Because our mandates are international, data may be transferred to independent local counsel in target jurisdictions under strict confidentiality agreements.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">6. Security &amp; Retention</h2>
            <p>We implement robust technical and organizational encryption standards. Data is retained only for as long as required to fulfill commercial and legal compliance purposes.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">7. Your Rights</h2>
            <p>Under the PDPO, you have the right to request access to and correction of your personal data held by Lex Bridge by contacting privacy@lexbridge.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4. Terms View */
function TermsView() {
  return (
    <div className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeader eyebrow="Legal" title="Website Terms of Use" />
        <p className="text-body-sm text-ink-60 mt-2 mb-12">Last updated: 15 July 2026</p>

        <div className="space-y-8 text-body-sm text-ink leading-relaxed">
          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Lex Bridge website, you agree to be bound by these Terms of Use. If you do not agree, please refrain from using the site.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">2. Non-Legal Nature of Content</h2>
            <p>All information, publications, insights, and content on this website are provided for general informational purposes only and do not constitute legal advice or formal professional opinions.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">3. No Lawyer-Client Relationship</h2>
            <p>Submitting an enquiry through this website does not create a lawyer-client or fiduciary legal relationship between you and Lex Bridge Advisory Group.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">4. Intellectual Property</h2>
            <p>All logos, copy, designs, diagrams, and brand assets on this website are the exclusive property of Lex Bridge Advisory Group and protected under applicable copyright laws.</p>
          </div>

          <div>
            <h2 className="text-display-s text-navy-900 font-semibold mb-3">5. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. Cookies View */
function CookiesView() {
  return (
    <div className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeader eyebrow="Legal" title="Cookie Notice" />
        <p className="text-body-sm text-ink-60 mt-2 mb-12">Last updated: 15 July 2026</p>

        <div className="space-y-8 text-body-sm text-ink leading-relaxed">
          <p>
            Lex Bridge uses essential and analytical cookies to improve website performance and user experience.
          </p>

          <div className="rounded-card border border-hairline overflow-hidden my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white text-body-sm">
                  <th className="p-4">Category</th>
                  <th className="p-4">Purpose</th>
                  <th className="p-4">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr className="bg-paper">
                  <td className="p-4 font-semibold text-navy-900">Essential</td>
                  <td className="p-4">Security, header state, and navigation routing.</td>
                  <td className="p-4">Session</td>
                </tr>
                <tr className="bg-tint/30">
                  <td className="p-4 font-semibold text-navy-900">Analytics</td>
                  <td className="p-4">Aggregated visitor count and page interaction metrics.</td>
                  <td className="p-4">12 Months</td>
                </tr>
                <tr className="bg-paper">
                  <td className="p-4 font-semibold text-navy-900">Preferences</td>
                  <td className="p-4">Stores cookie consent choices.</td>
                  <td className="p-4">6 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 6. Thank You Views */
function ThankYouView({ type }: { type: 'contact' | 'counsel' }) {
  const isContact = type === 'contact';

  return (
    <div className="bg-paper py-24 text-center">
      <div className="mx-auto max-w-xl px-6">
        <div className="h-16 w-16 bg-gold-500/10 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          ✓
        </div>
        <h1 className="text-display-m text-navy-900 font-semibold mb-4">
          {isContact ? 'Enquiry Received' : 'Firm Profile Submitted'}
        </h1>
        <p className="text-body text-ink-60 leading-relaxed mb-8">
          {isContact
            ? 'Thank you for reaching out to Lex Bridge. Our coordination team will review your mandate details and respond within one business day regarding next steps.'
            : 'Thank you for introducing your law firm to Lex Bridge. Our network coordination team will review your profile details and confirm receipt.'}
        </p>

        <div className="border-t border-hairline pt-8">
          <p className="text-eyebrow uppercase text-navy-900 mb-4">Onward Links</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-body-sm font-medium">
            <Link href="/" className="px-5 py-2.5 rounded-btn border border-hairline hover:bg-base transition-colors">
              Return Home
            </Link>
            <Link href="/services" className="px-5 py-2.5 rounded-btn border border-hairline hover:bg-base transition-colors">
              Explore Services
            </Link>
            <Link href="/about" className="px-5 py-2.5 rounded-btn border border-hairline hover:bg-base transition-colors">
              About Lex Bridge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 7. Not Found View (404) */
function NotFoundView() {
  return (
    <div className="bg-paper py-24 text-center">
      <div className="mx-auto max-w-xl px-6">
        <span className="text-display-l font-bold text-gold-500 block mb-2">404</span>
        <h1 className="text-display-m text-navy-900 font-semibold mb-4">Page Not Found</h1>
        <p className="text-body text-ink-60 leading-relaxed mb-8">
          The requested URL was not found on Lex Bridge Advisory Group. Please use the navigation links below to find what you are looking for.
        </p>

        <div className="grid grid-cols-2 gap-4 text-body-sm text-left max-w-md mx-auto">
          <Link href="/" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            Homepage &rarr;
          </Link>
          <Link href="/services" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            Services &rarr;
          </Link>
          <Link href="/about" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            About Us &rarr;
          </Link>
          <Link href="/how-we-work" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            How We Work &rarr;
          </Link>
          <Link href="/global-reach" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            Global Reach &rarr;
          </Link>
          <Link href="/contact" className="p-3 rounded-card border border-hairline hover:border-gold-500 font-medium text-navy-900">
            Contact &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
