const points = [
  'Hong Kong headquarters',
  'Cross-border matter management',
  'Independent local counsel',
  'Consistent international reporting',
];

/**
 * C2 — four proof points. Copy verbatim from CD §4.
 *
 * Navy band, 2×2 on mobile (four points divide evenly), 4-up from md.
 * DESIGN-DIRECTION.md §7 recommended overlapping this onto the hero image the way
 * ref 5 does — deferred until hero imagery is decided, since there is currently no
 * image to overlap and the hero already carries the concave-corner seam device.
 */
export function CredibilityStrip() {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 py-10 md:py-12">
          {points.map((point) => (
            <div key={point} className="flex flex-col gap-3">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              <p className="text-body-sm text-white/85 leading-snug">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
