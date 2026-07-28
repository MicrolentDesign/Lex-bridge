import { SectionHeader } from '../components/SectionHeader';
import { CtaBlock } from '../components/common/CtaBlock';
import { sectorsData } from '../data/sectors';
import { Reveal } from '../components/Reveal';

export function SectorsPage() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Industry Focus"
            title="International coordination informed by commercial context."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Legal coordination is most effective when grounded in industry reality. We bring deep sector awareness to cross-border mandates across key global commercial verticals.
          </p>
        </div>
      </section>

      {/* Sector Grid */}
      <section className="py-24 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsData.map((sec) => (
              <Reveal key={sec.id}>
                <div className="rounded-card border border-hairline bg-paper p-8 h-full flex flex-col justify-between shadow-2xs hover:border-gold-500/50 transition-colors">
                  <div>
                    <h3 className="text-display-s text-navy-900 font-semibold mb-3">{sec.title}</h3>
                    <p className="text-body-sm text-ink-60 leading-relaxed mb-6">{sec.summary}</p>
                    
                    <div className="border-t border-hairline pt-4">
                      <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider block mb-3">
                        Common Mandates
                      </span>
                      <ul className="space-y-2 text-xs text-ink">
                        {sec.commonMandates.map((m, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-navy-900">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifier */}
      <section className="py-12 bg-tint/50 text-center border-b border-hairline">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-body-sm text-navy-900 italic">
            Lex Bridge manages legal project logistics and coordination across these verticals. Formal legal advice within each sector is provided exclusively by independent qualified local specialists.
          </p>
        </div>
      </section>

      <CtaBlock variant="B" />
    </div>
  );
}
