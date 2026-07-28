import { RelatedItems } from '../components/common/RelatedItems';
import { CtaBlock } from '../components/common/CtaBlock';
import { insightsData } from '../data/insights';
import { Link } from '../lib/router';

interface InsightArticlePageProps {
  slug: string;
}

export function InsightArticlePage({ slug }: InsightArticlePageProps) {
  const article = insightsData[slug];

  if (!article) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-display-m text-navy-900 mb-4">Article Not Found</h1>
        <Link href="/insights" className="text-gold-500 underline font-medium">
          Return to Insights Index &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      {/* Header */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="flex items-center gap-2 text-legal uppercase text-gold-400 mb-4">
            <Link href="/insights" className="hover:underline">
              Insights
            </Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>

          <h1 className="text-display-l text-white font-semibold mb-6">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-body-sm text-white/70 border-t border-white/15 pt-6">
            <div>
              <span className="text-white font-medium block">{article.author.name}</span>
              <span className="text-xs text-white/60">{article.author.role}</span>
            </div>
            <span className="hidden sm:inline h-4 w-px bg-white/20" aria-hidden="true" />
            <div>
              <span className="text-xs text-white/60 block">Published</span>
              <span className="text-white font-medium">{article.date}</span>
            </div>
            <span className="hidden sm:inline h-4 w-px bg-white/20" aria-hidden="true" />
            <div>
              <span className="text-xs text-white/60 block">Read Time</span>
              <span className="text-white font-medium">{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          {/* Author Credential Badge */}
          {article.author.credential && (
            <div className="p-4 rounded-card bg-tint/60 border border-hairline/60 mb-10 flex items-center gap-3">
              <span className="text-gold-500 font-bold">◆</span>
              <p className="text-xs text-navy-900 font-medium">
                <span className="font-semibold">Author Credential:</span> {article.author.credential}
              </p>
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-6 text-body text-ink leading-relaxed">
            {article.content.map((p, idx) => (
              <React.Fragment key={idx}>
                <p>{p}</p>
                {/* Pull Quote placement at mid point */}
                {idx === 2 && article.pullQuote && (
                  <blockquote className="my-10 p-8 rounded-card bg-navy-900 text-white border-l-4 border-gold-500 shadow-md">
                    <p className="text-display-s text-white italic font-serif leading-snug">
                      "{article.pullQuote}"
                    </p>
                  </blockquote>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-hairline flex items-center justify-between">
            <Link href="/insights" className="text-body-sm font-medium text-navy-900 hover:text-gold-500">
              &larr; Back to Insights
            </Link>
            <Link href="/contact" className="text-body-sm font-medium text-navy-900 hover:text-gold-500">
              Discuss this topic with Lex Bridge &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedItems currentSlug={slug} />
      <CtaBlock variant="B" />
    </div>
  );
}

// React import needed for React.Fragment
import React from 'react';
