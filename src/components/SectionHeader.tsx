/**
 * One eyebrow + title treatment for every section, so the gold rule, tracking and
 * spacing can't drift between them. The model band was missing both the rule and a
 * title, which broke the pattern the other sections had already set.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = 'light',
  className = '',
}: {
  eyebrow: string;
  title?: string;
  intro?: string;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const eyebrowColor = tone === 'dark' ? 'text-gold-500' : 'text-ink-60';
  const titleColor = tone === 'dark' ? 'text-white' : '';
  const introColor = tone === 'dark' ? 'text-white/75' : 'text-ink';

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px w-6 bg-gold-500 shrink-0" aria-hidden="true" />
        <p className={`text-eyebrow uppercase ${eyebrowColor}`}>{eyebrow}</p>
      </div>
      {title && <h2 className={`text-display-l max-w-3xl ${titleColor}`}>{title}</h2>}
      {intro && <p className={`text-body mt-5 max-w-2xl ${introColor}`}>{intro}</p>}
    </div>
  );
}
