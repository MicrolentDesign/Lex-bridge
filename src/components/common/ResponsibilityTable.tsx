export function ResponsibilityTable() {
  return (
    <div className="rounded-card border border-hairline overflow-hidden bg-paper shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-hairline">
        {/* Column 1: Lex Bridge */}
        <div className="p-6 md:p-8 bg-paper">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-3 w-3 rounded-full bg-gold-500" aria-hidden="true" />
            <h3 className="text-display-s text-navy-900 font-semibold">What Lex Bridge Manages</h3>
          </div>
          <ul className="space-y-3.5 text-body-sm text-ink">
            <li className="flex items-start gap-2.5">
              <span className="text-gold-500 font-bold">✓</span>
              <span>Central project management, timelines, and multi-country roadmaps.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold-500 font-bold">✓</span>
              <span>Independent local counsel vetting, selection, and engagement logistics.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold-500 font-bold">✓</span>
              <span>Consolidation of multi-jurisdictional updates into a single executive dashboard.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold-500 font-bold">✓</span>
              <span>Fee estimate tracking, billing guideline enforcement, and spend control.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold-500 font-bold">✓</span>
              <span>Translation of client commercial objectives into actionable counsel briefs.</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Independent Counsel */}
        <div className="p-6 md:p-8 bg-tint/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-3 w-3 rounded-full bg-navy-900" aria-hidden="true" />
            <h3 className="text-display-s text-navy-900 font-semibold">What Independent Counsel Provides</h3>
          </div>
          <ul className="space-y-3.5 text-body-sm text-ink">
            <li className="flex items-start gap-2.5">
              <span className="text-navy-900 font-bold">✓</span>
              <span>Jurisdiction-specific legal opinions, advice, and regulatory analysis.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-navy-900 font-bold">✓</span>
              <span>Court advocacy, formal filings, and local regulatory representation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-navy-900 font-bold">✓</span>
              <span>Direct professional liability, duty of care, and legal privilege.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-navy-900 font-bold">✓</span>
              <span>Formal legal document drafting and localized contract execution.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-navy-900 font-bold">✓</span>
              <span>Local bar compliance and regulatory license maintenance.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-navy-900 text-white p-4 text-center text-body-sm">
        <p className="font-medium text-white/90">
          <span className="text-gold-400 font-semibold">The Client Decides:</span> You retain final authority over counsel selection, legal strategy, and all substantive decisions.
        </p>
      </div>
    </div>
  );
}
