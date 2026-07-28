import { SectionHeader } from '../components/SectionHeader';
import { ModelBand } from '../components/ModelBand';
import { CtaBlock } from '../components/common/CtaBlock';
import { Link } from '../lib/router';
import { Reveal } from '../components/Reveal';

const leadership = [
  {
    name: 'Victoria Lin',
    title: 'Head of International Mandates',
    jurisdictionNote: 'Admitted in Hong Kong (Non-Practising); does not practise law at Lex Bridge.',
    bio: 'Over 15 years of experience advising global corporations and managing multi-jurisdiction corporate and commercial initiatives across APAC and Europe.',
  },
  {
    name: 'David K. Vance',
    title: 'Director of Legal Operations & Spend',
    jurisdictionNote: 'Solicitor, England & Wales (Non-Practising); does not practise law at Lex Bridge.',
    bio: 'Specialist in legal department transformation, panel law firm management, and international legal spend optimization for FTSE 100 and Fortune 500 groups.',
  },
  {
    name: 'Elena Rostova',
    title: 'Senior Director, Cross-Border Strategy',
    jurisdictionNote: 'Chartered Accountant (FCA); non-lawyer management specialist.',
    bio: 'Former Big-Four transaction lead specializing in cross-border dispute coordination, asset tracing, and multi-agency regulatory risk management.',
  },
];

const principles = [
  { title: 'Clarity', description: 'Transforming complex multi-country legal inputs into concise, executive-level decision matrices.' },
  { title: 'Independence', description: 'Objective selection of local counsel based strictly on merit, suitability, and cost performance.' },
  { title: 'Responsiveness', description: 'Single point of contact operating across international time zones for rapid coordination.' },
  { title: 'Confidentiality', description: 'Rigorous non-disclosure standards preserving privilege and commercial sensitivity.' },
  { title: 'Accountability', description: 'Active management of timelines, deliverables, and external legal fee arrangements.' },
  { title: 'Commercial Focus', description: 'Keeping client business objectives at the center of every legal workstream.' },
];

export function AboutPage() {
  return (
    <div className="bg-paper">
      {/* 1. Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white relative">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="About Lex Bridge"
            title="International coordination for legal work that crosses borders."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Lex Bridge Advisory Group is an international legal management and coordination consultancy based in Hong Kong. We bridge the gap between global corporate objectives and local legal execution.
          </p>
        </div>
      </section>

      {/* 2. Our Role */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our Purpose"
                title="We manage the relationship between international objectives and local legal work."
              />
            </div>
            <div className="lg:col-span-7 space-y-6 text-body text-ink leading-relaxed">
              <p>
                When corporate operations span multiple countries, instructing and managing separate law firms in every territory creates administrative overload, fragmented advice, and unpredictable costs.
              </p>
              <p>
                Lex Bridge acts as your client-side coordination partner. We manage the entire legal project lifecycle—from vetting and appointing the optimal independent local counsel in each jurisdiction to delivering unified executive reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Model Band (C1) */}
      <ModelBand />

      {/* 4. Principles */}
      <section className="py-24 bg-base border-t border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader eyebrow="Governance" title="Our Operating Principles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {principles.map((p) => (
              <Reveal key={p.title}>
                <div className="rounded-card border border-hairline bg-paper p-8 h-full shadow-xs">
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3">{p.title}</h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section className="py-24 border-t border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Leadership"
            title="Experience built across international borders."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-card border border-hairline bg-paper p-8 flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-full bg-navy-900/10 text-navy-900 font-bold text-xl flex items-center justify-center mb-6">
                    {l.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-display-s text-navy-900 font-semibold">{l.name}</h3>
                  <p className="text-body-sm text-gold-500 font-medium mt-1 mb-2">{l.title}</p>
                  <p className="text-xs text-ink-60 bg-tint/60 p-2.5 rounded-sm border border-hairline/50 mb-4">
                    {l.jurisdictionNote}
                  </p>
                  <p className="text-body-sm text-ink leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Status link */}
      <section className="py-12 bg-tint/50 border-t border-hairline text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-body-sm text-ink">
            Lex Bridge Advisory Group is an international legal management consultancy and does not provide legal advice or legal representation. Read our complete{' '}
            <Link href="/professional-status" className="font-semibold text-navy-900 hover:text-gold-500 underline">
              Professional Status &amp; Disclaimer Notice
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. CTA Block */}
      <CtaBlock variant="A" />
    </div>
  );
}
