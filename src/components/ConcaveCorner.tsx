type Corner = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

const orientation: Record<Corner, string> = {
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0 -scale-x-100',
  'top-left': 'top-0 left-0 -scale-y-100',
  'top-right': 'top-0 right-0 -scale-x-100 -scale-y-100',
};

/**
 * A quarter-circle bite carved from one corner of its (relatively positioned) parent —
 * the hero/model-band transition device from DESIGN-DIRECTION.md §7.
 *
 * One path, drawn for the bottom-left case, reused for the other three via CSS mirroring.
 * `fill` should match the background of whatever sits on the other side of the seam —
 * the illusion only reads correctly when it does.
 */
export function ConcaveCorner({
  corner,
  size = 96,
  fill = 'var(--color-base)',
  className = '',
}: {
  corner: Corner;
  size?: number;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${orientation[corner]} ${className}`}
    >
      <path d="M0,0 L0,100 L100,100 A100,100 0 0 1 0,0 Z" fill={fill} />
    </svg>
  );
}
