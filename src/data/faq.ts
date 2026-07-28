// Data for FAQ page (v2.0 T9 - 17 questions in 3 categories).

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Core Model & Operations' | 'Counsel Engagement & Oversight' | 'Commercial & Mandate Delivery';
}

export const faqData: FaqItem[] = [
  // Category 1: Core Model & Operations
  {
    id: 'q1',
    category: 'Core Model & Operations',
    question: 'Is Lex Bridge a law firm?',
    answer: 'No. Lex Bridge Advisory Group is an international legal management and coordination consultancy. We are not a law firm, we do not practice law, and we do not provide formal legal advice or court representation. Jurisdiction-specific legal advice and formal legal services are delivered exclusively by independent, qualified local counsel.',
  },
  {
    id: 'q2',
    category: 'Core Model & Operations',
    question: 'How does Lex Bridge differ from an international law firm?',
    answer: 'International law firms operate as multi-office legal practices where local lawyers give legal advice directly under their firm umbrella. Lex Bridge acts as your client-side coordination partner: we help you select, instruct, and manage the best independent local lawyers in each market, consolidate their reporting into one executive view, and manage total project spend.',
  },
  {
    id: 'q3',
    category: 'Core Model & Operations',
    question: 'Where is Lex Bridge headquartered?',
    answer: 'Lex Bridge is headquartered in Hong Kong, serving international corporate clients, family offices, and institutions with cross-border operations globally.',
  },
  {
    id: 'q4',
    category: 'Core Model & Operations',
    question: 'What types of organizations do you support?',
    answer: 'We support multinational corporations, regional corporate groups, private equity funds, family offices, growth-stage international companies, and internal General Counsel departments managing multi-jurisdiction matters.',
  },
  {
    id: 'q5',
    category: 'Core Model & Operations',
    question: 'Can Lex Bridge work alongside our existing internal legal team?',
    answer: 'Yes. In fact, most of our mandates are executed in close partnership with internal General Counsel or Chief Legal Officers. We function as a dedicated international extension of your internal legal operations.',
  },
  {
    id: 'q6',
    category: 'Core Model & Operations',
    question: 'How do you preserve client confidentiality?',
    answer: 'Confidentiality is fundamental to our operating model. We enforce strict non-disclosure obligations across all client engagements and ensure formal legal privilege is preserved through appropriate local counsel engagement structures.',
  },

  // Category 2: Counsel Engagement & Oversight
  {
    id: 'q7',
    category: 'Counsel Engagement & Oversight',
    question: 'Who selects the local law firms for a mandate?',
    answer: 'Lex Bridge conducts independent vetting and presents recommended options based on technical expertise, local regulatory track record, and cost transparency. The client retains full authority over final counsel approval and appointment.',
  },
  {
    id: 'q8',
    category: 'Counsel Engagement & Oversight',
    question: 'Does the client engage local counsel directly, or does Lex Bridge?',
    answer: 'Both engagement structures are accommodated based on client preference. The client may engage independent local counsel directly with Lex Bridge managing coordination, or Lex Bridge can manage engagement logistics under a centralized instruction framework.',
  },
  {
    id: 'q9',
    category: 'Counsel Engagement & Oversight',
    question: 'Can we use our existing panel law firms in certain markets?',
    answer: 'Absolutely. We seamlessly integrate your existing preferred local law firms into the coordination framework alongside new independent specialists engaged for specific regional requirements.',
  },
  {
    id: 'q10',
    category: 'Counsel Engagement & Oversight',
    question: 'How do you ensure independent local counsel quality?',
    answer: 'We evaluate counsel based on objective criteria: verified subject-matter experience, local regulatory reputation, responsiveness, international reporting fluency, and transparent fee structures.',
  },
  {
    id: 'q11',
    category: 'Counsel Engagement & Oversight',
    question: 'Who makes the final legal decisions on a matter?',
    answer: 'You do. Lex Bridge manages timelines, deliverables, budgets, and reporting syntheses. Independent qualified local counsel provides formal legal advice. You retain complete authority over all substantive legal and business decisions.',
  },
  {
    id: 'q12',
    category: 'Counsel Engagement & Oversight',
    question: 'How does Lex Bridge handle potential conflicts of interest?',
    answer: 'Because we are independent and do not represent opposing parties in court, we are free from traditional law firm commercial conflicts. Local counsel engaged for your matter are vetted for conflicts prior to appointment.',
  },

  // Category 3: Commercial & Mandate Delivery
  {
    id: 'q13',
    category: 'Commercial & Mandate Delivery',
    question: 'How are Lex Bridge services structured and billed?',
    answer: 'We offer flexible commercial arrangements tailored to the mandate: fixed management fees for project-based initiatives, capped monthly retainers for ongoing portfolio management, or milestone-based structures for transactional projects.',
  },
  {
    id: 'q14',
    category: 'Commercial & Mandate Delivery',
    question: 'How do you control external local counsel legal spend?',
    answer: 'We establish upfront fee caps, enforce standardized billing guidelines, negotiate competitive local rates, review itemized counsel invoices, and prevent administrative scope creep.',
  },
  {
    id: 'q15',
    category: 'Commercial & Mandate Delivery',
    question: 'What reporting will leadership receive during a multi-country project?',
    answer: 'You receive structured, executive-ready reporting: a single weekly dashboard summarizing progress across all jurisdictions, clear action item matrices, updated timeline milestone tracking, and consolidated budget ledgers.',
  },
  {
    id: 'q16',
    category: 'Commercial & Mandate Delivery',
    question: 'How quickly can Lex Bridge mobilize a multi-jurisdiction team?',
    answer: 'For urgent matters (such as cross-border disputes, regulatory inquiries, or fast-track transactions), we can mobilize vetted local counsel across key international jurisdictions within 24 to 48 hours.',
  },
  {
    id: 'q17',
    category: 'Commercial & Mandate Delivery',
    question: 'How do we begin a conversation about an upcoming mandate?',
    answer: 'Submit an enquiry via our Contact page or email us directly with details of your target jurisdictions and commercial objective. We will schedule a confidential introductory call to outline an appropriate coordination structure.',
  },
];
