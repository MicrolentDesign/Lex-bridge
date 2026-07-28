/**
 * Central image manifest — every photograph on the site resolves through here so it
 * can be swapped in one place.
 *
 * STATUS: placeholders. These are Unsplash CDN hotlinks for design purposes. Before
 * launch they must be replaced with licensed, locally-hosted, correctly-sized assets
 * (PLAN.md §8 wants no avoidable third-party dependencies, and CD §15's photography
 * brief requires imagery that doesn't imply photographed individuals are Lex Bridge
 * staff unless releases exist).
 *
 * CD §15 bans gavels, courtrooms, scales of justice, handshakes and generic lawyer
 * portraits. Selections below follow that: architecture, infrastructure, international
 * movement, abstract connection.
 */

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

/**
 * HERO FIGURE — the cut-out figure standing at the right of the hero.
 *
 * To use the supplied Lady Justice PNG: save it to `src/assets/hero-figure.png`,
 * then set `heroFigure` to the imported asset instead of this URL. Nothing else changes.
 *
 * Noted once for the record: that image is the exact imagery CD §15 rules out, and it
 * sits beside the "we are not a law firm" line. The slot works with either choice.
 */
export const heroFigure: string | null = null;

export const images = {
  heroBackdrop: unsplash('1518599807935-37015b9cefcb', 1600),
  bridge: unsplash('1573029682498-a63c394b1afe', 1200),
  cityNight: unsplash('1603793510575-a8cf24361baa', 1200),
  boardroom: unsplash('1606836591695-4d58a73eba1e', 1200),
  towers: unsplash('1512144366275-b3626ac3a7c0', 1200),
  skyline: unsplash('1620015092538-e33c665fc181', 1200),
} as const;

/** Alt text lives with the image so it can't be forgotten at the call site. */
export const alts = {
  heroBackdrop: 'Hong Kong harbour and high-rise skyline at dusk',
  bridge: 'Underside of a concrete bridge span',
  cityNight: 'Aerial view of a dense city at night',
  boardroom: 'Professionals seated in a modern meeting room',
  towers: 'Dark high-rise office towers seen from below',
  skyline: 'International city skyline',
} as const;
