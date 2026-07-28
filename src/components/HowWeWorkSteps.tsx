import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

/**
 * Homepage §9 — five condensed steps. Copy from CD §4.
 *
 * Scope discipline per v2.0 T3: this is the condensed client-facing sequence. The
 * six-stage lifecycle lives on /how-we-work and the deliverables live on
 * /services/legal-project-management. These three must not repeat each other.
 */
const steps = [
  {
    title: 'Understand the objective',
    body: 'We clarify the business context, jurisdictions, urgency, decision-makers and desired outcome.',
  },
  {
    title: 'Design the mandate',
    body: 'We define the workstreams, information requirements, governance, reporting cycle and counsel brief.',
  },
  {
    title: 'Identify and align counsel',
    body: 'We help evaluate suitable independent local counsel and facilitate the agreed engagement process.',
  },
  {
    title: 'Coordinate delivery',
    body: 'We manage communications, documents, deadlines, dependencies, questions and cross-border consistency.',
  },
  {
    title: 'Report and close',
    body: 'We consolidate outputs, track actions, support implementation and maintain an organised matter record.',
  },
];

export function HowWeWorkSteps() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="How we work"
            title="A disciplined process from instruction to completion."
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <ol className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <li className="flex h-full flex-col rounded-card border border-hairline bg-base p-6">
                <span className="text-eyebrow text-gold-500 mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-display-m mb-3 leading-tight">{step.title}</h3>
                <p className="text-body-sm text-ink">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={steps.length * 60}>
          <a
            href="/how-we-work"
            className="mt-10 inline-flex items-center gap-2.5 py-3 -my-3 text-body-sm font-medium text-navy-900 hover:text-gold-500 transition-colors"
          >
            See the full operating model
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
