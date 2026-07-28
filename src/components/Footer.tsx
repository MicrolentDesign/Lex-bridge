import logo from '../assets/logo.png';

/**
 * C7 — structure per v2.0 §3.5, ordered logo + corporate summary first, then the four
 * link columns, then the status statement and legal bar.
 *
 * Mobile keeps the four columns as a 2×2 grid rather than a single stack — four stacked
 * columns pushed the legal bar a long way down for no gain.
 *
 * The status statement sits above the legal bar at readable size, NOT 10px grey —
 * v2.0 §1.3 Fix 3 promotes it out of the footer fine print, and this is one of its three
 * required placements sitewide (PLAN.md §5.4). Wording is verbatim and must stay
 * identical across all three.
 *
 * Contact details and the BR number are blocked on the client (PLAN.md §10) and are
 * marked as visible placeholders rather than invented values — a plausible-looking fake
 * address on a professional-status-sensitive site is worse than an obvious gap.
 */
const columns = [
  {
    title: 'Lex Bridge',
    links: [
      { label: 'About', href: '/about' },
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'Global Reach', href: '/global-reach' },
      { label: 'Sectors', href: '/sectors' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Legal Project Management', href: '/services/legal-project-management' },
      { label: 'Local Counsel Selection', href: '/services/local-counsel' },
      { label: 'Multi-Jurisdiction Programmes', href: '/services/multi-jurisdiction' },
      { label: 'All Services →', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'FAQ', href: '/faq' },
      { label: 'For Local Counsel', href: '/for-local-counsel' },
      { label: 'Professional Status', href: '/professional-status' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Notice', href: '/privacy' },
  { label: 'Website Terms', href: '/terms' },
  { label: 'Cookie Notice', href: '/cookies' },
  { label: 'Professional Status & Disclaimer', href: '/professional-status' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
        {/* Logo + corporate summary. Copy verbatim from CD §3 "CORPORATE SUMMARY". */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-14 md:py-16">
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt="Lex Bridge Advisory Group"
              width={1275}
              height={239}
              className="h-10 w-auto brightness-0 invert opacity-95"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-body text-white/75 max-w-2xl">
              Lex Bridge is a Hong Kong-based international professional-services consultancy specialising in the
              management and coordination of cross-border legal work. We connect clients with independent qualified
              local counsel and manage complex mandates through one clear point of coordination.
            </p>
          </div>
        </div>

        {/* Four link columns — 2×2 on mobile, 4-up from lg. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8 border-t border-white/15 py-12 md:py-14">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow uppercase text-gold-500 mb-4">{col.title}</p>
              {/* Vertical padding clears the 44px tap-target floor (DESIGN-DIRECTION.md §6). */}
              <ul className="flex flex-col -my-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-3 text-body-sm text-white/75 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-eyebrow uppercase text-gold-500 mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5 text-body-sm text-white/75">
              <li>Hong Kong</li>
              <li className="text-white/40">[Address — to confirm]</li>
              <li className="text-white/40">[Email — to confirm]</li>
              <li className="text-white/40">[Phone — to confirm]</li>
              <li className="-mb-3 mt-0.5">
                <a href="/contact" className="block py-3 text-white/75 hover:text-white transition-colors">
                  Contact Lex Bridge →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Status statement — readable size, every page. v2.0 §1.3 Fix 3. */}
        <div className="border-t border-white/15 py-8">
          <p className="text-body-sm text-white/80 max-w-4xl">
            Lex Bridge is not a law firm. Jurisdiction-specific legal advice and representation are provided by
            independent qualified counsel.
          </p>
        </div>

        <div className="border-t border-white/15 py-8 flex flex-col gap-4">
          <p className="text-legal text-white/50">
            Lex Bridge Advisory Group · Registered in Hong Kong, BR No.{' '}
            <span className="text-white/35">[to confirm]</span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 -my-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-3.5 text-legal text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-legal text-white/50">
            © {new Date().getFullYear()} Lex Bridge Advisory Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
