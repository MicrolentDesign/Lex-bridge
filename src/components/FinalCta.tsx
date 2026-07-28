import { Reveal } from './Reveal';
import { ConcaveCorner } from './ConcaveCorner';

/** Homepage §13 — C4 final CTA. Copy from CD §4. */
export function FinalCta() {
  return (
    <section className="relative bg-tint overflow-hidden">
      <ConcaveCorner corner="top-right" size={96} fill="var(--color-base)" className="hidden sm:block" />

      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-gold-500 shrink-0" aria-hidden="true" />
              <p className="text-eyebrow uppercase text-navy-900">Start a conversation</p>
            </div>
            <h2 className="text-display-l">Tell us where the matter needs to move.</h2>
            <p className="text-lead text-ink mt-6">
              Share the jurisdictions involved, the nature of the mandate and your immediate priorities. We will help
              define a practical coordination structure and the next steps.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-btn bg-navy-900 px-6 py-3.5 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors"
              >
                Discuss a Mandate
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 px-2 py-3 -mx-2 text-body-sm font-medium text-navy-900 hover:text-gold-500 transition-colors"
              >
                Contact Lex Bridge
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                  <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
