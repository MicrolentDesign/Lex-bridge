import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { images, alts } from '../lib/images';

/** Seven regions per CD §8. */
const regions = [
  'Asia-Pacific',
  'Greater China',
  'Middle East',
  'Europe',
  'Africa',
  'North America',
  'Latin America & the Caribbean',
];

/**
 * Homepage §10 — copy from CD §4, region list from CD §8.
 *
 * ABSOLUTE CONSTRAINT (v2.0 T6, PLAN.md §8): no office pins, and no map that could
 * imply owned offices. A named region index is used instead — it is the one visual on
 * the site where a decorative choice could become a factual misrepresentation.
 */
export function GlobalReachBand() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <img
        src={images.cityNight}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="International reach"
                title="Global reach without unnecessary complexity."
                tone="dark"
              />
              <p className="text-body text-white/75 mt-6">
                Headquartered in Hong Kong, Lex Bridge coordinates with independent counsel and professional advisers
                across a broad range of jurisdictions. Our model allows each mandate to be built around the
                client&rsquo;s actual geographic, sector and technical requirements.
              </p>
              <a
                href="/global-reach"
                className="mt-8 inline-flex items-center gap-2.5 py-3 -mb-3 text-body-sm font-medium text-white hover:text-gold-500 transition-colors"
              >
                Explore our global reach
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                  <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <ul className="grid sm:grid-cols-2 gap-x-8">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="flex items-center gap-3 border-b border-white/15 py-4 text-body text-white/90"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                    {region}
                  </li>
                ))}
              </ul>
              <p className="text-body-sm text-white/55 mt-8 max-w-xl">
                Jurisdictional coverage and counsel availability are subject to the nature of the matter, conflict
                checks, professional rules and the client&rsquo;s approval. Local counsel remain independent and
                responsible for the legal services they are engaged to provide.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <span className="sr-only">{alts.cityNight}</span>
    </section>
  );
}
