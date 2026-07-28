import { SectionHeader } from '../components/SectionHeader';
import { CtaBlock } from '../components/common/CtaBlock';
import { Reveal } from '../components/Reveal';

const regions = [
  { name: 'Asia-Pacific', keyMarkets: 'Hong Kong, Singapore, Tokyo, Sydney, Seoul, Kuala Lumpur, Jakarta' },
  { name: 'Greater China', keyMarkets: 'Hong Kong SAR, Mainland China key economic zones, Macao SAR, Taiwan' },
  { name: 'Middle East & North Africa', keyMarkets: 'Dubai / UAE (DIFC & ADGM), Riyadh / KSA, Qatar, Bahrain' },
  { name: 'Europe & UK', keyMarkets: 'London, Frankfurt, Paris, Amsterdam, Zurich, Dublin, Luxembourg' },
  { name: 'Sub-Saharan Africa', keyMarkets: 'Johannesburg, Nairobi, Lagos, Port Louis / Mauritius' },
  { name: 'North America', keyMarkets: 'New York, Delaware, California, Toronto, Vancouver' },
  { name: 'Latin America & Caribbean', keyMarkets: 'São Paulo, Mexico City, Cayman Islands, British Virgin Islands' },
];

const coverageSteps = [
  { step: '1', title: 'Scope Requirement', desc: 'Isolate target jurisdictions and regulatory domains required for the client mandate.' },
  { step: '2', title: 'Network Mapping', desc: 'Identify vetted independent local counsel with specific experience in local court or regulatory matters.' },
  { step: '3', title: 'Conflict & Capacity Check', desc: 'Verify independence, local bar standing, and immediate operational capacity.' },
  { step: '4', title: 'Standardized Alignment', desc: 'Instruct counsel under Lex Bridge management playbooks and fixed fee parameters.' },
  { step: '5', title: 'Unified Execution', desc: 'Maintain single-point-of-contact reporting throughout the multi-country engagement.' },
];

export function GlobalReachPage() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Global Reach"
            title="International coverage shaped around the mandate."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            We provide global coverage without unnecessary overhead. Lex Bridge connects your mandate with vetted independent lawyers across key international business hubs.
          </p>
        </div>
      </section>

      {/* Flexible Model */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Flexible Coverage Model</h2>
            <h3 className="text-display-m text-navy-900 font-semibold mb-6">
              Global Reach Without Unnecessary Complexity
            </h3>
            <p className="text-body text-ink leading-relaxed mb-4">
              Traditional international law firms maintain physical branch offices in every capital—creating massive real estate and staffing overhead that gets passed on to clients.
            </p>
            <p className="text-body text-ink leading-relaxed">
              Lex Bridge operates an unencumbered international coordination model. Based in Hong Kong, we maintain relationships with vetted independent law firms globally. We assemble conflict-free, specialist legal teams tailored specifically to your target markets.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Index (No office pins - text & region cards only) */}
      <section className="py-24 bg-base border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Regional Capability"
            title="International Regional Coverage"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {regions.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-card border border-hairline bg-paper p-8 h-full shadow-2xs">
                  <span className="h-2 w-8 bg-gold-500 block mb-4 rounded-full" aria-hidden="true" />
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3">{r.name}</h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed">
                    <span className="font-semibold text-navy-900 block mb-1">Key Commercial Hubs:</span>
                    {r.keyMarkets}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How coverage is built */}
      <section className="py-24 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Methodology"
            title="How Jurisdictional Coverage Is Built"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-14">
            {coverageSteps.map((s) => (
              <div key={s.step} className="rounded-card border border-hairline bg-paper p-6 relative">
                <span className="text-2xl font-bold text-gold-500 block mb-2">{s.step}</span>
                <h4 className="text-body-sm font-semibold text-navy-900 mb-2">{s.title}</h4>
                <p className="text-xs text-ink-60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Statement */}
      <section className="py-12 bg-tint/50 text-center border-b border-hairline">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-body-sm text-navy-900 italic">
            Coverage is tailored dynamically to client instructions. Lex Bridge does not operate fixed branch offices in all named territories; local legal advice and formal representation are provided exclusively by independent qualified counsel licensed in each jurisdiction.
          </p>
        </div>
      </section>

      <CtaBlock variant="B" />
    </div>
  );
}
