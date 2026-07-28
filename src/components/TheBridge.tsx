import { Reveal } from './Reveal';

/**
 * Homepage §5 "The bridge" — CD §4, with two revisions.
 *
 * [REV] v2.0 §1.3 Fix 4: the draft's "We represent the client's objectives within the
 * coordination process" is replaced. "Represent" is the single word the entire
 * positioning exists to avoid (PLAN.md §4).
 *
 * It also absorbs the hero's former fourth paragraph ("the difficulty is rarely
 * finding a lawyer…"), which is what this section is actually about — see PLAN.md §5.3
 * on the homepage restating its proposition across four separate bands.
 */
export function TheBridge() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                <p className="text-eyebrow uppercase text-ink-60">The bridge</p>
              </div>
              <h2 className="text-display-l">
                Local legal capability, managed through one international relationship.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
              <p className="text-body text-ink">
                For multinational organisations, the difficulty is rarely finding a lawyer. It is choosing the right
                one, framing the instruction, controlling timelines and budgets, and turning separate local answers
                into a single clear picture.
              </p>
              <p className="text-body text-ink">
                Entering a new jurisdiction, responding to a dispute or coordinating a regional project can involve
                unfamiliar legal systems, multiple advisers and fragmented communication. Lex Bridge brings those
                moving parts together. We keep the client&rsquo;s commercial objective at the centre of the
                coordination process, help translate business priorities into clear instructions, and keep counsel,
                internal teams and other professional advisers aligned from opening to completion.
              </p>
              <p className="text-lead text-navy-900 border-l-2 border-gold-500 pl-5 mt-2">
                The client retains control. Local counsel delivers the legal advice. Lex Bridge manages the path
                between them.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
