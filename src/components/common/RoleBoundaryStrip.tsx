interface RoleBoundaryStripProps {
  overrideText?: string;
}

/**
 * C3 — Role boundary strip.
 * Appears immediately beneath the hero on all service pages and For Local Counsel.
 */
export function RoleBoundaryStrip({ overrideText }: RoleBoundaryStripProps) {
  return (
    <div className="bg-tint/75 border-y border-hairline py-3 px-6">
      <div className="mx-auto max-w-(--container-shell) flex items-center justify-center text-center">
        <p className="text-body-sm text-navy-900 font-medium leading-normal">
          <span className="inline-block mr-2 text-gold-500 font-semibold" aria-hidden="true">
            ◆
          </span>
          {overrideText ||
            'Lex Bridge coordinates the mandate. Jurisdiction-specific legal advice and representation are provided by independent qualified counsel. You retain control of every legal decision.'}
        </p>
      </div>
    </div>
  );
}
