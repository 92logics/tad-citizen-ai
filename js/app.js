(function () {
  "use strict";

  var PDF = "https://www.tad.org/content/rfp/TAD_AI_Citizen_Engagement.pdf";

  var CHIPS = [
    "What is the District asking for?",
    "Which channels does the RFP require?",
    "Which languages are required at launch?",
    "Who may answer vendor questions?",
    "When and where are proposals due?",
    "What did the RFP report for 2024?",
    "Which systems does the RFP name?",
    "Will the platform decide a protest or a value?",
    "What is my property worth?",
    "Do I qualify for a homestead exemption?"
  ];

  var INTENTS = [
    {
      id: "greeting",
      phrases: ["hello", "hi", "hey", "help", "what can you do", "what can i ask", "get started"],
      answer: [
        "This is a scripted citizen-engagement sample. It only answers from the public Tarrant Appraisal District RFP for a 2026 AI Citizen Engagement Platform.",
        "It can describe the solicitation: purpose, channels, languages, submission rules, schedule, named systems, and the rule that the platform must not make an automated decision on value, eligibility, protests, confidentiality, or legal rights.",
        "It will not look up an account, estimate a value, or say whether someone qualifies for an exemption. Those topics are not in the RFP."
      ],
      source: "Scope of this prototype. Notice: " + PDF
    },
    {
      id: "about-demo",
      phrases: ["is this official", "are you tad", "are you the district", "is this a bid", "who built", "92 logics", "prototype", "not a bid", "official system"],
      answer: [
        "No. This page is a prototype by 92 Logics. It is not an official Tarrant Appraisal District system, it is not connected to District records, and it is not a proposal or a bid.",
        "The only source scripted into it is the public RFP PDF. District staff would control approved content, disclaimers, and escalation on a real platform. That control is not exercised here."
      ],
      source: "RFP §§ 1.1 and 4.2 (District control of public messages). Prototype label is 92 Logics, not the District."
    },
    {
      id: "purpose",
      phrases: ["what is the rfp", "what is this rfp", "what are you", "what is the district asking", "purpose", "citizen engagement", "what is the platform", "scope of services", "what does tad want", "solicitation"],
      answer: [
        "The Tarrant Appraisal District solicits sealed proposals for an enterprise AI Citizen Engagement Platform. The stated purpose is voice, chat, email, website assistance, knowledge management, analytics, and future integrations.",
        "The District wants a long-term platform that improves taxpayer service while preserving security, transparency, District control, and future scalability. It says it is not seeking an experimental prototype for the production service.",
        "Objectives named in the RFP include seasonal surges and repetitive inquiries, consistent grounded answers, more self-service and first-contact resolution, accessible multilingual 24/7 service, better website content, authorized communication history, and actionable analytics."
      ],
      source: "RFP §§ 1.1, 3.3, and 4.1."
    },
    {
      id: "who",
      phrases: ["who is tad", "what is tad", "tarrant appraisal", "what does the district do", "taxing units", "political subdivision", "who is the buyer", "about the district"],
      answer: [
        "The buyer is the Tarrant Appraisal District, a political subdivision of the State of Texas established under the Texas Property Tax Code. It appraises property subject to ad valorem taxation in Tarrant County.",
        "The RFP says the District appraises taxable property within Tarrant County for seventy-three taxing units, and that it serves property owners, businesses, taxing units, and the public through appraisal, exemption administration, ownership maintenance, public assistance, and Appraisal Review Board support.",
        "This prototype does not explain how those duties apply to a particular owner or property."
      ],
      source: "RFP §§ 1.2 and 3.1."
    },
    {
      id: "channels",
      phrases: ["channels", "voice", "chat", "email", "website", "web form", "web-form", "phone", "after hours", "after-hours", "sms", "text message", "handoff", "multichannel", "multi-channel"],
      answer: [
        "The RFP requires coordinated voice, website, email, chat, web-form, and future-channel capabilities. It calls for natural-language service, routing, after-hours assistance, multilingual interactions, staff handoff, source-grounded website assistance, email triage and drafting with staff review, and controlled referrals.",
        "The District controls approved content, business rules, disclaimers, escalation, and public-facing messages.",
        "SMS is named as a possible future or optional capability, not as something this RFP requires for the initial award unless a final statement of work includes it. Current channels the RFP lists are telephone, website, email, walk-in service, written correspondence, and outreach."
      ],
      source: "RFP §§ 3.2, 3.4, 4.2, and 4.9."
    },
    {
      id: "languages",
      phrases: ["language", "languages", "spanish", "english", "vietnamese", "multilingual", "translation", "espanol", "español"],
      answer: [
        "Acceptance criteria in the RFP say English and Spanish are available at launch, and Vietnamese is available at launch or at a District-approved milestone.",
        "Separately, the RFP says the District reported 4,438 Spanish-language calls in 2024. That figure is the RFP’s report, not a live count, and this demo cannot translate a property question or look up a Spanish-language account.",
        "This script itself is English. A short refusal in Spanish is used only to say the demo does not cover personal records."
      ],
      source: "RFP §§ 5.4 and 3.1."
    },
    {
      id: "contact",
      phrases: ["who do i contact", "who to contact", "procurement contact", "greg garza", "ggarza", "questions", "addendum", "no contact", "written questions", "ask a question"],
      answer: [
        "Only the designated procurement contact may answer questions about this solicitation: Greg Garza, ggarza@tad.org.",
        "Written questions are due Monday, October 5, 2026 at 5:00 p.m. Central Time. The RFP schedules District responses or an addendum for Friday, October 9, 2026. Written responses and addenda become part of the solicitation. Oral or informal statements are not binding.",
        "From issuance until final award, cancellation, or conclusion, proposers and their representatives must not contact Board members, District employees, consultants, or agents about this procurement except through that contact. Unauthorized contact may result in disqualification.",
        "This prototype is not that contact, and sending a message from this page is not possible."
      ],
      source: "RFP § 1.4 and Appendix D."
    },
    {
      id: "deadline",
      phrases: ["deadline", "when are proposals due", "proposals due", "when and where", "when is it due", "due date", "submission", "how to submit", "how do i submit", "where do i send", "handley", "fort worth", "where is the office", "dropping off", "proposal delivery", "usb", "hard copy", "sealed", "email submission", "fax"],
      answer: [
        "Proposals must be received before 10:00 a.m. Central Time on Wednesday, October 21, 2026, at Greg Garza, Tarrant Appraisal District, 2500 Handley-Ederville Road, Fort Worth, Texas 76118.",
        "Submit one signed original hard copy and one complete searchable digital copy on USB. If confidentiality is claimed, also submit a separate searchable redacted public copy. The package marking is specified in the RFP: sealed proposal, 2026 AI Citizen Engagement Platform RFP, due October 21, 2026 before 10:00 a.m. Central Time, attention Greg Garza.",
        "Email and facsimile submissions are not accepted unless an addendum authorizes them. A proposal received at or after the deadline will not be considered. The District’s date-and-time record controls. Postmarks do not establish timely receipt.",
        "The street address above is the proposal-delivery address printed in the RFP. This demo does not have walk-in hours or a separate public-counter address."
      ],
      source: "RFP §§ 2.1 through 2.4."
    },
    {
      id: "term",
      phrases: ["contract term", "how long", "renewal", "renewals", "one year", "term of the contract", "appropriation"],
      answer: [
        "The anticipated term is one year with four optional renewals, subject to annual appropriations and required approvals, including Board approval.",
        "The RFP says the contract must preserve the District’s continuing right to terminate at the end of each budget period, conditioned on a best-efforts attempt to obtain and appropriate funds. Issuing the RFP does not obligate the District to award a contract."
      ],
      source: "RFP procurement snapshot, §§ 1.3 and 8.1."
    },
    {
      id: "evaluation",
      phrases: ["evaluation", "scoring", "points", "best value", "price", "tco", "demonstration score", "appendix c", "how will you score", "criteria"],
      answer: [
        "The RFP uses a 100-point best-value framework: Technical and Functional Fit 30; Security, Privacy, AI Governance, Data Ownership, and Contract Protections 20; Implementation Approach and Support 15; Vendor Qualifications and References 10; Demonstration and Scenario Testing 10; Price and Total Cost of Ownership 15.",
        "Evaluators assign a 0-to-3 rating to each published category. The weighted score is the rating divided by 3, multiplied by the category points. The District is not required to pick the lowest price.",
        "Appendix C is an optional internal staff aid. It is not a vendor response form, not a pass/fail schedule, and it does not replace the published category scoring."
      ],
      source: "RFP §§ 7.3, 7.4, 7.6, and 7.7."
    },
    {
      id: "volumes",
      phrases: ["2024", "how many calls", "call volume", "incoming calls", "webmaster", "counter customers", "statistics", "stats", "workload", "volumes"],
      answer: [
        "The RFP states that in 2024 the District reported 91,928 incoming calls, 3,390 outgoing calls, 47,763 counter customers, 4,438 Spanish-language calls, and 9,828 webmaster emails.",
        "Those are the District’s figures as printed in the RFP. This prototype has no live telephone, counter, or email data, and it does not update or verify the 2024 report."
      ],
      source: "RFP § 3.1. Quoted as printed. Not a live statistic."
    },
    {
      id: "systems",
      phrases: ["systems", "true prodigy", "cama", "sharepoint", "microsoft 365", "sql server", "gis", "telephony", "integration", "what software", "existing environment"],
      answer: [
        "The RFP says current channels include telephone, website, email, walk-in service, written correspondence, and outreach. It says the District uses Microsoft 365, SharePoint, SQL Server, GIS resources, enterprise telephony, and the True Prodigy CAMA platform.",
        "Vendors are asked to propose secure, documented, supportable integration methods. Potential targets named are Microsoft 365, SharePoint, SQL Server, GIS, telephony, True Prodigy or a successor CAMA, and a future CRM.",
        "A future-roadmap item, such as an employee assistant, SMS, or public-information-request tracking, is not required for the initial award unless the final statement of work includes it. This demo is not connected to any of those systems."
      ],
      source: "RFP §§ 3.2, 3.4, and 4.8."
    },
    {
      id: "governance",
      phrases: ["automated decision", "decide a protest", "decide my protest", "will the ai", "will the platform", "can the ai", "can the platform", "hallucination", "training data", "train the model", "human oversight", "valuation decision", "eligibility decision", "grounding", "refuse", "escalat"],
      answer: [
        "The RFP says public responses must be grounded in approved sources, and unsupported requests must be refused or escalated.",
        "It also says there is to be no automated decision affecting valuation, eligibility, protests, confidentiality, or legal rights without authorized human oversight.",
        "District data and interactions are not to be used to train or improve public, shared, or third-party foundation models without express written authorization. The RFP also bars sale, advertising use, profiling, unrelated monetization, or secondary use of District data.",
        "This page follows the refusal rule in miniature: it will not value property, decide a protest, or judge an exemption."
      ],
      source: "RFP §§ 5.4, 6.1, and 6.3."
    },
    {
      id: "knowledge",
      phrases: ["knowledge", "sources", "faq", "citation", "grounded", "what do you know", "approved content", "documents"],
      answer: [
        "The RFP requires the platform to ingest District-approved webpages, documents, forms, policies, FAQs, and procedures, with approval, exclusion, testing, publication, versioning, rollback, re-indexing, and source traceability, and to keep public and internal material apart.",
        "The only source approved for this prototype is the public RFP itself. It does not contain the District’s taxpayer FAQs, forms, or appraisal manuals, so those questions are refused."
      ],
      source: "RFP § 4.4."
    },
    {
      id: "schedule",
      phrases: ["schedule", "timeline", "kickoff", "bafo", "shortlist", "board consideration", "demonstration dates", "when is the board", "appendix d", "addendum date"],
      answer: [
        "Appendix D prints this schedule: Commercial Recorder publication Friday, September 18, 2026; written questions due Monday, October 5, 2026 at 5:00 p.m. Central Time; District responses or addendum Friday, October 9, 2026; proposals due Wednesday, October 21, 2026 before 10:00 a.m. Central Time.",
        "Later targets, some of them only if the District asks: initial evaluation October 22–27, 2026; shortlist notice if applicable Wednesday, October 28, 2026; demonstrations or interviews if requested November 2–4, 2026; BAFO if requested Friday, November 6, 2026; final evaluation and recommendation November 9–10, 2026; Board consideration Tuesday, November 17, 2026, subject to the Board calendar; contract negotiation in November 2026; target kickoff January 2027, subject to award, contract, appropriations, and authorization.",
        "This demo does not know whether any addendum has changed those dates."
      ],
      source: "RFP Appendix D."
    },
    {
      id: "insurance",
      phrases: ["insurance", "cyber liability", "general liability", "errors and omissions", "workers compensation", "coverage limits"],
      answer: [
        "The RFP lists recommended minimum limits for proposal and risk review, and says they are subject to negotiation before contract execution: commercial general liability $1,000,000 per occurrence and $2,000,000 aggregate; technology errors and omissions $2,000,000 per claim; cyber liability $5,000,000 per claim; workers’ compensation statutory; employer’s liability $1,000,000; automobile liability $1,000,000 combined single limit if applicable; umbrella or excess liability $3,000,000.",
        "Proposers must disclose current coverage and any variance. The District may require different limits. These figures are the RFP’s recommendations, not a certificate and not proof of anyone’s coverage."
      ],
      source: "RFP § 8.7."
    },
    {
      id: "phases",
      phrases: ["implementation", "phases", "rollout", "discovery", "go-live", "training", "acceptance"],
      answer: [
        "The RFP sketches six preliminary phases: discovery; knowledge and configuration; voice and website; digital workflows and integrations; analytics and readiness; deployment and stabilization.",
        "Acceptance criteria include contracted capabilities under the final statement of work, accepted integrations, completed District scenario testing, public responses grounded in approved sources with unsupported requests refused or escalated, administrator changes without vendor programming, training and support contacts, data export and transition procedures, and English and Spanish at launch with Vietnamese at launch or a District-approved milestone.",
        "Nothing on this page has been accepted by the District."
      ],
      source: "RFP §§ 5.3 and 5.4."
    },
    {
      id: "analytics",
      phrases: ["analytics", "dashboard", "reporting", "unanswered", "first contact", "metrics"],
      answer: [
        "The RFP asks for role-secured dashboards and exports covering volumes, topics, intent, resolution, escalation, unanswered questions, handling time, transfers, source use, confidence and fallback behavior, and quality indicators.",
        "This prototype has none of those dashboards. It does not invent a resolution rate or a current volume."
      ],
      source: "RFP § 4.6."
    },
    {
      id: "history",
      phrases: ["communication history", "transcript", "call history", "interaction history"],
      answer: [
        "The RFP asks for an authorized consolidated history across configured channels, associated to owners, agents, accounts, and topics when the information is reliable. Matching must be transparent, confidence-based, auditable, and correctable.",
        "This demo stores nothing. It does not have an owner, an agent, or an account."
      ],
      source: "RFP § 4.3."
    },
    {
      id: "protest-procurement",
      phrases: ["procurement protest", "protest the solicitation", "protest a proposal", "how to protest the rfp", "protest procedure"],
      answer: [
        "The RFP has a procurement protest, which is not an appraisal protest. A proposer must file a written protest with the designated procurement contact no later than 5:00 p.m. Central Time on the second business day after the proposer knew or reasonably should have known the basis. A solicitation protest must be filed before the proposal deadline. A protest of an evaluation, intended award, or award must be filed within two business days after notice.",
        "The protest must identify the solicitation, each ground, supporting facts and documents, and the remedy requested. Filing does not automatically stay the procurement. This page cannot file one."
      ],
      source: "RFP § 1.8."
    }
  ];

  var PERSONAL = [
    {
      id: "value",
      test: /\b(worth|market value|appraised value|assessed value|appraisal of my|value of my|my house|my home|my property value|how much is my|what is my property|my land)\b/,
      answer: [
        "Refused. This prototype cannot say what a property is worth.",
        "The public RFP does not contain appraisal rolls or value calculations, and it forbids an automated decision affecting valuation without authorized human oversight. No account was looked up, because this page has no account access."
      ],
      source: "Outside the RFP. Related limit: § 6.3."
    },
    {
      id: "exemption",
      test: /\b(homestead|do i qualify|am i eligible|my exemption|exemption for me|disabled veteran|over 65|over-65|agricultural use for my)\b/,
      answer: [
        "Refused. This prototype will not say whether you qualify for an exemption.",
        "The RFP names exemption administration as District work. It does not state eligibility rules, and it forbids an automated decision affecting eligibility without authorized human oversight."
      ],
      source: "Outside the RFP. Related limit: §§ 3.1 and 6.3."
    },
    {
      id: "protest-case",
      test: /\b(my protest|protest status|hearing date|arb hearing|informal hearing|did i win|settle my|value protest)\b/,
      answer: [
        "Refused. This prototype will not report or predict a protest, a hearing, or an Appraisal Review Board result.",
        "The RFP mentions protests as part of the District’s seasonal workload and says the platform must not make an automated decision affecting protests or legal rights without authorized human oversight. It does not publish the steps for filing an appraisal protest."
      ],
      source: "Outside the RFP. Related limit: §§ 3.1 and 6.3."
    },
    {
      id: "account",
      test: /\b(my account|account number|parcel|property id|owner of|tax bill|what do i owe|payment plan|how do i pay|my address|rendition for my)\b/,
      answer: [
        "Refused. This prototype has no property account, tax bill, ownership record, or payment instructions.",
        "The RFP is a solicitation for a future engagement platform. It is not a lookup tool, and this demo is not connected to the CAMA system the RFP names."
      ],
      source: "Outside the RFP. Named system only: True Prodigy CAMA, § 3.2."
    }
  ];

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isSpanish(raw) {
    return /[áéíóúñ¿¡]/i.test(raw) || /\b(hola|exenci[oó]n|aval[uú]o|propiedad|impuesto|protesta|cu[aá]nto|mi casa)\b/i.test(raw);
  }

  function asksPolicy(q) {
    return /\b(will|can|does|may|should) (the |this )?(ai|platform|system|assistant|bot|rfp)\b/.test(q) ||
      /\bautomated decision\b/.test(q) ||
      /\b(platform|rfp|solicitation) (decide|value|determine)\b/.test(q);
  }

  function scoreIntent(q, intent) {
    var score = 0;
    for (var i = 0; i < intent.phrases.length; i++) {
      var phrase = intent.phrases[i];
      if (q.indexOf(phrase) !== -1) {
        score += phrase.split(" ").length >= 2 ? 4 : 2;
      }
    }
    return score;
  }

  function bestIntent(q) {
    var best = null;
    var bestScore = 0;
    for (var i = 0; i < INTENTS.length; i++) {
      var s = scoreIntent(q, INTENTS[i]);
      if (s > bestScore) {
        bestScore = s;
        best = INTENTS[i];
      }
    }
    if (!best || bestScore < 2) return null;
    return best;
  }

  function replyFor(raw) {
    var q = norm(raw);
    if (!q) {
      return refuse(["Type a question. If it is not answered by the public RFP, this desk will say so."], "No question to match.");
    }

    if (isSpanish(raw) && !bestIntent(q)) {
      return refuse([
        "Este prototipo solo tiene un guion en inglés, tomado del RFP público. No consulta cuentas, avalúos, exenciones ni protestas.",
        "The RFP requires English and Spanish at launch for the real platform. This demo does not translate and does not look up records."
      ], "Outside the scripted English RFP answers. Launch languages: § 5.4.");
    }

    if (!asksPolicy(q)) {
      for (var i = 0; i < PERSONAL.length; i++) {
        if (PERSONAL[i].test.test(q)) {
          return refuse(PERSONAL[i].answer, PERSONAL[i].source);
        }
      }
    }

    var intent = bestIntent(q);
    if (!intent) {
      return refuse([
        "Refused. The public RFP used for this demo does not cover that question.",
        "This desk will not invent a property value, an exemption decision, a protest outcome, office hours, a payment method, or a phone number for taxpayer service. None of those are stated as citizen instructions in the RFP.",
        "Questions about the solicitation itself go to Greg Garza at ggarza@tad.org. Written questions are due Monday, October 5, 2026 at 5:00 p.m. Central Time. This page cannot send that email."
      ], "Not in the scripted scope of " + PDF + ".");
    }
    return { kind: "answer", paragraphs: intent.answer, source: intent.source };
  }

  function refuse(paragraphs, source) {
    return { kind: "refuse", paragraphs: paragraphs, source: source };
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function addBubble(role, result, question) {
    var thread = document.getElementById("thread");
    if (question) {
      var user = el("div", "bubble user");
      user.appendChild(el("div", "tag", "You"));
      user.appendChild(el("p", null, question));
      thread.appendChild(user);
    }
    var bot = el("div", "bubble bot" + (result.kind === "refuse" ? " refuse" : ""));
    bot.appendChild(el("div", "tag", result.kind === "refuse" ? "Refused · scripted" : "From the RFP · scripted"));
    result.paragraphs.forEach(function (p) {
      bot.appendChild(el("p", null, p));
    });
    bot.appendChild(el("p", "source", result.source));
    thread.appendChild(bot);
    thread.scrollTop = thread.scrollHeight;
  }

  function ask(text) {
    var cleaned = String(text || "").trim();
    if (!cleaned) return;
    addBubble("user", replyFor(cleaned), cleaned);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var chips = document.getElementById("chips");
    CHIPS.forEach(function (label) {
      var b = el("button", "chip", label);
      b.type = "button";
      b.addEventListener("click", function () { ask(label); });
      chips.appendChild(b);
    });

    addBubble("bot", {
      kind: "answer",
      paragraphs: [
        "Ask about the Tarrant Appraisal District’s public RFP for a 2026 AI Citizen Engagement Platform. Replies are a fixed script from that PDF, with the section named under each answer.",
        "A question about your own property, exemption, protest, or bill will be refused. This is not the District, and it cannot see an account."
      ],
      source: "Source file: " + PDF
    });

    document.getElementById("composer").addEventListener("submit", function (event) {
      event.preventDefault();
      var field = document.getElementById("ask");
      ask(field.value);
      field.value = "";
    });
  });
})();
