import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

/**
 * Homepage §8. The source block is [v1.0 §6.2], which is NOT in hand (PLAN.md §2.2).
 *
 * These are therefore written in the CONDITIONAL — the third option PLAN.md §10
 * explicitly allows: "confirmed as accurate, edited to match reality, or reframed in the
 * conditional". They describe how the coordination model applies to a situation type,
 * and make no claim that any engagement occurred.
 *
 * That distinction is not stylistic. CD §16's pre-launch checklist requires every claimed
 * mandate type and experience statement to be verified, so inventing past engagements for
 * a professional-status-sensitive site would be a fabricated credential. If the client can
 * evidence real anonymised mandates, replace these and drop the conditional framing.
 */
const scenarios = [
  {
    kind: 'Multi-jurisdiction review',
    body: 'A group needs the same commercial question answered across eight markets on one timetable. Lex Bridge would build the master instruction and jurisdiction questionnaire, brief counsel in each market, hold assumptions and terminology common, then consolidate the returns into a single comparison for the board.',
  },
  {
    kind: 'Unfamiliar-jurisdiction dispute',
    body: 'A dispute opens in a market where the client has no adviser relationship. Lex Bridge would define the capability required, run a comparison of independent firms against consistent criteria, coordinate conflict checks, and keep the procedural calendar and evidence flow organised alongside the client’s wider commercial strategy.',
  },
  {
    kind: 'Regional market entry',
    body: 'An operator plans entities and licences in three countries at once. Lex Bridge would map the requirements, align legal counsel with tax, corporate-services and other specialists, and track documents, approvals and dependencies against a single launch-readiness view.',
  },
];

export function RepresentativeMandates() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="In practice"
            title="What coordination looks like on a live mandate."
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <Reveal key={s.kind} delay={i * 70}>
              <article className="flex h-full flex-col rounded-card border border-hairline bg-paper p-7">
                <span className="h-px w-10 bg-gold-500 mb-5" aria-hidden="true" />
                <h3 className="text-display-m mb-4 leading-tight">{s.kind}</h3>
                <p className="text-body-sm text-ink">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={scenarios.length * 70}>
          <p className="text-legal text-ink-60 mt-8 max-w-3xl">
            These scenarios illustrate how the coordination model is applied. They are not descriptions of specific
            engagements, and no client, matter or outcome is identified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
