// v2.0 spec §3.1 primary nav, §3.2 services mega-menu.

export const primaryNav = [
  { label: 'About', href: '/about', hasMegaMenu: false },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Global Reach', href: '/global-reach', hasMegaMenu: false },
  { label: 'How We Work', href: '/how-we-work', hasMegaMenu: false },
  { label: 'Insights', href: '/insights', hasMegaMenu: false },
  { label: 'Contact', href: '/contact', hasMegaMenu: false },
] as const;

export const serviceGroups = [
  {
    title: 'Core Coordination',
    items: [
      { label: 'International Legal Project Management', href: '/services/legal-project-management' },
      { label: 'Local Counsel Selection & Engagement', href: '/services/local-counsel' },
      { label: 'Multi-Jurisdiction Programmes', href: '/services/multi-jurisdiction' },
    ],
  },
  {
    title: 'Matter Coordination',
    items: [
      { label: 'Disputes & Investigations', href: '/services/disputes-investigations' },
      { label: 'Transactions & Corporate Projects', href: '/services/transactions-corporate' },
      { label: 'Market Entry & Regulatory', href: '/services/market-entry-regulatory' },
      { label: 'IP Portfolio Coordination', href: '/services/ip-portfolio' },
      { label: 'Employment & Mobility', href: '/services/employment-mobility' },
    ],
  },
  {
    title: 'Programme Services',
    items: [
      { label: 'Legal Operations & Spend Management', href: '/services/legal-operations' },
      { label: 'Complementary Professional Services', href: '/services/professional-services' },
    ],
  },
] as const;

export const serviceMenuFooterLinks = [
  { label: 'Sectors', href: '/sectors' },
  { label: 'View all services', href: '/services' },
] as const;

export const utilityLink = { label: 'For Local Counsel', href: '/for-local-counsel' };
export const primaryCta = { label: 'Discuss a Mandate', href: '/contact' };
