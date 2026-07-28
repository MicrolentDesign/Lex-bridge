import { Reveal } from './Reveal';

/**
 * Homepage §6 — four core service cards plus a fifth "view all" tile. Copy from CD §4.
 *
 * Card 3 is titled "Multi-Jurisdiction Programmes", not the draft's "Multi-Jurisdiction
 * Coordination" — one name per service across nav, homepage and service page
 * (PLAN.md §3, conflict 1).
 *
 * Card 4 is a composite of three separate service pages, so it cannot link to "its"
 * page. It targets the Group B anchor on /services instead, which preserves the locked
 * four-card layout and lands the visitor on all five Matter Coordination services
 * (PLAN.md §3, conflict 2).
 */
const services = [
  {
    title: 'International Legal Project Management',
    body: 'A structured operating layer for complex legal matters, with clear scopes, workstreams, timelines, responsibilities and reporting.',
    href: '/services/legal-project-management',
  },
  {
    title: 'Local Counsel Selection & Engagement',
    body: 'Targeted identification and assessment of counsel based on jurisdiction, sector, matter experience, responsiveness, conflicts and commercial fit.',
    href: '/services/local-counsel',
  },
  {
    title: 'Multi-Jurisdiction Programmes',
    body: 'One coordinated programme for mandates spanning several countries, with common instructions, local adaptations and consolidated outputs.',
    href: '/services/multi-jurisdiction',
  },
  {
    title: 'Disputes, Transactions & Regulatory Projects',
    body: 'Practical coordination for contentious and non-contentious matters, from evidence and document flows to stakeholder alignment and progress control.',
    href: '/services#matter-coordination',
  },
];

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CoreServices() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            <p className="text-eyebrow uppercase text-ink-60">Core services</p>
          </div>
          <h2 className="text-display-l max-w-2xl mb-12 md:mb-16">
            A service model built around the mandate.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.href} delay={i * 70}>
              <a
                href={service.href}
                className="group flex h-full flex-col rounded-card border border-hairline bg-paper p-7 transition-colors hover:border-navy-900"
              >
                <h3 className="text-display-m mb-4">{service.title}</h3>
                <p className="text-body-sm text-ink mb-8">{service.body}</p>
                <span className="mt-auto inline-flex items-center gap-2.5 text-body-sm font-medium text-navy-900">
                  Explore this service
                  <span className="transition-transform duration-300 ease-(--ease-brand) group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}

          {/* Spans the row's remaining two columns: four cards + one tile in a 3-up grid
              would otherwise leave a visible hole in the second row. */}
          <Reveal delay={services.length * 70} className="lg:col-span-2">
            <a
              href="/services"
              className="group flex h-full flex-col justify-between rounded-card border border-navy-900 bg-navy-900 p-7 transition-colors hover:bg-navy-700"
            >
              <h3 className="text-display-m text-white">Ten coordination services across three groups.</h3>
              <span className="mt-8 inline-flex items-center gap-2.5 text-body-sm font-medium text-white">
                View all services
                <span className="transition-transform duration-300 ease-(--ease-brand) group-hover:translate-x-1">
                  <Arrow />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
