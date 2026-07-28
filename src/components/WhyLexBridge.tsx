import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { images, alts } from '../lib/images';

/** Homepage §7 — six points, copy verbatim from CD §4. */
const points = [
  {
    title: 'One point of coordination',
    body: 'A central interface for the client, local counsel and other advisers.',
  },
  {
    title: 'Counsel selected for the mandate',
    body: 'A considered process based on the work required, not a one-size-fits-all referral.',
  },
  {
    title: 'Consistent project discipline',
    body: 'Defined workstreams, ownership, deadlines, dependencies and escalation routes.',
  },
  {
    title: 'Clear international reporting',
    body: 'Consolidated updates that turn local developments into an accessible global picture.',
  },
  {
    title: 'Commercial awareness',
    body: "Legal work managed in the context of the client's wider business objective, timing and risk appetite.",
  },
  {
    title: 'Flexible engagement',
    body: 'Support for a single instruction, a regional programme or an ongoing international portfolio.',
  },
];

export function WhyLexBridge() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <SectionHeader
                eyebrow="Why Lex Bridge"
                title="Built for organisations that need visibility across borders."
              />
              <div className="mt-8 overflow-hidden rounded-card">
                <img
                  src={images.towers}
                  alt={alts.towers}
                  className="aspect-4/3 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid sm:grid-cols-2 gap-x-8">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 60}>
                  <div className="border-t border-hairline py-6">
                    <dt className="text-display-m mb-3">{point.title}</dt>
                    <dd className="text-body-sm text-ink">{point.body}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
