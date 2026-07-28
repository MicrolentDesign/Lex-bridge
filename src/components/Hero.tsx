import { ConcaveCorner } from './ConcaveCorner';
import { images, alts, heroFigure } from '../lib/images';

/**
 * v2.0 §1.3 Fix 1 — the sub-headline carries the "not a law firm" statement at
 * prominent (Lead) size, not caption size.
 *
 * Art direction: content left, image right. On desktop the image panel bleeds to the
 * viewport edge (absolute, right half) so the text column stays on the container grid.
 * Below lg the panel becomes a normal block under the CTAs — the copy must lead on
 * mobile, so the image never pushes the sub-headline or buttons off-screen.
 *
 * DESIGN-DIRECTION.md §5 — renders statically, no enter animation and no
 * reveal-on-scroll. The three-second test in PLAN.md §1 rests on this section plus the
 * model band, so nothing may delay painting the "not a law firm" line.
 */
export function Hero() {
  return (
    <section className="relative bg-tint overflow-hidden">
      {/* Desktop image panel — bleeds right, keeps text on the container grid. */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[46%]">
        <img
          src={images.heroBackdrop}
          alt={alts.heroBackdrop}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Navy veil: unifies any photograph with the palette and keeps the seam calm. */}
        <div className="absolute inset-0 bg-navy-900/25" aria-hidden="true" />
        <div
          className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-tint to-transparent"
          aria-hidden="true"
        />
        {heroFigure && (
          <img
            src={heroFigure}
            alt=""
            className="absolute bottom-0 right-0 h-[92%] w-auto object-contain object-bottom"
          />
        )}
      </div>

      <div className="relative mx-auto max-w-(--container-shell) px-6 md:px-10">
        <div className="lg:max-w-[52%] py-16 md:py-24 lg:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            <p className="text-eyebrow uppercase text-navy-900">Hong Kong-based international consultancy</p>
          </div>

          <h1 className="text-display-xl">One mandate. Multiple jurisdictions. Coordinated with clarity.</h1>

          <p className="text-lead text-ink mt-7">
            <strong className="font-semibold text-navy-900">We are a consultancy, not a law firm.</strong> Lex Bridge
            finds, appoints and manages the independent local lawyers your matter needs in each jurisdiction — and
            reports back to you as one.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-btn bg-navy-900 px-6 py-3.5 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors"
            >
              Discuss an International Mandate
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-btn border border-navy-900 px-6 py-3.5 text-body-sm font-medium text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Mobile image — below the copy, so the hero still leads with the positioning line. */}
      <div className="lg:hidden relative aspect-16/10">
        <img src={images.heroBackdrop} alt={alts.heroBackdrop} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/25" aria-hidden="true" />
        {heroFigure && (
          <img
            src={heroFigure}
            alt=""
            className="absolute bottom-0 right-4 h-[94%] w-auto object-contain object-bottom"
          />
        )}
      </div>

      {/* Bridge-arc seam into the band below — the shape device from the ADVMARC reference. */}
      <ConcaveCorner corner="bottom-left" size={96} fill="var(--color-base)" className="hidden sm:block z-10" />
    </section>
  );
}
