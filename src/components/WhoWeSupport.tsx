import { Reveal } from './Reveal';
import { images, alts } from '../lib/images';

/**
 * Homepage §11 — client types from CD §4.
 *
 * Rendered as a compact chip list rather than the draft's paragraph, per PLAN.md §5.3:
 * the homepage restates its proposition across several bands, and this one earns its
 * place by being scannable, not by adding another block of prose.
 */
const audiences = [
  'Multinational corporations',
  'Regional groups',
  'Financial institutions',
  'Investors',
  'Family offices',
  'Professional-services firms',
  'In-house legal teams',
];

export function WhoWeSupport() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 overflow-hidden rounded-card order-2 lg:order-1">
            <Reveal>
              <img
                src={images.boardroom}
                alt={alts.boardroom}
                className="aspect-3/2 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-gold-500 shrink-0" aria-hidden="true" />
                <p className="text-eyebrow uppercase text-ink-60">Who we support</p>
              </div>
              <h2 className="text-display-l mb-6">
                Organisations that need reliable legal coordination outside their home jurisdiction.
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {audiences.map((a) => (
                  <li
                    key={a}
                    className="rounded-btn border border-hairline bg-paper px-4 py-2 text-body-sm text-ink"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
