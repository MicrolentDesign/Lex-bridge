import { Link } from '../../lib/router';
import { servicesData } from '../../data/services';

interface RelatedItemsProps {
  currentSlug: string;
}

export function RelatedItems({ currentSlug }: RelatedItemsProps) {
  const currentService = servicesData[currentSlug];
  const allServices = Object.values(servicesData);
  
  // Pick 3 related services from the same or adjacent group excluding current
  const related = allServices
    .filter((s) => s.slug !== currentSlug)
    .sort((a, _b) => (a.group === currentService?.group ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="bg-base border-t border-hairline py-16 px-6 md:px-10">
      <div className="mx-auto max-w-(--container-shell)">
        <h3 className="text-eyebrow uppercase text-gold-500 mb-8">Related Coordination Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group block rounded-card border border-hairline bg-paper p-6 hover:border-gold-500/50 hover:shadow-lg transition-all"
            >
              <p className="text-legal uppercase text-ink-60 mb-2">{item.group}</p>
              <h4 className="text-display-s text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-body-sm text-ink-60 line-clamp-3 mb-4">{item.summary}</p>
              <span className="text-body-sm font-medium text-navy-900 group-hover:text-gold-500 transition-colors flex items-center gap-1">
                Explore service &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
