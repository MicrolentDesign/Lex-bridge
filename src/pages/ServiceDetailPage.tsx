import { RoleBoundaryStrip } from '../components/common/RoleBoundaryStrip';
import { RelatedItems } from '../components/common/RelatedItems';
import { CtaBlock } from '../components/common/CtaBlock';
import { servicesData } from '../data/services';
import { Link } from '../lib/router';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-display-m text-navy-900 mb-4">Service Not Found</h1>
        <Link href="/services" className="text-gold-500 underline font-medium">
          Return to Services Overview &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      {/* 1. Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="flex items-center gap-2 text-legal uppercase text-gold-400 mb-4">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span>/</span>
            <span>{data.group}</span>
          </div>
          <h1 className="text-display-l text-white font-semibold max-w-4xl">{data.title}</h1>
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">{data.summary}</p>
        </div>
      </section>

      {/* 2. Role Boundary Strip (C3) */}
      <RoleBoundaryStrip overrideText={data.roleBoundaryOverride} />

      {/* 3. When Relevant & How Lex Bridge Supports */}
      <section className="py-20 border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* When relevant */}
            <div>
              <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Relevance</h2>
              <h3 className="text-display-s text-navy-900 font-semibold mb-6">
                When This Service Is Relevant
              </h3>
              <ul className="space-y-4">
                {data.whenRelevant.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-ink">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Lex Bridge supports */}
            <div>
              <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Support Model</h2>
              <h3 className="text-display-s text-navy-900 font-semibold mb-6">
                How Lex Bridge Supports the Mandate
              </h3>
              <ul className="space-y-4">
                {data.howLexBridgeSupports.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-ink">
                    <span className="text-navy-900 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deliverables & Client Value */}
      <section className="py-20 bg-base border-b border-hairline">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-eyebrow uppercase text-gold-500 mb-4">Artefacts</h2>
              <h3 className="text-display-s text-navy-900 font-semibold mb-6">
                Typical Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.typicalDeliverables.map((del, idx) => (
                  <div key={idx} className="p-4 rounded-card border border-hairline bg-paper shadow-2xs">
                    <span className="text-xs font-mono text-gold-500 block mb-1">Doc 0{idx + 1}</span>
                    <span className="text-body-sm font-semibold text-navy-900">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-card border border-hairline bg-navy-900 text-white">
                <h3 className="text-eyebrow uppercase text-gold-400 mb-3">Client Value</h3>
                <p className="text-body text-white/90 leading-relaxed">{data.clientValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Services (C5) */}
      <RelatedItems currentSlug={slug} />

      {/* 6. CTA Variant */}
      <CtaBlock variant={data.ctaVariant} />
    </div>
  );
}
