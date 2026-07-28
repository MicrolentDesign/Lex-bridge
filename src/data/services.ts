// Data for all 10 service detail pages (v2.0 T5).

export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  group: 'Core Coordination' | 'Matter Coordination' | 'Programme Services';
  summary: string;
  roleBoundaryOverride?: string;
  whenRelevant: string[];
  howLexBridgeSupports: string[];
  typicalDeliverables: string[];
  clientValue: string;
  ctaVariant: 'A' | 'B' | 'C';
}

export const servicesData: Record<string, ServiceDetail> = {
  'legal-project-management': {
    slug: 'legal-project-management',
    title: 'International Legal Project Management',
    eyebrow: 'Core Coordination',
    group: 'Core Coordination',
    summary: 'End-to-end management of complex cross-border legal initiatives with unified timeline, budget, and scope control.',
    whenRelevant: [
      'Managing parallel legal workflows across three or more jurisdictions.',
      'Facing tight regulatory or transaction deadlines requiring multi-region execution.',
      'Internal legal team lacks capacity to oversee daily international counsel updates.',
      'Inconsistent reporting from local law firms creates executive reporting blind spots.',
      'Cross-border matter costs are exceeding initial estimates without clear visibility.',
    ],
    howLexBridgeSupports: [
      'Establishes a single central project plan aligning all local counsel timelines.',
      'Implements weekly consolidated status dashboards for General Counsel and leadership.',
      'Manages budget tracking and fee estimate compliance across all engaged law firms.',
      'Translates commercial priorities into clear instructions for local legal teams.',
      'Acts as the daily point of contact for counsel queries and task escalation.',
    ],
    typicalDeliverables: [
      'Master Mandate Roadmap & Timeline',
      'Consolidated Weekly Project Status Report',
      'Cross-Jurisdictional Budget & Spend Ledger',
      'Decision Matrix & Escalation Log',
    ],
    clientValue: 'Eliminates internal coordination overload, reduces total spend through active fee management, and gives leadership complete multi-country visibility.',
    ctaVariant: 'A',
  },

  'local-counsel': {
    slug: 'local-counsel',
    title: 'Local Counsel Selection & Engagement',
    eyebrow: 'Core Coordination',
    group: 'Core Coordination',
    summary: 'Independent vetting, selection, and engagement of optimal local lawyers suited specifically to your mandate.',
    whenRelevant: [
      'Entering a new country without pre-existing law firm relationships.',
      'Existing panel firms lack specialized local expertise for a specific issue.',
      'Seeking conflict-free counsel for sensitive disputes or regulatory inquiries.',
      'Needing transparent fee negotiation and standardized engagement terms.',
      'Requiring regional counsel in niche or emerging markets.',
    ],
    howLexBridgeSupports: [
      'Conducts objective selection based on mandate requirements, not firm kickbacks.',
      'Vets counsel for relevant track record, responsiveness, and language capability.',
      'Negotiates competitive fee structures and capped arrangement terms.',
      'Establishes clear engagement letters defining scope and reporting protocols.',
      'Maintains an active network of vetted independent lawyers globally.',
    ],
    typicalDeliverables: [
      'Counsel Selection Matrix & Recommendation Memorandum',
      'Standardized Instruction Briefs',
      'Negotiated Fee & Scope Agreement',
      'Counsel Performance Protocol',
    ],
    clientValue: 'Secures high-caliber, right-sized local representation without overpaying for international firm overhead.',
    ctaVariant: 'A',
  },

  'multi-jurisdiction': {
    slug: 'multi-jurisdiction',
    title: 'Multi-Jurisdiction Programmes',
    eyebrow: 'Core Coordination',
    group: 'Core Coordination',
    summary: 'Structured management of recurring or ongoing legal operations spanning multiple international territories.',
    whenRelevant: [
      'Executing group-wide corporate restructurings or compliance rollouts.',
      'Managing global IP or trademark maintenance across dozens of registries.',
      'Handling multi-country employment policy reviews or workforce transitions.',
      'Coordinating cross-border data protection or privacy audits.',
      'Overseeing recurring corporate secretarial filings for global subsidiaries.',
    ],
    howLexBridgeSupports: [
      'Designs standardized playbooks and templates for local counsel execution.',
      'Centralizes intake and distribution of country-level legal tasks.',
      'Maintains real-time tracking matrices across all active jurisdictions.',
      'Harmonizes local legal advice into executive-ready global summaries.',
      'Provides a dedicated coordination team as an extension of your legal department.',
    ],
    typicalDeliverables: [
      'Global Programme Playbook',
      'Jurisdictional Matrix & Compliance Tracker',
      'Consolidated Executive Briefing Memorandum',
      'Programme Retrospective & Improvement Plan',
    ],
    clientValue: 'Transforms fragmented regional legal tasks into an orderly, repeatable, and cost-controlled international programme.',
    ctaVariant: 'A',
  },

  'disputes-investigations': {
    slug: 'disputes-investigations',
    title: 'Disputes & Investigations',
    eyebrow: 'Matter Coordination',
    group: 'Matter Coordination',
    summary: 'Coordination of cross-border litigation, international arbitration, and multi-agency regulatory investigations.',
    roleBoundaryOverride: 'Lex Bridge coordinates mandate logistics and project management. Lex Bridge does not conduct court advocacy or provide reserved legal representation; all formal legal representation is handled by independent local counsel.',
    whenRelevant: [
      'Multinational litigation involving proceedings in multiple court systems.',
      'Cross-border internal or regulatory investigations (e.g. FCPA, sanctions, fraud).',
      'Parallel enforcement actions or asset tracing across several jurisdictions.',
      'Complex international arbitration requiring coordination of local experts.',
      'Managing evidence collection and discovery across differing legal regimes.',
    ],
    howLexBridgeSupports: [
      'Coordinates multi-jurisdictional defense or claim strategies with local counsel.',
      'Manages document disclosure workflows and cross-border data transfer compliance.',
      'Organizes expert witness selection and international hearing preparation.',
      'Tracks multi-forum deadlines, hearing calendars, and cost commitments.',
      'Prepares unified strategy summaries for board members and insurers.',
    ],
    typicalDeliverables: [
      'Multi-Forum Dispute Strategy Map',
      'Evidence & Discovery Logistics Plan',
      'Cross-Border Litigation Spend Dashboard',
      'Hearing & Filings Master Schedule',
    ],
    clientValue: 'Ensures tactical alignment across all legal teams while keeping leadership focused on commercial outcome management.',
    ctaVariant: 'B',
  },

  'transactions-corporate': {
    slug: 'transactions-corporate',
    title: 'Transactions & Corporate Projects',
    eyebrow: 'Matter Coordination',
    group: 'Matter Coordination',
    summary: 'Project management for international M&A, joint ventures, corporate reorganizations, and cross-border investments.',
    whenRelevant: [
      'Cross-border M&A with target assets or subsidiaries in multiple countries.',
      'Establishing international joint ventures with foreign co-investors.',
      'Group re-flagging, holding company migrations, or corporate spin-offs.',
      'Multi-country due diligence exercises requiring rapid execution.',
      'Post-acquisition legal integration across regional business units.',
    ],
    howLexBridgeSupports: [
      'Structures and manages the legal due diligence workflow across local law firms.',
      'Coordinates local corporate filings, regulatory approvals, and closing deliverables.',
      'Maintains master disclosure logs and transaction document repositories.',
      'Aligns closing timelines across time zones and local registry requirements.',
      'Provides daily transaction management support to deal leads and advisors.',
    ],
    typicalDeliverables: [
      'Multi-Country Due Diligence Summary Report',
      'Transaction Closing Checklist & Matrix',
      'Local Regulatory Approval Tracker',
      'Post-Merger Legal Integration Plan',
    ],
    clientValue: 'Accelerates deal velocity, prevents local regulatory surprises, and prevents deal fatigue for internal counsel.',
    ctaVariant: 'B',
  },

  'market-entry-regulatory': {
    slug: 'market-entry-regulatory',
    title: 'Market Entry & Regulatory',
    eyebrow: 'Matter Coordination',
    group: 'Matter Coordination',
    summary: 'Guidance and project coordination for entering new international jurisdictions and navigating complex local regulatory regimes.',
    whenRelevant: [
      'Expanding business operations into unfamiliar foreign markets.',
      'Navigating foreign direct investment (FDI) restrictions or licensing requirements.',
      'Assessing local regulatory risk prior to capital commitment.',
      'Structuring local commercial entities and director appointments.',
      'Responding to local regulatory inquiries or compliance audits.',
    ],
    howLexBridgeSupports: [
      'Commissioning tailored market-entry legal assessments from vetted local counsel.',
      'Mapping out step-by-step entity formation and licensing timelines.',
      'Coordinating local corporate secretarial, tax, and regulatory filings.',
      'Managing relations between international management and local legal advisers.',
      'Synthesizing multi-country regulatory requirements into clear comparative charts.',
    ],
    typicalDeliverables: [
      'Market Entry Regulatory Feasibility Report',
      'Entity Incorporation & Licensing Roadmap',
      'Comparative Jurisdictional Analysis Chart',
      'Regulatory Compliance Calendar',
    ],
    clientValue: 'De-risks foreign expansion and establishes compliant local operations swiftly without costly regulatory missteps.',
    ctaVariant: 'B',
  },

  'ip-portfolio': {
    slug: 'ip-portfolio',
    title: 'IP Portfolio Coordination',
    eyebrow: 'Matter Coordination',
    group: 'Matter Coordination',
    summary: 'Centralized coordination for international trademark, patent, design, and domain protection and enforcement.',
    whenRelevant: [
      'Filing brand registrations across multiple international registries simultaneously.',
      'Enforcing intellectual property rights against global counterfeiters or infringers.',
      'Managing global IP transfer or licensing agreements during corporate restructuring.',
      'Auditing regional IP holdings for renewal deadlines and chain-of-title defects.',
      'Coordinating global domain dispute actions (UDRP) across jurisdictions.',
    ],
    howLexBridgeSupports: [
      'Single point of contact for multi-country trademark search and registration filings.',
      'Coordinates local IP agents and specialists across target registries.',
      'Centralizes IP renewal management and status reporting.',
      'Manages cross-border cease-and-desist programs with local legal counsel.',
      'Harmonizes IP assignment documentation across target markets.',
    ],
    typicalDeliverables: [
      'Global IP Registration Status Ledger',
      'Multi-Territory Enforcement Action Log',
      'IP Chain-of-Title Audit Summary',
      'International IP Portfolio Strategy Overview',
    ],
    clientValue: 'Protects critical brand assets worldwide with unified administration and reduced local agent administrative costs.',
    ctaVariant: 'B',
  },

  'employment-mobility': {
    slug: 'employment-mobility',
    title: 'Employment & Mobility',
    eyebrow: 'Matter Coordination',
    group: 'Matter Coordination',
    summary: 'Coordination of international executive employment contracts, global mobility policies, and workforce restructurings.',
    whenRelevant: [
      'Deploying senior executives or international assignees across multiple countries.',
      'Harmonizing employment contracts following international acquisitions.',
      'Executing multi-jurisdictional workforce reductions or office closures.',
      'Navigating local labor law compliance, restrictive covenants, and severance rules.',
      'Managing cross-border remote work policies and permanent establishment risks.',
    ],
    howLexBridgeSupports: [
      'Engages local employment counsel to draft compliant local employment agreements.',
      'Coordinates cross-border visa, immigration, and work permit legal applications.',
      'Manages multi-country consultation protocols and workforce restructuring schedules.',
      'Synthesizes local labor law rules into executive summary matrices.',
      'Tracks employment litigation or severance negotiations across regions.',
    ],
    typicalDeliverables: [
      'Global Executive Employment Template Suite',
      'Multi-Country Restructuring Compliance Guide',
      'Immigration & Mobility Status Ledger',
      'Restrictive Covenant Enforcement Assessment',
    ],
    clientValue: 'Mitigates local labor law liability, protects company IP, and ensures smooth international talent transitions.',
    ctaVariant: 'B',
  },

  'legal-operations': {
    slug: 'legal-operations',
    title: 'Legal Operations & Spend Management',
    eyebrow: 'Programme Services',
    group: 'Programme Services',
    summary: 'Optimizing international legal spend, fee arrangements, panel management, and operational workflows for corporate legal departments.',
    whenRelevant: [
      'International legal spend is growing rapidly without centralized oversight.',
      'General Counsel seeks to benchmark foreign law firm rates and billing practices.',
      'Needing to establish formal panel rules and rate caps for external counsel.',
      'Implementing e-billing or law firm performance metrics globally.',
      'Seeking to audit historical international legal invoices for compliance.',
    ],
    howLexBridgeSupports: [
      'Audits existing external counsel engagements and billing structures.',
      'Designs tailored RFP processes to select cost-effective regional legal panels.',
      'Enforces strict billing guidelines and pre-approval rules for local counsel.',
      'Provides ongoing invoice review and fee negotiation services.',
      'Delivers quarterly executive dashboards on international legal spend trends.',
    ],
    typicalDeliverables: [
      'International Legal Spend Audit Report',
      'External Counsel Billing Guidelines',
      'Panel RFP & Rate Benchmark Package',
      'Quarterly Legal Operations Executive Dashboard',
    ],
    clientValue: 'Generates direct cost savings of 15-30% on external international counsel spend while improving counsel accountability.',
    ctaVariant: 'C',
  },

  'professional-services': {
    slug: 'professional-services',
    title: 'Complementary Professional Services',
    eyebrow: 'Programme Services',
    group: 'Programme Services',
    summary: 'Coordinating non-legal specialist advisers—such as tax, forensic accounting, corporate intelligence, and public affairs—alongside legal counsel.',
    whenRelevant: [
      'Complex cross-border mandates requiring integrated legal, tax, and financial input.',
      'Regulatory investigations needing forensic accounting or data discovery specialists.',
      'Special situations requiring corporate intelligence or asset tracing expertise.',
      'Cross-border crisis management requiring coordinated legal and PR strategy.',
      'Selecting local fiduciary, corporate secretarial, or escrow service providers.',
    ],
    howLexBridgeSupports: [
      'Identifies, vets, and engages complementary specialist non-legal firms.',
      'Manages joint timelines and deliverables between legal counsel and financial advisers.',
      'Prevents siloed work streams through integrated project reporting.',
      'Controls overall advisory budget and scope creep across all disciplines.',
      'Provides leadership with one consolidated point of contact for the advisory team.',
    ],
    typicalDeliverables: [
      'Integrated Advisory Mandate Charter',
      'Multi-Discipline Project Dashboard',
      'Specialist Adviser Selection Briefs',
      'Consolidated Executive Briefing Package',
    ],
    clientValue: 'Ensures total strategic alignment across legal, financial, and strategic advisers without managing multiple independent firms.',
    ctaVariant: 'C',
  },
};
