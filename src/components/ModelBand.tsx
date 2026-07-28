import { SectionHeader } from './SectionHeader';

const nodes = [
  {
    label: 'You',
    body: 'Your objective. Your decisions. One point of contact.',
    accent: false,
  },
  {
    label: 'Lex Bridge',
    body: 'Selects counsel. Manages the matter. Consolidates every jurisdiction into one report.',
    accent: true,
  },
  {
    label: 'Independent Local Counsel',
    body: 'Provides the legal advice and representation in each jurisdiction.',
    accent: false,
  },
];

function Connector() {
  return (
    <div className="flex items-center justify-center py-3 md:py-0 md:px-3 text-ink-60" aria-hidden="true">
      <svg width="44" height="16" viewBox="0 0 44 16" fill="none" className="rotate-90 md:rotate-0">
        <line x1="5" y1="8" x2="39" y2="8" stroke="currentColor" strokeWidth="1.25" />
        <path d="M5 8L10 4M5 8L10 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M39 8L34 4M39 8L34 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * C1 — the three-party model diagram. PLAN.md §1.3 Fix 2 calls it "the most important
 * addition to the site"; the homepage's 3-second test rests on it.
 *
 * Renders fully static, same as Hero — DESIGN-DIRECTION.md §5's hard rule.
 * Uses the shared SectionHeader so its eyebrow matches every other section.
 */
export function ModelBand() {
  return (
    <section className="relative bg-base">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-16 md:py-24">
        <SectionHeader
          eyebrow="How the relationship works"
          title="Three parties. Three clearly separated roles."
          className="mb-12 md:mb-16"
        />

        <div className="flex flex-col md:flex-row items-stretch max-w-(--container-content)">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex flex-col md:flex-row items-stretch flex-1">
              <div
                className={`flex-1 rounded-card border p-6 md:p-7 ${
                  node.accent ? 'border-gold-500 bg-gold-100/40' : 'border-hairline bg-paper'
                }`}
              >
                <span
                  className={`block h-[3px] w-10 mb-5 ${node.accent ? 'bg-gold-500' : 'bg-navy-900/15'}`}
                  aria-hidden="true"
                />
                <p className="text-eyebrow uppercase text-navy-900 mb-3">{node.label}</p>
                <p className="text-body-sm text-ink">{node.body}</p>
              </div>
              {i < nodes.length - 1 && <Connector />}
            </div>
          ))}
        </div>

        <p className="text-body-sm text-ink-60 max-w-3xl mt-10 md:mt-12 pt-8 border-t border-hairline">
          Lex Bridge is not a law firm. We coordinate and manage. Jurisdiction-specific legal advice and
          representation are provided by independent qualified counsel. You retain control of every legal decision.
        </p>
      </div>
    </section>
  );
}
