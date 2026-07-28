import { SectionHeader } from '../components/SectionHeader';
import { ResponsibilityTable } from '../components/common/ResponsibilityTable';
import { CtaBlock } from '../components/common/CtaBlock';
import { Reveal } from '../components/Reveal';

const stages = [
  { step: '01', title: 'Understand', desc: 'Define your commercial objective, target jurisdictions, key risks, deadlines, and internal stakeholder expectations.' },
  { step: '02', title: 'Design', desc: 'Structure the coordination roadmap, clear budget caps, reporting frequency, and counsel engagement parameters.' },
  { step: '03', title: 'Select & Align', desc: 'Vet, select, and engage independent qualified local lawyers in each market under standardized instructions.' },
  { step: '04', title: 'Mobilise', desc: 'Kick off local workstreams, establish master communication channels, and distribute initial task assignments.' },
  { step: '05', title: 'Coordinate', desc: 'Actively manage local counsel progress, enforce spend guidelines, resolve blockers, and synthesize technical updates.' },
  { step: '06', title: 'Report & Close', desc: 'Deliver unified executive briefing summaries, finalize legal deliverables, audit final fee invoices, and close out the mandate.' },
];

const formats = [
  { title: 'Single Cross-Border Matter', desc: 'Targeted coordination for a specific transaction, dispute, or regulatory inquiry involving 2–5 countries.' },
  { title: 'Multi-Jurisdiction Project', desc: 'Structured management for group-wide restructurings, global product launches, or regional compliance overhauls.' },
  { title: 'Ongoing Portfolio Management', desc: 'Dedicated operational coordination acting as an ongoing extension of your internal legal department.' },
  { title: 'Special Situation Response', desc: 'Rapid 24-48h mobilization for urgent international investigations, asset freezes, or emergency filings.' },
];

export function HowWeWorkPage() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Operating Model"
            title="A clear operating model for international legal work."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Lex Bridge manages the engagement lifecycle from your perspective—bringing structure, transparency, and executive control to multi-jurisdiction mandates.
          </p>
        </div>
      </section>

      {/* Six-stage process */}
      <section className="py-24 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader eyebrow="Engagement Lifecycle" title="The Six-Stage Coordination Process" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {stages.map((s) => (
              <Reveal key={s.step}>
                <div className="rounded-card border border-hairline bg-paper p-8 h-full relative overflow-hidden group hover:border-gold-500/50 transition-colors">
                  <span className="text-4xl font-bold text-gold-500/30 group-hover:text-gold-500 transition-colors block mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3">{s.title}</h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Table (C6) */}
      <section className="py-24 bg-base border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <SectionHeader
              eyebrow="Role Boundaries"
              title="Clear Division of Responsibility"
            />
            <p className="text-body text-ink-60 mt-4">
              To preserve legal independence and client control, responsibilities between legal coordination and local legal advice are explicitly demarcated.
            </p>
          </div>

          <ResponsibilityTable />
        </div>
      </section>

      {/* Engagement Formats */}
      <section className="py-24 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader eyebrow="Commercial Structures" title="Flexible Engagement Formats" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {formats.map((f) => (
              <div key={f.title} className="rounded-card border border-hairline bg-paper p-8">
                <h3 className="text-display-s text-navy-900 font-semibold mb-3">{f.title}</h3>
                <p className="text-body-sm text-ink-60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock variant="A" />
    </div>
  );
}
