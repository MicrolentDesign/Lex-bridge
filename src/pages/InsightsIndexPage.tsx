import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CtaBlock } from '../components/common/CtaBlock';
import { insightsData } from '../data/insights';
import { Link } from '../lib/router';

const categories = [
  'All',
  'Cross-Border Matter Management',
  'Local Counsel Strategy',
  'Multi-Jurisdiction Programmes',
  'Market Entry',
  'Legal Operations',
  'Sector Perspectives',
];

export function InsightsIndexPage() {
  const [selectedCat, setSelectedCat] = useState('All');

  const articles = Object.values(insightsData);
  const filtered = selectedCat === 'All' ? articles : articles.filter((a) => a.category === selectedCat);

  const featured = articles[0];

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <SectionHeader
            eyebrow="Insights"
            title="Practical thinking on managing legal work across borders."
            tone="dark"
          />
          <p className="text-body-m text-white/80 max-w-3xl mt-6 leading-relaxed">
            Perspectives on legal operations, foreign counsel oversight, and spend control for international legal leaders.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-base border-b border-hairline sticky top-16 z-30">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-btn text-body-sm font-medium transition-colors ${
                  selectedCat === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-paper border border-hairline text-ink hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 space-y-16">
          {/* Featured Article */}
          {selectedCat === 'All' && featured && (
            <div>
              <span className="text-eyebrow uppercase text-gold-500 block mb-4">Featured Insight</span>
              <Link
                href={`/insights/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-card border border-hairline bg-paper p-8 lg:p-12 hover:border-gold-500/50 hover:shadow-xl transition-all"
              >
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-legal text-ink-60 mb-3">
                      <span className="text-navy-900 font-semibold">{featured.category}</span>
                      <span>•</span>
                      <span>{featured.date}</span>
                      <span>•</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <h2 className="text-display-m text-navy-900 font-semibold mb-4 group-hover:text-gold-500 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-body text-ink-60 leading-relaxed mb-6">{featured.summary}</p>
                  </div>
                  <span className="text-body-sm font-medium text-navy-900 group-hover:text-gold-500 flex items-center gap-1">
                    Read full article &rarr;
                  </span>
                </div>
                <div className="lg:col-span-4 bg-tint/60 rounded-card p-6 border border-hairline/50 flex flex-col justify-center">
                  <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider mb-2">Author</p>
                  <p className="text-body-sm font-bold text-navy-900">{featured.author.name}</p>
                  <p className="text-xs text-ink-60 mt-1">{featured.author.role}</p>
                  {featured.author.credential && (
                    <p className="text-xs text-ink-60/80 italic mt-2 pt-2 border-t border-hairline/50">
                      {featured.author.credential}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          )}

          {/* Article Grid */}
          <div>
            <span className="text-eyebrow uppercase text-navy-900 block mb-6">Recent Articles</span>
            {filtered.length === 0 ? (
              <div className="text-center py-16 rounded-card border border-hairline bg-base">
                <p className="text-body text-ink-60">No insights match the selected filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="group flex flex-col justify-between rounded-card border border-hairline bg-paper p-8 hover:border-gold-500/50 hover:shadow-lg transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-ink-60 mb-3">
                        <span className="text-gold-500 font-semibold">{item.category}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="text-display-s text-navy-900 font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-ink-60 line-clamp-3 mb-6">{item.summary}</p>
                    </div>
                    <div className="border-t border-hairline pt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-navy-900">{item.author.name}</span>
                      <span className="text-xs font-medium text-gold-500">Read &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBlock variant="B" />
    </div>
  );
}
