import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { RoleBoundaryStrip } from '../components/common/RoleBoundaryStrip';
import { useRouter } from '../lib/router';

const whatWeValue = [
  'Deep subject-matter expertise in your local regulatory or judicial environment.',
  'Direct partner involvement and clear accountability on instructions.',
  'Commitment to transparent, upfront fee estimates and capped arrangements.',
  'Prompt responsiveness and structured reporting in commercial English.',
  'Strict adherence to client billing guidelines and scope parameters.',
  'Independence from commercial conflicts with major corporate groups.',
  'Proactive communication when local legal developments impact client strategy.',
];

const whatCounselCanExpect = [
  'Well-scoped, commercially framed instruction briefs from experienced coordinators.',
  'Single point of administrative contact reducing client liaison complexity.',
  'Clear fee approval protocols and timely invoice processing support.',
  'Respect for your independent legal judgment and professional obligations.',
  'Direct client relationship retention—Lex Bridge manages coordination, not your client relationship.',
];

export function ForLocalCounselPage() {
  const { navigate } = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firmName: '',
    primaryJurisdiction: '',
    additionalJurisdictions: '',
    keyPracticeAreas: '',
    website: '',
    contactName: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    barRegistrationDetails: '',
    languagesSpoken: '',
    feeStructureTypes: '',
    typicalHourlyRateRange: '',
    conflictsCheckProcess: '',
    representativeClients: '',
    additionalNotes: '',
    privacyCheck: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission and navigate to confirmation page
    setTimeout(() => {
      setSubmitting(false);
      navigate('/for-local-counsel/thank-you');
    }, 600);
  };

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="For Local Counsel"
            title="Independent local expertise, connected to international mandates."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            We collaborate with high-caliber independent law firms and specialist practitioners worldwide. Introduce your firm to join our international mandate network.
          </p>
        </div>
      </section>

      {/* Role Boundary Strip framed for counsel */}
      <RoleBoundaryStrip overrideText="Counsel remain fully independent. Lex Bridge coordinates the international relationship; you retain your own professional judgment, engagement terms and obligations." />

      {/* Values & Expectations */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Firm Profile</h2>
              <h3 className="text-display-s text-navy-900 font-semibold mb-6">What We Value in Counsel</h3>
              <ul className="space-y-4">
                {whatWeValue.map((v, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-ink">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Collaboration</h2>
              <h3 className="text-display-s text-navy-900 font-semibold mb-6">What Counsel Can Expect</h3>
              <ul className="space-y-4">
                {whatCounselCanExpect.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-ink">
                    <span className="text-navy-900 font-bold shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Introduction Form */}
      <section className="py-24 bg-base border-b border-hairline">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Network Registration"
              title="Introduce Your Law Firm"
            />
            <p className="text-body text-ink-60 mt-3">
              Please complete the 17-field firm profile below to register your firm’s capabilities with our international mandate coordination team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-card border border-hairline bg-paper p-8 md:p-12 shadow-sm space-y-6">
            <h3 className="text-display-s text-navy-900 font-semibold border-b border-hairline pb-3">
              1. Firm &amp; Jurisdiction Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Law Firm Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firmName"
                  required
                  value={formData.firmName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Legal Chambers"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Primary Jurisdiction <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="primaryJurisdiction"
                  required
                  value={formData.primaryJurisdiction}
                  onChange={handleChange}
                  placeholder="e.g. Singapore / Hong Kong"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Additional Covered Jurisdictions
                </label>
                <input
                  type="text"
                  name="additionalJurisdictions"
                  value={formData.additionalJurisdictions}
                  onChange={handleChange}
                  placeholder="e.g. Malaysia, Indonesia"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Firm Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                Key Practice Areas &amp; Specializations <span className="text-red-500">*</span>
              </label>
              <textarea
                name="keyPracticeAreas"
                required
                rows={3}
                value={formData.keyPracticeAreas}
                onChange={handleChange}
                placeholder="e.g. Cross-border litigation, financial regulatory compliance, IP enforcement, M&A due diligence..."
                className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
              />
            </div>

            <h3 className="text-display-s text-navy-900 font-semibold border-b border-hairline pt-6 pb-3">
              2. Key Contact Partner
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Contact Partner Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Title / Position <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactTitle"
                  required
                  value={formData.contactTitle}
                  onChange={handleChange}
                  placeholder="e.g. Senior Partner / Head of Litigation"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Direct Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="partner@firm.com"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Telephone Number
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="+852..."
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>
            </div>

            <h3 className="text-display-s text-navy-900 font-semibold border-b border-hairline pt-6 pb-3">
              3. Licensing, Rates &amp; Operational Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Local Bar Association / Licensing Details <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="barRegistrationDetails"
                  required
                  value={formData.barRegistrationDetails}
                  onChange={handleChange}
                  placeholder="e.g. Law Society of Hong Kong Reg #..."
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Working Languages <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="languagesSpoken"
                  required
                  value={formData.languagesSpoken}
                  onChange={handleChange}
                  placeholder="e.g. English, Cantonese, Mandarin"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Fee Structure Preferences <span className="text-red-500">*</span>
                </label>
                <select
                  name="feeStructureTypes"
                  required
                  value={formData.feeStructureTypes}
                  onChange={handleChange}
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none bg-paper"
                >
                  <option value="">Select primary fee arrangement...</option>
                  <option value="capped">Fixed Capped Fees</option>
                  <option value="hourly">Standard Hourly Rates</option>
                  <option value="blended">Blended Partner/Associate Rates</option>
                  <option value="flexible">Flexible / Retainer Based</option>
                </select>
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                  Partner Hourly Rate Range (USD)
                </label>
                <input
                  type="text"
                  name="typicalHourlyRateRange"
                  value={formData.typicalHourlyRateRange}
                  onChange={handleChange}
                  placeholder="e.g. $400 - $650 / hr"
                  className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                Conflicts Check &amp; Turnaround Capability
              </label>
              <textarea
                name="conflictsCheckProcess"
                rows={2}
                value={formData.conflictsCheckProcess}
                onChange={handleChange}
                placeholder="Briefly describe conflict turnaround timeline (e.g. 24 hours) and any excluded client sectors..."
                className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                Representative Mandate Types / Experience
              </label>
              <textarea
                name="representativeClients"
                rows={2}
                value={formData.representativeClients}
                onChange={handleChange}
                placeholder="Anonymized examples of relevant cross-border matters handled..."
                className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                Additional Firm Overview Notes
              </label>
              <textarea
                name="additionalNotes"
                rows={2}
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any additional awards, rankings, or international capabilities..."
                className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyCheck"
                  required
                  checked={formData.privacyCheck}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-hairline text-navy-900 focus:ring-navy-900"
                />
                <span className="text-body-sm text-ink-60 leading-normal">
                  I confirm that I am authorized to submit firm details on behalf of the named law firm, and accept the Lex Bridge Privacy Notice.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-btn bg-navy-900 py-3.5 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {submitting ? 'Submitting Firm Profile...' : 'Introduce Your Firm &rarr;'}
            </button>
          </form>
        </div>
      </section>

      {/* Submission note */}
      <section className="py-8 bg-tint/50 text-center border-b border-hairline">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-xs text-ink-60">
            Firm submissions do not imply any formal engagement, retainer, or exclusivity agreement between Lex Bridge Advisory Group and the submitting law firm.
          </p>
        </div>
      </section>
    </div>
  );
}
