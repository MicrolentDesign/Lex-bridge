import { SectionHeader } from '../components/SectionHeader';
import { CredibilityStrip } from '../components/CredibilityStrip';
import { CtaBlock } from '../components/common/CtaBlock';
import { Link } from '../lib/router';
import { servicesData } from '../data/services';

export function ServicesOverviewPage() {
  const allServices = Object.values(servicesData);
  const coreServices = allServices.filter((s) => s.group === 'Core Coordination');
  const matterServices = allServices.filter((s) => s.group === 'Matter Coordination');
  const programmeServices = allServices.filter((s) => s.group === 'Programme Services');

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Services Overview"
            title="International legal work, managed as one coordinated programme."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Ten specialized coordination services organized across core mandate management, specific matter types, and ongoing portfolio operations.
          </p>
        </div>
      </section>

      <CredibilityStrip />

      {/* Group A: Core Coordination */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="mb-12">
            <span className="text-eyebrow uppercase text-gold-500 block mb-2">Group A</span>
            <h2 className="text-display-m text-navy-900 font-semibold">Core Coordination Services</h2>
            <p className="text-body text-ink-60 mt-2">The foundation of every international mandate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col justify-between rounded-card border border-hairline bg-paper p-8 hover:border-gold-500/50 hover:shadow-lg transition-all"
              >
                <div>
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed mb-6">{s.summary}</p>
                </div>
                <span className="text-body-sm font-medium text-navy-900 group-hover:text-gold-500 transition-colors flex items-center gap-1">
                  Explore this service &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Group B: Matter Coordination */}
      <section className="py-20 bg-base border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="mb-12">
            <span className="text-eyebrow uppercase text-gold-500 block mb-2">Group B</span>
            <h2 className="text-display-m text-navy-900 font-semibold">Matter Coordination Services</h2>
            <p className="text-body text-ink-60 mt-2">Coordination shaped around the specific nature of the work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matterServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col justify-between rounded-card border border-hairline bg-paper p-8 hover:border-gold-500/50 hover:shadow-lg transition-all"
              >
                <div>
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed mb-6">{s.summary}</p>
                </div>
                <span className="text-body-sm font-medium text-navy-900 group-hover:text-gold-500 transition-colors flex items-center gap-1">
                  Explore this service &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Group C: Programme Services */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="mb-12">
            <span className="text-eyebrow uppercase text-gold-500 block mb-2">Group C</span>
            <h2 className="text-display-m text-navy-900 font-semibold">Programme Services</h2>
            <p className="text-body text-ink-60 mt-2">Support across an entire portfolio rather than a single matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmeServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col justify-between rounded-card border border-hairline bg-paper p-8 hover:border-gold-500/50 hover:shadow-lg transition-all"
              >
                <div>
                  <h3 className="text-display-s text-navy-900 font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-body-sm text-ink-60 leading-relaxed mb-6">{s.summary}</p>
                </div>
                <span className="text-body-sm font-medium text-navy-900 group-hover:text-gold-500 transition-colors flex items-center gap-1">
                  Explore this service &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure prompt */}
      <section className="py-12 bg-tint/60 text-center border-b border-hairline">
        <div className="mx-auto max-w-xl px-6">
          <h3 className="text-display-s text-navy-900 font-semibold mb-2">Not sure which applies?</h3>
          <p className="text-body-sm text-ink-60 mb-4">
            Tell us your objective and the jurisdictions involved. We will suggest an optimal coordination structure.
          </p>
          <div className="flex justify-center gap-6 text-body-sm font-medium">
            <Link href="/faq" className="text-navy-900 hover:text-gold-500 underline">
              Browse FAQ &rarr;
            </Link>
            <Link href="/contact" className="text-navy-900 hover:text-gold-500 underline">
              Contact us &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock variant="A" />
    </div>
  );
}
