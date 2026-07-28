import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useRouter } from '../lib/router';
import { servicesData } from '../data/services';

const serviceOptions = Object.values(servicesData).map((s) => ({
  value: s.slug,
  label: s.title,
}));

export function ContactPage() {
  const { navigate } = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    businessEmail: '',
    telephone: '',
    jurisdictions: '',
    serviceRequired: 'not-sure',
    mandateDescription: '',
    preferredTiming: 'This week',
    privacyAck: false,
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

    setTimeout(() => {
      setSubmitting(false);
      navigate('/contact/thank-you');
    }, 600);
  };

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Contact Lex Bridge"
            title="Start with the objective. We will help structure the route forward."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Tell us about your upcoming international legal project, target jurisdictions, or ongoing portfolio needs. Our Hong Kong coordination team will review and respond promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Contact Details Right */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="text-display-s text-navy-900 font-semibold mb-6">
                International Mandate Enquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="rounded-card border border-hairline bg-paper p-8 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g. General Counsel / VP Legal"
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Business Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      required
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+852..."
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                      Target Jurisdiction(s) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jurisdictions"
                      required
                      value={formData.jurisdictions}
                      onChange={handleChange}
                      placeholder="e.g. Hong Kong, Singapore, UK"
                      className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    required
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none bg-paper"
                  >
                    <option value="not-sure">Not sure yet / General Mandate Consultation</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                    Brief Description of the Mandate <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="mandateDescription"
                    required
                    rows={4}
                    maxLength={2000}
                    value={formData.mandateDescription}
                    onChange={handleChange}
                    placeholder="Describe commercial objective, key deadlines, and expected scope..."
                    className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none"
                  />
                  <span className="text-xs text-ink-60 block mt-1">Maximum 2,000 characters.</span>
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-navy-900 mb-1.5">
                    Preferred Response Timing <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="preferredTiming"
                    required
                    value={formData.preferredTiming}
                    onChange={handleChange}
                    className="w-full rounded-btn border border-hairline px-4 py-2.5 text-body-sm text-ink focus:border-navy-900 focus:outline-none bg-paper"
                  >
                    <option value="Urgent (24h)">Urgent (Within 24 hours)</option>
                    <option value="This week">This week</option>
                    <option value="No fixed deadline">No fixed deadline / Exploratory</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacyAck"
                      required
                      checked={formData.privacyAck}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-hairline text-navy-900 focus:ring-navy-900"
                    />
                    <span className="text-body-sm text-ink-60 leading-normal">
                      I accept the Lex Bridge Privacy Notice regarding the processing of business contact details.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-btn bg-navy-900 py-3.5 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Submitting Enquiry...' : 'Submit Enquiry &rarr;'}
                </button>
              </form>

              {/* Helper disclaimer */}
              <div className="mt-4 p-4 rounded-card bg-tint/40 border border-hairline text-xs text-ink-60 leading-normal">
                <span className="font-semibold text-navy-900">Important Note:</span> Please do not send privileged, highly sensitive, or confidential legal documents via this preliminary form. Submitting an enquiry does not establish a lawyer-client or fiduciary relationship.
              </div>
            </div>

            {/* Details Right Column (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              {/* Contact Card */}
              <div className="rounded-card border border-hairline bg-paper p-8">
                <h3 className="text-display-s text-navy-900 font-semibold mb-6">
                  Headquarters &amp; Direct Contact
                </h3>

                <ul className="space-y-4 text-body-sm text-ink">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold">📍</span>
                    <div>
                      <span className="font-semibold text-navy-900 block">Location</span>
                      <span>Hong Kong SAR</span>
                      <span className="block text-xs text-ink-60">[Registered address — to confirm]</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold">✉️</span>
                    <div>
                      <span className="font-semibold text-navy-900 block">General Email</span>
                      <span className="text-xs text-ink-60">[Email — to confirm]</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold">📞</span>
                    <div>
                      <span className="font-semibold text-navy-900 block">Telephone</span>
                      <span className="text-xs text-ink-60">[Phone — to confirm]</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold">🕒</span>
                    <div>
                      <span className="font-semibold text-navy-900 block">Business Hours &amp; Time Zone</span>
                      <span>Monday – Friday: 09:00 – 18:00 (HKT / UTC+8)</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What Happens Next Card (Section 4) */}
              <div className="rounded-card border border-hairline bg-navy-900 text-white p-8">
                <h3 className="text-eyebrow uppercase text-gold-400 mb-4">Process</h3>
                <h4 className="text-display-s text-white font-semibold mb-6">What Happens Next</h4>

                <ol className="space-y-4 text-body-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold">1.</span>
                    <span>We review your mandate requirements, timing, and target jurisdictions internally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold">2.</span>
                    <span>We respond regarding an appropriate next step—usually a short, confidential introductory call.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold">3.</span>
                    <span>Where we can assist, we set out a proposed legal coordination structure, timeline, and fee parameters.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
