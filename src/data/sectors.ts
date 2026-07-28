// Data for the 8 capability sectors (v2.0 T7).

export interface SectorItem {
  id: string;
  title: string;
  summary: string;
  commonMandates: string[];
}

export const sectorsData: SectorItem[] = [
  {
    id: 'consumer-retail',
    title: 'Consumer, Retail & Luxury',
    summary: 'International expansion, brand licensing, franchise networks, and multi-country supply chain coordination.',
    commonMandates: [
      'Cross-border distribution and franchising agreements across APAC and EMEA.',
      'Brand enforcement and IP protection across target consumer markets.',
      'Local consumer protection regulatory compliance reviews.',
    ],
  },
  {
    id: 'technology-digital',
    title: 'Technology, Media & Digital',
    summary: 'Cross-border data privacy management, software licensing, international talent mobility, and regional entity setup.',
    commonMandates: [
      'Multi-jurisdictional GDPR and local data transfer compliance audits.',
      'International SaaS licensing and commercial contract harmonization.',
      'Regional tech hub entity creation and cross-border IP assignment.',
    ],
  },
  {
    id: 'financial-services',
    title: 'Financial Services & Investment',
    summary: 'Cross-border fund structuring, fintech licensing, regulatory enforcement defense, and foreign direct investment.',
    commonMandates: [
      'Coordination of multi-country fund distribution legal approvals.',
      'Fintech licensing application management across target markets.',
      'Regulatory compliance investigations involving regional monetary authorities.',
    ],
  },
  {
    id: 'aviation-logistics',
    title: 'Aviation, Transport & Logistics',
    summary: 'Cross-border asset leasing, customs regulatory compliance, logistics joint ventures, and international shipping disputes.',
    commonMandates: [
      'Multi-jurisdictional fleet financing and aircraft registration.',
      'Cross-border freight forwarder supply chain contract reviews.',
      'International maritime and logistics dispute management.',
    ],
  },
  {
    id: 'hospitality-real-estate',
    title: 'Hospitality, Real Estate & Construction',
    summary: 'Hotel management agreements, cross-border property acquisitions, construction arbitration, and joint venture structures.',
    commonMandates: [
      'International hotel operator management agreement negotiations.',
      'Cross-border commercial real estate portfolio diligence.',
      'Multi-forum construction arbitration legal team coordination.',
    ],
  },
  {
    id: 'energy-infrastructure',
    title: 'Energy, Infrastructure & Industrial',
    summary: 'Renewable energy project development, cross-border joint ventures, environmental compliance, and concession agreements.',
    commonMandates: [
      'Multi-country solar and wind project legal coordination.',
      'Cross-border industrial concession agreement reviews.',
      'International joint venture restructuring for infrastructure assets.',
    ],
  },
  {
    id: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    summary: 'Cross-border clinical trial coordination, medical device distribution licensing, regulatory approvals, and IP transfers.',
    commonMandates: [
      'Multi-territory pharma licensing and distribution agreement drafting.',
      'International clinical trial legal agreement management.',
      'Local medical regulator compliance inquiry coordination.',
    ],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    summary: 'Management consultancies, accounting networks, and executive search firms expanding or operating internationally.',
    commonMandates: [
      'International network member firm agreement structuring.',
      'Cross-border professional liability dispute coordination.',
      'Multi-country partnership governance and mobility compliance.',
    ],
  },
];
