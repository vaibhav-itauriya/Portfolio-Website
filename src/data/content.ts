// All site content lives here. Edit this file to update the portfolio.
// Copy style: simple English, no em dashes, few colons or semicolons.

export type Lens = 'all' | 'product' | 'software' | 'data' | 'strategy';
export type Track = Exclude<Lens, 'all'>;

export interface LensInfo {
  id: Lens;
  label: string;
  summary: string;
  proof: string[];
  resume?: { href: string; label: string };
}

export const lenses: LensInfo[] = [
  {
    id: 'all',
    label: 'Everything',
    summary:
      'I build products, software and AI agents, and I like starting from the messy problem. At Jaguar Land Rover I built a traceability platform used by 150+ engineers. At PFA India I owned credit card recommendations end to end. Right now I lead placements for 3000+ students at IIT Kanpur.',
    proof: [
      '1st place in the JLR Global Hackathon, across 7+ countries',
      'Top 1.5% of 25,000+ teams in the Amazon ML Challenge 2026',
      'Top 10 nationally at ZS Campus Beats 2026, with a PPI',
    ],
  },
  {
    id: 'product',
    label: 'Product',
    summary:
      'I start with users and finish with numbers. I run the interviews, write the PRD, prototype in Figma or React, and then track whether it actually moved conversion, CSAT or retention.',
    proof: [
      'Raised card conversion from 2% to 7% at PFA India',
      'Doubled CSAT to 8.4/10 with 65% repeat usage',
      'National Finalist at The Ken × Zerodha 2026 with Pacto',
    ],
    resume: { href: '/resumes/Vaibhav_Itauriya_Product.pdf', label: 'Product resume' },
  },
  {
    id: 'software',
    label: 'Software',
    summary:
      'I ship full stack systems that people rely on. Data pipelines on AWS, APIs, Next.js dashboards, graph engines and agentic AI on MCP, built to be fast and safe when money or audits are involved.',
    proof: [
      'Cut repo sync from 2 min to 5 sec and API latency from 3 sec to 2 ms at JLR',
      '4th nationally in Code & Compete at Techkriti’26',
      'Built a 39-tool MCP agent that moves real money safely',
    ],
    resume: { href: '/resumes/Vaibhav_Itauriya_Software.pdf', label: 'Software resume' },
  },
  {
    id: 'data',
    label: 'Data',
    summary:
      'I turn raw records into decisions. SQL on Redshift over a million artifacts, funnels in GA4, forecasting models and ML pipelines that hold up on a leaderboard.',
    proof: [
      '0.9867 macro F0.5, rank 384 of 25,000+ teams at Amazon ML Challenge',
      'SQL over 1M+ artifacts to flag compliance gaps at JLR',
      'Rank 254 of 9,000+ in the Goldman Sachs India Hackathon 2025',
    ],
    resume: { href: '/resumes/Vaibhav_Itauriya_Analyst.pdf', label: 'Analyst resume' },
  },
  {
    id: 'strategy',
    label: 'Strategy',
    summary:
      'I like structuring problems that have no clean answer yet. Market sizing, GTM, cost-benefit and stakeholder alignment, backed by data rather than gut feel.',
    proof: [
      'Top 10 nationally at ZS Campus Beats 2026, with a PPI',
      '5th of 23 IITs at Inter IIT Tech Meet 13.0',
      'Leading a 250+ member team that serves 500+ recruiters',
    ],
    resume: { href: '/resumes/Vaibhav_Itauriya_Consulting.pdf', label: 'Consulting resume' },
  },
];

export interface Block {
  label?: string;
  items: string[];
}

export type Views = Partial<Record<Lens, Block[]>>;

export interface Experience {
  company: string;
  place: string;
  role: string;
  team?: string;
  dates: string;
  highlights: string[];
  views: Views;
  link?: { href: string; label: string };
}

export const experience: Experience[] = [
  {
    company: 'Jaguar Land Rover',
    place: 'JLR TBSI, Bengaluru',
    role: 'Software Intern',
    team: 'Software Defined Vehicle team, SARVAM traceability platform',
    dates: 'May’26 – Jul’26',
    highlights: [
      'Won 1st place in the JLR Global Hackathon, representing India across 7+ countries',
      'Awarded a Letter of Recommendation',
    ],
    views: {
      all: [
        {
          items: [
            'Built SARVAM, a traceability platform linking requirements, design, code and tests across 200+ repositories for 10+ global teams, 150+ engineers and 5+ auditors',
            'Ran discovery with developers, QA, architects and auditors, and defined compliance KPIs with project advisors and leadership',
            'Cut repo sync from 2 min to 5 sec, cached API latency from 3 sec to 2 ms and page load from 20 sec to 2 sec',
            'Turned a 3-week manual audit into on-demand analysis across 1M+ artifacts',
            'Onboarded 10 teams and 15+ projects in SDV and ADAS, scaling to 500K+ trace links ahead of the JLR-wide rollout',
          ],
        },
      ],
      software: [
        {
          items: [
            'Built an engineering lifecycle traceability platform unifying Requirements, Design, Code and Tests across 200+ repositories, used by 10+ global teams, 150+ engineers and 5+ JLR auditors',
            'Engineered a Git-diff based pipeline using GitLab CI, Python, Lambda and Redshift that parses 20+ fields per artifact with upsert-by-ID sync, cutting repo sync time from 2 min to 5 sec',
            'Designed 8 filter-aware API routes using Lambda, API Gateway and Redshift, and migrated the data layer from DynamoDB to Redshift',
            'Built a Next.js and TypeScript dashboard with Tailwind, Recharts and React Flow for artifact filtering, trace graphs and mapping',
            'Cut cached API latency from 3 sec to 2 ms with Redis caching, and page load time from 20 sec to 2 sec using server-side pagination',
            'Developed a BFS-based traceability engine for 50K-node graphs, with filter-aware, depth-controlled traversal and GitLab file links',
            'Automated traceability checks, replacing a 3-week manual audit workflow with on-demand analysis across 1 Million+ artifacts',
          ],
        },
      ],
      product: [
        {
          label: 'Objective',
          items: [
            'Replace 3-week manual SDLC traceability audits with on-demand lifecycle visibility for JLR leadership and 10+ global teams',
            'Build SARVAM for 150+ engineers and 5+ JLR auditors, a single source of truth linking requirements, design, code and tests',
          ],
        },
        {
          label: 'Approach',
          items: [
            'Ran product discovery with developers, QA, architects and auditors, translating audit pain points into SARVAM’s requirements',
            'Defined compliance KPIs in a 10-member team, aligning project advisors and leadership on how audit readiness is measured',
            'Wrote SQL on Amazon Redshift over 1M+ artifacts to quantify requirement-to-test coverage and flag ASPICE gaps by team',
            'Cut data sync from 2 min to 5 sec by automating CI/CD ingestion, designed 8 REST APIs and resolved team data conflicts',
          ],
        },
        {
          label: 'Impact',
          items: [
            'Cut audits from 3 weeks of manual work to on-demand analysis, giving JLR leadership live compliance and lifecycle visibility',
            'Onboarded 10 teams and 15+ projects in SDV and ADAS, scaling to 1M+ artifacts and 500K+ traces ahead of JLR-wide rollout',
          ],
        },
      ],
      data: [
        {
          items: [
            'Built an engineering lifecycle traceability platform linking requirements, design, code and tests across 200+ repositories',
            'Ran cross-functional interviews with developers, QA, architects and auditors to map the audit workflow and its key pain points',
            'Wrote SQL on Amazon Redshift measuring requirement-to-test coverage over 1M+ artifacts, flagging compliance gaps by team',
            'Defined compliance KPIs with project advisors and analysts, powering KPI dashboards for release-readiness reviews by team',
            'Engineered a data pipeline (GitLab CI, Python, AWS Lambda) into Redshift, cutting each repository sync from 2 min to 5 sec',
            'Automated traceability checks, turning a 3-week manual audit into on-demand compliance insights for JLR’s leadership team',
            'Drove adoption across 10 engineering teams and 15+ projects, scaling to 500K+ trace links ahead of the company-wide rollout',
          ],
        },
      ],
      strategy: [
        {
          label: 'Objective',
          items: [
            'Replace the 3-week manual audit bottleneck that delayed compliance decisions for JLR’s leadership and 10+ global teams',
            'Create a single source of truth on requirement-to-test coverage for 150+ engineers and 5+ auditors, enabling data-led reviews',
          ],
        },
        {
          label: 'Approach',
          items: [
            'Ran stakeholder interviews with developers, QA, architects and auditors to map the as-is audit process and key pain points',
            'Defined compliance KPIs with project advisors and analysts, aligning leadership on how audit readiness is measured and tracked',
            'Wrote SQL queries on Amazon Redshift over 1M+ artifacts to quantify traceability coverage and flag compliance gaps by team',
            'Built KPI dashboards for 200+ repositories aligned to ASPICE and automated data refresh, so sync fell from 2 min to 5 sec',
          ],
        },
        {
          label: 'Impact',
          items: [
            'Cut audits from 3 weeks of manual work to on-demand analysis, giving JLR leadership live compliance and lifecycle visibility',
            'Drove adoption across 10 teams and 15+ projects in SDV and ADAS, scaling to 500K+ linkages ahead of the JLR-wide rollout',
          ],
        },
      ],
    },
  },
  {
    company: 'PFA India',
    place: 'Personal finance startup for credit cards and FIRE planning',
    role: 'Product Management Intern',
    team: 'Reported directly to the Founder',
    dates: 'Jan’25 – Aug’25',
    highlights: [
      'Internship extended by 2 months for strong performance',
      'Awarded a Letter of Recommendation',
    ],
    views: {
      all: [
        {
          items: [
            'Ran 20+ interviews and 200+ surveys, and defined 150+ card parameters on eligibility, fees and rewards',
            'Built a recommendation engine ranking 25+ credit cards on each user’s financials into top-3 picks, owning recommendations end to end',
            'Scraped 15+ banks every week, scaling from 3 to 50+ webpages a day, and built React frontends for card comparison and FIRE planning',
            'Raised card conversion from 2% to 7% across 5000+ organic visitors, tracked via GA4',
            'Doubled CSAT to 8.4/10 for credit cards and 2.5x to 7.5/10 for FIRE, with 65% repeat usage and ~23-min average sessions',
          ],
        },
      ],
      software: [
        {
          items: [
            'Built a weekly Python, Selenium and Pandas web-scraping pipeline for 15+ banks, scaling from 3 to 50+ webpages per day',
            'Developed a Python recommendation engine scoring 25+ credit cards on 150+ parameters, suggesting the best-fit cards to users',
            'Built responsive React frontends for credit-card comparison and FIRE tools, translating workflows into intuitive user interfaces',
            'Drove 23-minute average sessions and 8.4/10 satisfaction for card comparison and 7.5/10 for FIRE across all 200+ pilot users',
          ],
        },
      ],
      product: [
        {
          label: 'Objective',
          items: [
            'Help users choose the right credit card and plan FIRE despite fee, reward and eligibility data scattered across 15+ Indian banks',
          ],
        },
        {
          label: 'Approach',
          items: [
            'Ran 20+ interviews and 200+ surveys, benchmarked rivals and defined 150+ card parameters on eligibility, fees and rewards',
            'Built a probabilistic model ranking 25+ cards on user financials into top-3 picks, owning card recommendations end to end',
            'Built a FIRE planner with basic and detailed modes for 250+ users, and ran randomized user feedback tests on 20% of all users',
            'Scraped 15+ banks weekly, scaling from 3 to 50+ webpages a day, and co-wrote PRDs, built Figma flows and React prototypes',
          ],
        },
        {
          label: 'Impact',
          items: [
            'Raised card conversion from 2% to 7% of 250+ recommendation clicks tracked via GA4, across 5000+ organic visitors',
            'Doubled CSAT to 8.4/10 for credit cards and 2.5x to 7.5/10 for FIRE, driving 65% repeat usage and ~23-min average sessions',
          ],
        },
      ],
      data: [
        {
          items: [
            'Tracked the acquisition-to-retention funnel in GA4 and SQL across 5000+ visitors, raising the card conversion from 2% to 7%',
            'Developed a Python recommendation engine ranking 25+ credit cards on 150+ parameters to match each user’s spending',
            'Automated weekly fee and rewards data collection from 15+ banks with Python and Selenium, scaling from 3 to 50+ pages a day',
            'Ran A/B tests, 20+ interviews and 200+ surveys, driving 65% repeat usage, ~23-min sessions and 8.4/10 CSAT on card picks',
          ],
        },
      ],
      strategy: [
        {
          label: 'Objective',
          items: [
            'Optimize credit-card selection and FIRE planning for users overwhelmed by fragmented bank fees, rewards and eligibility data',
          ],
        },
        {
          label: 'Approach',
          items: [
            'Led market research via 20+ interviews, 200+ surveys and competitor benchmarking to identify key drivers of card selection',
            'Built a scoring model ranking 25+ credit cards on 150+ parameters (eligibility, fees, rewards) using data-informed weights',
            'Tracked the acquisition, conversion and retention funnel in Excel and SQL, recalibrated weights and scoped a regression-based v2',
            'Automated weekly pricing and fee data collection from 15+ banks via Python scraping, scaling from 3 to 50+ webpages a day',
          ],
        },
        {
          label: 'Impact',
          items: [
            'Acquired 200+ users via organic Reddit outreach and raised card conversion from 2% to 7% of recommendation clicks via GA4',
            'Achieved 65% repeat usage (2 to 3 visits a month) and organic referrals, with ~23-min sessions and 8.4/10 CSAT on recommendations',
          ],
        },
      ],
    },
  },
  {
    company: 'Turantlo',
    place: 'Paritranaya Global Pvt Ltd',
    role: 'SDE Intern',
    dates: 'Jul’24 – Sep’24',
    highlights: [],
    link: {
      href: 'https://drive.google.com/file/d/1yqAFw6tncIwy5F56ovMNQS67rEOMA3vC/view',
      label: 'Experience letter',
    },
    views: {
      all: [
        {
          items: [
            'Developed a recommendation engine for Turantlo’s app with personalized product recommendations',
            'Built and optimized a responsive website using Next.js and React.js',
          ],
        },
      ],
    },
  },
];

export interface Project {
  title: string;
  kind: string;
  context: string;
  dates?: string;
  role?: string;
  badge?: string;
  lenses: Track[];
  views: Views;
  tags: string[];
  links?: { href: string; label: string }[];
}

export const projects: Project[] = [
  {
    title: 'Pacto',
    kind: 'AI accountability agent',
    context: 'The Ken × Zerodha Case Competition 2026, Agentic AI Build Track',
    dates: 'Aug’26 – Oct’26',
    role: 'Team Lead',
    badge: 'National Finalist, top 7% of 6,000+ teams',
    lenses: ['product', 'software', 'data'],
    views: {
      all: [
        {
          items: [
            'People quit fitness and personal goals early because skipping costs nothing. Pacto lets them put real money on the line with consent-based stakes and friend-approved pauses',
            'Shipped a Hinglish voice and chat agent on GPT-4o-mini with 39 MCP tools, built on Pine Labs and Gnani APIs',
            'Cut no-shows in an 8-member gym pod from 3+ a day to 2 or fewer, only in genuine cases, in a pilot with money at stake',
          ],
        },
      ],
      product: [
        {
          items: [
            'Help people stick to fitness and personal goals they usually quit early, as reminders and streaks carry no real cost for skipping',
            'Led user research with 30+ surveys and 5+ interviews, mapped JTBD and grouped goals by how easily completion is verified',
            'Set the North Star as verified attendance and designed consent-based money stakes and friend-approved pauses to build trust',
            'Wrote the PRD covering 30 edge cases, ran build-vs-partner analysis on 34 capabilities and specced 3 new partner APIs',
            'Cut no-shows from 3+ of an 8-member gym pod daily to 2 or fewer, only in genuine cases, in a pilot with money at stake',
          ],
        },
      ],
      software: [
        {
          items: [
            'Built an agentic AI system (GPT-4o-mini) on an MCP server with 39 tools, verifying missed sessions and auto-settling user stakes',
            'Designed a payment state machine for charges, pre-debit notices, Pine Labs links and payouts with idempotent API retries',
            'Integrated Gnani STT/TTS for Hinglish Telegram voice notes, with server guardrails so money moves only on confirmed state',
            'Ran 18 end-to-end test rounds (403s, 504 timeouts, duplicate charges), adding session-ID normalization and charge blocking',
            'Wired Google Calendar triggers, GPS geofence check-ins and Gmail receipts, with a scheduler running Pacto every 5 minutes',
          ],
        },
      ],
      data: [
        {
          items: [
            'Built an agentic AI system (GPT-4o-mini) where users stake money on goals, auto-verifying missed sessions via 39 MCP tools',
            'Designed a UPI Autopay state machine (notice, debit, 3 retries, payout) with idempotent references and Pine Labs payment links',
            'Integrated Gnani speech-to-text for Hinglish voice notes, plus Google Calendar, Telegram and Gmail connectors as agent tools',
            'Tested 12 prompt versions against 10 evaluation cases, adding guardrails so money moves only after explicit user confirmation',
          ],
        },
      ],
    },
    tags: ['GPT-4o-mini', 'MCP', 'Pine Labs', 'Gnani', 'Telegram', 'PRD'],
    links: [
      { href: 'https://github.com/parafoxxx/Pacto', label: 'Code' },
      { href: 'https://drive.google.com/drive/folders/1rmXOWr3sCEGJMYZGxm0dIfD0_a7c_9v7', label: 'Project files' },
    ],
  },
  {
    title: 'FINN',
    kind: 'Investment agent for portfolio managers',
    context: 'Build challenge for ENAM Holdings',
    dates: 'Nov’26',
    lenses: ['software', 'product', 'data'],
    views: {
      all: [
        {
          items: [
            'A mobile-first agent for a portfolio manager with ninety seconds between meetings. It reads every BSE filing and the daily price and volume for 18 holdings, and ranks them into an inbox you can finish',
            'Reads results PDFs into Revenue, EBITDA, PBT and PAT against last quarter and last year, and explains a CEO change in one card',
            'Research view checks what management promised on its last four earnings calls against what the company later reported, with every quote string-matched to the source PDF',
            'Voice copilot and a Telegram bot answer questions and push alerts at thresholds the user sets, with a preview of how noisy each setting would have been over 30 days',
          ],
        },
      ],
    },
    tags: ['LLM Agents', 'Voice', 'Telegram Bot', 'Redis', 'GitHub Actions', 'PWA'],
    links: [
      { href: 'https://finn-opal-delta.vercel.app', label: 'Live app' },
      { href: 'https://github.com/vaibhav-itauriya/finn', label: 'Code' },
    ],
  },
  {
    title: 'Amazon ML Challenge 2026',
    kind: 'Entity resolution at scale',
    context: '72-hour national ML hackathon by Amazon',
    dates: 'Sep’26',
    role: 'Team Lead, 4 members',
    badge: 'Rank 384 of 25,000+ teams, top 1.5%',
    lenses: ['software', 'data'],
    views: {
      all: [
        {
          items: [
            'Led a 4-member team building an end-to-end entity-resolution pipeline in Python, mapping noisy records onto 1.77M entities',
            'Wrote NLP preprocessing for Indic transliteration and address normalization, and TF-IDF top-k blocking to speed up retrieval',
            'Engineered 75 pairwise features (fuzzy matching, set overlaps) for a two-stage LightGBM classifier with isotonic recalibration',
            'Fine-tuned a multilingual-e5 cross-encoder (Hugging Face) to re-rank candidates, optimizing match thresholds for macro F0.5',
            'Scored 0.9867 macro F0.5 on the final leaderboard within just 72 hours',
          ],
        },
      ],
    },
    tags: ['Python', 'LightGBM', 'Hugging Face', 'TF-IDF', 'NLP'],
    links: [{ href: 'https://github.com/vaibhav-itauriya/Amazon-ML-Challenge-2026', label: 'Code' }],
  },
  {
    title: 'SabhaSaar',
    kind: 'Meeting minutes in any Indian language',
    context: 'Sarvam AI hackathon',
    dates: 'Oct’26',
    lenses: ['software', 'product'],
    views: {
      all: [
        {
          items: [
            'Turns Gram Sabha, Panchayat, Parliament and court proceedings into minutes where every point is stamped with the moment it was said',
            'Built on Sarvam AI, with Saaras v4 for speech to text with speaker separation, Sarvam-105B for minutes and answers, and Bulbul for spoken summaries',
            'Four ways to add a meeting, from sharing a Meet or Zoom tab to recording the room, a stream link or an upload, with live captions every 25 seconds',
            'People who missed the meeting can hear a one-minute summary in their own language or ask questions by voice',
          ],
        },
      ],
    },
    tags: ['FastAPI', 'Sarvam AI', 'Speech AI', 'Indic Languages'],
    links: [
      { href: 'https://sarvam-sabhasaar.onrender.com', label: 'Live demo' },
      { href: 'https://github.com/vaibhav-itauriya/sarvam-sabhasaar', label: 'Code' },
    ],
  },
  {
    title: 'Bharat Trial Network',
    kind: 'Paid product trials for Bharat households',
    context: 'Meesho DICE Challenge Season 3, Business Track. Team Moshi Moshi',
    dates: 'Oct’26',
    lenses: ['strategy', 'product'],
    views: {
      all: [
        {
          items: [
            'Brands pay Meesho to put a free sample in a chosen household’s parcel, hear back from her within days and see whether she bought it 90 days later',
            'Sized it against ₹5,400 Cr of yearly brand sampling spend in India, at ₹9 to ₹16 per delivered trial versus ₹25 to ₹40 per promoter contact',
            'Designed the flow from checkout flagging to Valmo hub insertion, a 3-question survey for ₹15 off and a 90-day purchase lift against a matched holdout',
            'Built a working app prototype and projected about 1% of Meesho’s NMV, around ₹650 Cr run-rate by end of FY28, with zero commission',
          ],
        },
      ],
    },
    tags: ['Monetization', 'Market Sizing', 'GTM', 'Prototype'],
    links: [
      { href: 'https://vaibhav-itauriya.github.io/moshi-moshi-meesho-dice-3.0/', label: 'Live prototype' },
      { href: 'https://github.com/vaibhav-itauriya/moshi-moshi-meesho-dice-3.0', label: 'Code' },
    ],
  },
  {
    title: 'Campus Beats 2026',
    kind: 'Market entry and GTM case',
    context: 'Case competition by ZS Associates',
    dates: 'Jun’26',
    badge: 'Top 10 nationally, secured a PPI',
    lenses: ['strategy', 'product'],
    views: {
      all: [
        {
          items: [
            'Developed an India market-entry and GTM strategy for NozSmoke amid low category awareness and a first-mover opportunity',
            'Sized the TAM, SAM and SOM using demographic filters, smoking prevalence and intent-to-quit data',
            'Evaluated price elasticity and benchmarked 30-day regimen performance against 4 competitors to guide pricing and positioning',
            'Applied a multi-criteria decision matrix across 6+ parameters to prioritize 3 advertising archetypes by target-segment appeal',
            'Projected a $45M+ SOM for NozSmoke with a 12% market share by Year 2 via a hybrid clinical-emotional positioning strategy',
          ],
        },
      ],
    },
    tags: ['Market Sizing', 'Pricing', 'GTM', 'Positioning'],
  },
  {
    title: 'LoreDrop',
    kind: 'Campus event platform',
    context: 'CS253 course project under Prof. Indranil Saha, CSE, IIT Kanpur',
    dates: 'Jan’26 – Apr’26',
    role: '9-member team',
    lenses: ['software', 'product'],
    views: {
      all: [
        {
          items: [
            'Built a campus event platform replacing scattered WhatsApp and email updates for all of IIT Kanpur’s 47 registered student clubs',
            'Implemented Firebase OTP authentication and secure token based login, restricting access to verified IITK members',
            'Designed role-based access control for students, organizers and admins, so only approved organizers can publish events',
            'Developed a personalized event feed with indexed MongoDB queries using React, TypeScript and Node.js for faster loading',
            'Added scheduling clash detection, recurring events and email alerts while collaborating over Git and GitHub',
          ],
        },
      ],
    },
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase'],
    links: [
      { href: 'https://github.com/parafoxxx/Loredrop', label: 'Code' },
      { href: 'https://drive.google.com/drive/folders/1mLWXR7MXlehWiwf1G0hj-TUxZl1VWUfK', label: 'Project files' },
    ],
  },
  {
    title: 'Inter IIT Tech Meet 13.0',
    kind: 'Solar waste forecasting and recycling plan',
    context: 'Insolation Energy consulting case, represented IIT Kanpur',
    dates: 'Dec’24',
    badge: '5th of 23 IITs',
    lenses: ['strategy', 'data'],
    views: {
      all: [
        {
          items: [
            'Modeled solar panel waste using Weibull failure distributions across 2 scenarios, triangulated with official MNRE forecasts',
            'Prioritized 3 recycling routes (mechanical, chemical, bio) via cost-benefit analysis, estimating an INR 44K/tonne unit margin',
            'Scoped an AI-led triage model (gradient boosting, computer vision) routing each panel to reuse or recycling by fault risk',
            'Designed a decentralized collection network via geospatial analysis and mapped stakeholders into a five-year rollout roadmap',
            'Forecast 6.01 million tonnes of solar waste by 2040, above IRENA’s projection, and proposed a national plan for 70+ recycling plants processing 1.2 million tonnes a year',
          ],
        },
      ],
    },
    tags: ['Forecasting', 'Cost-Benefit', 'Geospatial', 'Roadmap'],
    links: [{ href: 'https://drive.google.com/drive/folders/1joKOQDXkTQNDiPt96oiTBkT9BNmh4-sg', label: 'Report and deck' }],
  },
  {
    title: 'Crickcast',
    kind: 'Cricket match outcome prediction',
    context: 'Product Club, IIT Kanpur',
    dates: 'May’25 – Jul’25',
    role: 'Mentored a 15-member team',
    lenses: ['data'],
    views: {
      all: [
        {
          items: [
            'Created 30+ look-back features (win %, head-to-head, top-3 strike rates, economy) spanning 948 historical match outcomes',
            'Ranked features by win-rate analysis and tuned XGBoost with 5-fold cross-validated grid search across 8,640 configurations',
            'Achieved 65% accuracy with LightGBM against a 50% baseline, outperforming XGBoost, with batting strike rate as the top driver',
          ],
        },
      ],
    },
    tags: ['XGBoost', 'LightGBM', 'Feature Engineering'],
    links: [{ href: 'https://github.com/Akshatgarg221/Crickcast', label: 'Code' }],
  },
  {
    title: 'LLuminating Language',
    kind: 'RAG chatbot for IIT Kanpur',
    context: 'Brain and Cognitive Society, IIT Kanpur',
    dates: 'May’24 – Jul’24',
    badge: 'Best Implementation Award, SnT Summer Projects 2024',
    lenses: ['software', 'data'],
    views: {
      all: [
        {
          items: [
            'Developed an IITK-specific RAG chatbot on a locally hosted LLaMA3-8B with LangChain and a ChromaDB vector database',
            'Built an end-to-end RAG pipeline with Selenium and Instructor embeddings, ingesting 400+ webpages into 3000+ text chunks',
            'Optimized top-k semantic retrieval, cutting query retrieval latency to under 200 ms from a 1.5 sec baseline',
            'Added confidence-based guardrails and prompt engineering to curb hallucinations, reaching 90%+ accuracy on 200+ queries',
          ],
        },
      ],
    },
    tags: ['LLaMA3', 'LangChain', 'ChromaDB', 'RAG'],
    links: [{ href: 'https://github.com/udbhav-44/BCS-Lluminating-Language', label: 'Code' }],
  },
  {
    title: 'Narrative-Core',
    kind: 'AI story generation for audio series',
    context: 'Project K by KUKU FM, built with a team',
    dates: 'Apr’25',
    badge: 'National Finalist, top 10 teams',
    lenses: ['software', 'data'],
    views: {
      all: [
        {
          items: [
            'An AI pipeline that turns a concept note into coherent, culturally rooted multi-episode scripts',
            'Each character keeps a memory in ChromaDB, retrieved by relevance, recency and importance, so behaviour and dialogue stay consistent across episodes',
            'Uses RAG over a store of Indian story frameworks for cultural context, and ranks context to fit the LLM’s token limit at every step',
            'LLM-based quality checks review each generated episode',
          ],
        },
      ],
    },
    tags: ['LLM', 'RAG', 'ChromaDB', 'NLP'],
    links: [{ href: 'https://github.com/Krishnaag23/narrative-core', label: 'Code' }],
  },
  {
    title: 'DoRD Project Portal',
    kind: 'Research project discovery for IIT Kanpur',
    context: 'E&ICT Academy and DoMS, IIT Kanpur',
    dates: 'Jul’24 – Sep’24',
    role: '7-member team, mentored by Ark Srinivas and Prof. B.V. Phani',
    lenses: ['product', 'software'],
    views: {
      all: [
        {
          items: [
            'Streamlined how 500+ faculty and 2000+ researchers at IIT Kanpur find, apply to and track research projects in one portal',
            'Mapped the user journey from project creation to applications, review and tracking, and defined role-based access per user type',
            'Ran 30+ user-testing sessions with faculty and researchers, iterating 5+ Figma workflows to make project discovery simpler',
            'Scraped project openings from 15+ external websites to power eligibility-based recommendations and multi-filter search',
            'Onboarded 15 projects from 10 faculty and 100+ users in phase 1 after launching v1 on IIT Kanpur’s intranet via Django',
          ],
        },
      ],
    },
    tags: ['Django', 'Figma', 'User Testing'],
    links: [{ href: 'https://github.com/AnC-Council-IIT-Kanpur/ProjectPortal', label: 'Code' }],
  },
  {
    title: 'Time Series Forecasting',
    kind: 'Retail sales forecasting',
    context: 'Stamatics, Department of Mathematics and Statistics, IIT Kanpur',
    dates: 'May’24 – Jul’24',
    lenses: ['data'],
    views: {
      all: [
        {
          items: [
            'Decomposed 13 years of retail sales into trend, seasonality and residuals with ACF/PACF, visualized via interactive Plotly charts',
            'Forecast sales with ARMA/ARIMA models selected via AIC/BIC, reporting 95% confidence intervals for out-of-sample forecasts',
            'Modeled volatility with ARCH/GARCH and backtesting, and built an attention-based neural forecaster for multivariate sales data',
          ],
        },
      ],
    },
    tags: ['ARIMA', 'GARCH', 'Plotly', 'PyTorch'],
  },
  {
    title: 'Academic & Career Council Website',
    kind: 'Council website',
    context: 'Academic & Career Council, IIT Kanpur',
    lenses: ['software'],
    views: {
      all: [
        {
          items: [
            'Built the council’s website with Next.js and TypeScript along with the other secretaries, and improved its performance and user experience',
          ],
        },
      ],
    },
    tags: ['Next.js', 'TypeScript'],
    links: [
      { href: 'https://anc-website-blond.vercel.app/', label: 'Live site' },
      { href: 'https://github.com/AnC-Council-IIT-Kanpur/Website', label: 'Code' },
    ],
  },
  {
    title: 'Rattleback Dynamics',
    kind: 'Undergraduate research project',
    context: 'With Prof. Dipayan Mukherjee, Mechanical Engineering, IIT Kanpur',
    dates: '2026',
    lenses: ['software', 'data'],
    views: {
      all: [
        {
          items: [
            'Extended a rolling rattleback model to slipping contact friction using the Moffatt–Shimomura contact laws, written up as a paper with Prof. Mukherjee',
            'Built an interactive 3D simulator that runs the same equations in the browser, with rolling, Coulomb and viscous contact, live checks and nine ready-made cases from the paper',
            'Added one-parameter sweeps, overlaid run history and CSV, PNG and JSON export, plus a link that reopens the exact setup',
          ],
        },
      ],
    },
    tags: ['MATLAB', 'JavaScript', 'Dynamics', 'LaTeX'],
    links: [
      { href: 'https://vaibhav-itauriya.github.io/ugp-rattleback/', label: 'Simulator' },
      { href: 'https://github.com/vaibhav-itauriya/ugp-rattleback/blob/main/paper/Itauriya_Mukherjee_rattleback.pdf', label: 'Paper' },
      { href: 'https://github.com/vaibhav-itauriya/ugp-rattleback', label: 'Code' },
    ],
  },
  {
    title: 'Satellite-Map CycleGAN',
    kind: 'Satellite image to map translation',
    context: 'EE655 Computer Vision and Deep Learning, Prof. Koteswar Jerripothula',
    dates: 'Apr’25',
    lenses: ['data'],
    views: {
      all: [{ items: ['Trained a CycleGAN in PyTorch that translates satellite images into maps and back, written up as a short research paper'] }],
    },
    tags: ['PyTorch', 'CycleGAN', 'Computer Vision'],
    links: [{ href: 'https://github.com/vaibhav-itauriya/EE655-CV-DL', label: 'Code' }],
  },
  {
    title: 'SARCathon 2024',
    kind: 'FAQ search engine',
    context: 'AI hackathon by SARC, IIT Bombay. Team Chanakya',
    dates: 'Oct’24',
    lenses: ['software'],
    views: {
      all: [
        {
          items: [
            'Flask app with fuzzy matching and semantic search using Sentence Transformers and FAISS, plus live suggestions, search history and answer feedback',
          ],
        },
      ],
    },
    tags: ['Flask', 'FAISS', 'Sentence Transformers'],
    links: [{ href: 'https://github.com/vaibhav-itauriya/SARCathon-2024---AI-Hackathon', label: 'Code' }],
  },
  {
    title: 'Course Portal',
    kind: 'Course management app',
    context: 'Personal project',
    dates: 'Jan’25',
    lenses: ['software'],
    views: { all: [{ items: ['Sign up, log in and manage courses, built with React, TypeScript and Supabase'] }] },
    tags: ['React', 'Supabase'],
    links: [
      { href: 'https://course-portal-jet.vercel.app', label: 'Live site' },
      { href: 'https://github.com/vaibhav-itauriya/course-portal', label: 'Code' },
    ],
  },
  {
    title: 'Vidya Vaani',
    kind: 'Live captions for lectures',
    context: 'Under Prof. Ashutosh Modi, CSE, IIT Kanpur',
    lenses: ['software'],
    views: {
      all: [
        {
          items: [
            'Developed a mobile app for an ASR and NLP model that generates real-time captions for engineering class lectures',
          ],
        },
      ],
    },
    tags: ['ASR', 'NLP', 'Mobile'],
  },
  {
    title: 'DeeployCV',
    kind: 'Deepfake detection',
    context: 'Google Developer Group, IIT Kanpur',
    dates: 'Jan’25',
    lenses: ['data'],
    views: {
      all: [
        {
          items: [
            'Upload a photo and the model tells you if it is real or a deepfake, built with Keras and Streamlit',
            'Assignments along the way covered OpenCV, Pillow and pre-trained deep learning models',
          ],
        },
      ],
    },
    tags: ['Keras', 'Streamlit', 'OpenCV'],
    links: [
      { href: 'https://github.com/vaibhav-itauriya/DeeployCV', label: 'Code' },
      { href: 'https://github.com/vaibhav-itauriya/231115_Vaibhav_Itauriya_DeeployCV', label: 'Assignments' },
    ],
  },
  {
    title: 'IR Wing Website',
    kind: 'Website',
    context: 'International Relations Wing, IIT Kanpur',
    dates: 'May’24',
    lenses: ['software'],
    views: { all: [{ items: ['Website for the International Relations Wing of IIT Kanpur, in HTML and CSS'] }] },
    tags: ['HTML', 'CSS'],
    links: [{ href: 'https://github.com/vaibhav-itauriya/IR-Wing-Repo', label: 'Code' }],
  },
];

export interface Achievement {
  result: string;
  event: string;
  detail: string;
  lenses: Track[];
  deck?: string;
}

export const achievements: { group: string; items: Achievement[] }[] = [
  {
    group: 'Business and product',
    items: [
      { result: '1st Place', event: 'JLR Global Hackathon', detail: 'Represented India across 7+ countries', lenses: ['software', 'product'] },
      { result: 'Top 10', event: 'Campus Beats 2026, ZS Associates (Market Entry and GTM)', detail: 'Secured a Pre-Placement Interview', lenses: ['strategy', 'product'] },
      { result: 'National Finalist', event: 'The Ken × Zerodha Case Competition 2026 (Agentic AI)', detail: 'Top 7% of 6,000+ teams', lenses: ['product', 'software'], deck: 'https://drive.google.com/drive/folders/1rmXOWr3sCEGJMYZGxm0dIfD0_a7c_9v7' },
      { result: '2nd Rank', event: 'Bizzaro, IITB SARC × Piramal (Product Pitch)', detail: '2nd of 300+ teams', lenses: ['product', 'strategy'] },
      { result: '5th Rank', event: 'ConsultQuest, IITB × Piramal (Education Reform Case)', detail: '5th of 300+ teams', lenses: ['strategy'], deck: 'https://drive.google.com/file/d/1fpC2OGzPoEarcZwNV92bJMdw3KQqC9Y7/view' },
      { result: '5th Rank', event: 'Inter IIT Tech Meet 13.0, Insolation Energy (Consulting Case)', detail: '5th across 23 IITs', lenses: ['strategy', 'data'], deck: 'https://drive.google.com/drive/folders/1joKOQDXkTQNDiPt96oiTBkT9BNmh4-sg' },
      { result: 'National Finalist', event: 'ProdMad 4.0, IIM Shillong (Product Management Case)', detail: 'Top 10 of 2,000+ participants', lenses: ['product'], deck: 'https://drive.google.com/file/d/1Ixv-eW6tBl4zTDOl60cLJ5Sr3T5d6ZgH/view' },
      { result: 'Semi-Finalist', event: 'Bruce Henderson Ideathon 2025, BCG (HealthTech GTM)', detail: 'Top 10% of 700+ applicants', lenses: ['strategy'], deck: 'https://drive.google.com/file/d/1YVOi0IinbkE6q9X999mv81Eu96AoXmaE/view' },
      { result: '2nd Rank', event: 'The Product League (Growing Mutual Funds on Dhan)', detail: 'Team The Pirates', lenses: ['product'], deck: 'https://drive.google.com/file/d/1bbcV02DqCcXov0IR2-dymh7_JkPZWx9T/view' },
    ],
  },
  {
    group: 'Technical',
    items: [
      { result: '4th Rank', event: 'Code & Compete, Techkriti’26 (Data Structures and Algorithms)', detail: 'Among 5,000+ participants nationally', lenses: ['software'] },
      { result: 'Rank 254', event: 'Goldman Sachs India Hackathon 2025', detail: 'Top 3% of 9,000+ participants', lenses: ['software', 'data'] },
      { result: 'Rank 384', event: 'Amazon ML Challenge 2026', detail: 'Top 1.5% of 25,000+ teams', lenses: ['software', 'data'] },
      { result: 'National Finalist', event: 'Project K, KUKU FM (AI and NLP Story Generation)', detail: 'Top 10 teams nationwide', lenses: ['software', 'data'] },
      { result: 'Best Implementation', event: 'SnT Summer Projects 2024, RAG Chatbot for IIT Kanpur', detail: 'Best of 50+ projects', lenses: ['software', 'data'] },
    ],
  },
  {
    group: 'Scholastic',
    items: [
      { result: 'NTSE Scholar', event: 'National Talent Search Examination, NCERT, Govt. of India', detail: 'National scholarship in 2021', lenses: [] },
      { result: 'SURGE 2025', event: 'Research Internship at IIT Kanpur', detail: 'Top 300 of 3,000+ applicants', lenses: [] },
      { result: 'Rank 956', event: 'SOF Science Olympiad 2021 (International)', detail: '2.4M+ participants from 70+ countries', lenses: [] },
    ],
  },
  {
    group: 'Sports',
    items: [
      { result: '1st Rank', event: 'Ultimate Frisbee Challenge, Inter-Hall Championship', detail: 'Champion 3 years in a row', lenses: [] },
    ],
  },
];

export interface Role {
  org: string;
  title: string;
  dates: string;
  path?: string;
  note?: string;
  items: string[];
  links?: { href: string; label: string }[];
}

export const leadership: Role[] = [
  {
    org: 'Students’ Placement Office, IIT Kanpur',
    title: 'Overall Placement Coordinator',
    dates: 'Mar’26 – Present',
    path: 'Company Coordinator from Jun’24, then Assistant Coordinator for 2025-26',
    note: 'Felicitated with a Certificate of Appreciation by the Director, IIT Kanpur',
    items: [
      'Leading a 4-tier team of 250+ members running internship and placement drives for 3000+ students and 500+ recruiters',
      'Grew Day-1 internship offers 20% YoY from 195 to 234, and accepted offers 10% from 172 to 190, in the 2026-27 season',
      'Built Japan hiring pipelines, represented IITK students at GSJTI before 20+ delegates, and onboarded 15+ Japanese firms like Zacros and Tokyo Ohka Kogyo',
      'Onboarded 7+ marquee firms such as LinkedIn, BNP Paribas, Point72, PocketFM and Irage Broking',
      'Set up placement preparation for 1300+ students through partnerships with GeeksforGeeks and Masai School',
      'Published the Annual Placement Booklet on sectoral trends, PPO conversion rates and skill benchmarks',
      'As Assistant Coordinator, helped secure 1300+ placement and 600+ internship offers in 2025-26',
    ],
  },
  {
    org: 'Product Club, IIT Kanpur',
    title: 'Secretary',
    dates: '2024',
    items: [
      'Organised 8+ PM sessions with 1000+ attendees alongside BITS, IIT Jodhpur and IIM Shillong',
      'Ran student product events including Product Talks and Prod-A-Thon',
      'Organised Nexus with TPF, YHills and Domnom, engaging 200+ competing teams with a ₹3L+ prize pool',
      'Put together Casebook 2025, a collection of product interview transcripts, decks and cases for students',
    ],
    links: [{ href: 'https://github.com/vaibhav-itauriya/Casebook-2025-Product-Club', label: 'Casebook 2025' }],
  },
  {
    org: 'Academic & Career Council, IIT Kanpur',
    title: 'Secretary',
    dates: '2024',
    items: [
      'Built the council’s official website with the other secretaries and coordinators',
      'Organised Career Connect and worked on the Career Fair, reaching 1000+ students',
    ],
  },
  {
    org: 'SATHEE, IIT Kanpur',
    title: 'Volunteer',
    dates: '',
    items: ['Mentored 15+ underprivileged students for Boards, JEE and NEET preparation'],
  },
  {
    org: 'NCC, 2 UP CTR, IIT Kanpur',
    title: 'Cadet, Technical Regiment',
    dates: '',
    items: ['Took part in training camps and community service activities'],
  },
];

export const portfolioFolder = 'https://drive.google.com/drive/folders/1Nm4Gr_9JRRmAuKND883s7ujTM4azgLKO';

export interface Deck {
  title: string;
  brief: string;
  result?: string;
  href: string;
  lenses: Track[];
}

export const decks: Deck[] = [
  { title: 'Pacto', brief: 'The Ken × Zerodha 2026, Agentic AI Build Track. Money-backed accountability agent', result: 'National Finalist', href: 'https://drive.google.com/drive/folders/1rmXOWr3sCEGJMYZGxm0dIfD0_a7c_9v7', lenses: ['product', 'software'] },
  { title: 'LoreDrop', brief: 'CS253 project. Campus event platform for all 47 student clubs at IIT Kanpur', href: 'https://drive.google.com/drive/folders/1mLWXR7MXlehWiwf1G0hj-TUxZl1VWUfK', lenses: ['product', 'software'] },
  { title: 'Solar Waste in India', brief: 'Inter IIT Tech Meet 13.0, Insolation Energy. Forecast to 2040 and a national recycling plan, report and deck', result: '5th of 23 IITs', href: 'https://drive.google.com/drive/folders/1joKOQDXkTQNDiPt96oiTBkT9BNmh4-sg', lenses: ['strategy', 'data'] },
  { title: 'Growing Mutual Funds on Dhan', brief: 'The Product League. Strategy to reach 1 million+ mutual fund users in 12 months', result: '2nd Rank', href: 'https://drive.google.com/file/d/1bbcV02DqCcXov0IR2-dymh7_JkPZWx9T/view', lenses: ['product', 'strategy'] },
  { title: 'BioMorph', brief: 'ProdMad 4.0, IIM Shillong. App for bio-printed organ transplants, with personas, Figma flows and phased GTM', result: 'National Finalist', href: 'https://drive.google.com/file/d/1Ixv-eW6tBl4zTDOl60cLJ5Sr3T5d6ZgH/view', lenses: ['product'] },
  { title: 'ConsultQuest', brief: 'IITB × Piramal. Education reform case, Team Chanakya', result: '5th of 300+ teams', href: 'https://drive.google.com/file/d/1fpC2OGzPoEarcZwNV92bJMdw3KQqC9Y7/view', lenses: ['strategy'] },
  { title: 'Bruce Henderson Ideathon', brief: 'BCG 2025. HealthTech GTM', result: 'Top 10%', href: 'https://drive.google.com/file/d/1YVOi0IinbkE6q9X999mv81Eu96AoXmaE/view', lenses: ['strategy'] },
  { title: 'Zomato for Street Food', brief: 'PMx Virtual Champs. Bringing Guwahati’s street food vendors onto Zomato', href: 'https://drive.google.com/file/d/1EeBTIjiZur1GPMtyGi3i_gTpMoGfLF3u/view', lenses: ['product'] },
  { title: 'Swiggy on Campus', brief: 'Swiggy Food for Thought, Team Chanakya. Making Swiggy the go-to food companion on campus', href: 'https://drive.google.com/file/d/1IvWMjw4ackZUqaryWUh9ipx6PftWDVZm/view', lenses: ['product', 'strategy'] },
];

export const education = [
  { degree: 'B.Tech, Mechanical Engineering', school: 'Indian Institute of Technology Kanpur', years: '2023 – 2027', score: 'CPI 7.4/10' },
  { degree: 'CBSE Class XII', school: 'The Gramodaya International College, Mauranipur', years: '2023', score: '91.4%' },
  { degree: 'CBSE Class X', school: 'The Gramodaya International College, Mauranipur', years: '2021', score: '94.8%' },
];

export const courses = [
  { name: 'Software Development and Operations', starred: true },
  { name: 'Fundamentals of Programming' },
  { name: 'Computer Vision and Deep Learning' },
  { name: 'Statistical Methods and Applications' },
  { name: 'Real Analysis and Linear Algebra' },
  { name: 'Introduction to Management' },
  { name: 'Neural Networks and Deep Learning (Online)' },
];

export const skills: { group: string; lenses: Track[]; items: string[] }[] = [
  { group: 'Languages', lenses: ['software', 'data'], items: ['C/C++', 'Python', 'SQL', 'TypeScript', 'JavaScript', 'HTML'] },
  { group: 'Web and backend', lenses: ['software'], items: ['Next.js', 'React', 'Node.js', 'Django', 'REST APIs'] },
  { group: 'Cloud and databases', lenses: ['software', 'data'], items: ['AWS Lambda', 'API Gateway', 'Redshift', 'DynamoDB', 'MongoDB', 'Redis', 'ChromaDB', 'Docker', 'CI/CD'] },
  { group: 'AI and ML', lenses: ['software', 'data'], items: ['PyTorch', 'LightGBM', 'XGBoost', 'Scikit-learn', 'Hugging Face', 'LangChain', 'RAG', 'MCP', 'Agentic AI', 'Prompt Evals'] },
  { group: 'Data and analytics', lenses: ['data', 'strategy', 'product'], items: ['Pandas', 'Excel', 'Power BI', 'GA4', 'Regression', 'Hypothesis Testing', 'A/B Testing', 'ARIMA'] },
  { group: 'Product tools', lenses: ['product'], items: ['Figma', 'Lucidchart', 'Mixpanel', 'Amplitude', 'Jira', 'Notion'] },
  { group: 'Frameworks', lenses: ['product', 'strategy'], items: ['PRD', 'JTBD', 'RICE', 'MoSCoW', 'Funnels', 'Market Sizing', 'Cost-Benefit Analysis'] },
];

export const certifications = [
  { name: 'Natural Language Processing with Classification and Vector Spaces', provider: 'DeepLearning.AI on Coursera', link: 'https://coursera.org/share/294bcd515ccae9ec4e09bea6d0b04f4e' },
  { name: 'Neural Networks and Deep Learning', provider: 'DeepLearning.AI on Coursera', link: 'https://coursera.org/share/d0f9b6533b1e1c2e10915aa567851ea1' },
  { name: 'Developing Back-End Apps with Node.js and Express', provider: 'IBM on Coursera', link: 'https://coursera.org/share/8d7e182faa756f088847fce31bb0cd79' },
  { name: 'MATLAB Onramp', provider: 'MathWorks', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=789a41ba-38de-4128-8ba5-d2ed38c47e79&' },
  { name: 'Simulink Onramp', provider: 'MathWorks', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da5c24e5-fa35-4623-83ad-f572185af38a&' },
];

export const contact = {
  emails: ['vaibhav23@iitk.ac.in', 'vaibhavitauriya@gmail.com'],
  phone: { display: '+91 91251 56329', href: 'tel:+919125156329' },
  location: 'Kanpur, Uttar Pradesh, India',
  github: 'https://github.com/vaibhav-itauriya',
  linkedin: 'https://in.linkedin.com/in/vaibhav-itauriya/',
  instagram: 'https://www.instagram.com/vaibhav_itauriya/',
};
