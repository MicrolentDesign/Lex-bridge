import { Link } from '../../lib/router';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

interface CtaBlockProps {
  variant?: 'A' | 'B' | 'C';
}

const ctaVariants = {
  A: {
    eyebrow: 'Start a Mandate',
    headline: 'Bring structure to the next international mandate.',
    body: 'Tell us the objective, jurisdictions, stakeholders and timing. We will help define an appropriate coordination model.',
    primaryLabel: 'Discuss a Mandate',
    secondaryLabel: 'Explore Our Services',
    secondaryHref: '/services',
  },
  B: {
    eyebrow: 'Cross-Border Scope',
    headline: 'Where does the matter need to move?',
    body: 'Share the jurisdictions involved, the nature of the mandate and your immediate priorities.',
    primaryLabel: 'Discuss This Service',
    secondaryLabel: 'View All Services',
    secondaryHref: '/services',
  },
  C: {
    eyebrow: 'Portfolio Visibility',
    headline: 'Better visibility starts with a clear picture of the portfolio.',
    body: 'Tell us how many matters, advisers and jurisdictions are currently in play. We will suggest a practical operating structure.',
    primaryLabel: 'Tell Us Where You Need Support',
    secondaryLabel: 'View Legal Operations',
    secondaryHref: '/services/legal-operations',
  },
};

export function CtaBlock({ variant = 'A' }: CtaBlockProps) {
  const content = ctaVariants[variant];

  return (
    <section className="py-24 bg-paper relative">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-card bg-navy-900 text-white p-8 md:p-14 lg:p-20 shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <SectionHeader eyebrow={content.eyebrow} title={content.headline} tone="dark" />
              <p className="text-body-m text-white/80 mt-6 mb-10 leading-relaxed">
                {content.body}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-btn bg-gold-500 px-7 py-3.5 text-body-sm font-medium text-navy-900 hover:bg-gold-400 transition-colors shadow-sm"
                >
                  {content.primaryLabel}
                </Link>
                <Link
                  href={content.secondaryHref}
                  className="inline-flex items-center justify-center rounded-btn border border-white/20 px-7 py-3.5 text-body-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {content.secondaryLabel}
                </Link>
              </div>
            </div>

            {/* Subtle background branding mark */}
            <div
              className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border border-gold-500/10 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
