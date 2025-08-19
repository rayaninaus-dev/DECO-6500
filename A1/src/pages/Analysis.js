import React, { useState } from 'react';
import './Pages.css';
import { ExternalLink } from "lucide-react";

// === System Scope Component (MODIFIED with Accordion Feature) ===
const SystemScope = () => {
  // State to manage which section is currently open
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (group) => {
    // If the clicked section is already open, close it. Otherwise, open it.
    if (openSection === group) {
      setOpenSection(null);
    } else {
      setOpenSection(group);
    }
  };

  const refs = [
    {
      group: "Global Metrics & Methods (SDG 12.2 & benchmarking)",
      explanation: "This group (UN SDG 12.2 metadata; World Bank What a Waste 2.0; Eurostat municipal waste methodology) provides the canonical measurement framework, units, and benchmark data that anchor our SFD stocks and BOT axes: use the UN metadata to set Resource availability and SDG targets (MF/DMC) as evaluation metrics, use World Bank global/forecast tables to choose plausible parameter ranges and scenarios for Waste generation and infrastructure capacity, and use Eurostat methods to define recycling rate and inflow/outflow calculation rules so that model flows and empirical indicators are comparable to international practice.",
      items: [
        { title: "SDG 12.2 Metadata (Domestic Material Consumption & Material Footprint)", source: "UN Statistics Division", year: "updated", url: "https://unstats.un.org/sdgs/metadata/files/Metadata-12-02-01.pdf", why: "Defines internationally comparable indicators and units for efficient resource use—anchors the Resource availability stock and evaluation metrics." },
        { title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050", source: "World Bank Open Knowledge Repository", year: "2018", url: "https://openknowledge.worldbank.org/entities/publication/d3f9d45e-115f-559b-b14f-28552410e90a", why: "Comprehensive global dataset and projections on waste generation, collection, treatment, and costs—useful for parameter ranges, sensitivity checks, and cross-city benchmarking." },
        { title: "Municipal Waste Statistics & Recycling Rate Methodology", source: "Eurostat (Statistics Explained & metadata)", year: "2025", url: "https://ec.europa.eu/eurostat/statistics-explained/index.php/Municipal_waste_statistics", why: "Transparent methodology for recycling indicators and comparability—helps you define inflow/outflow measures and validate the Recycling behavior → Waste reduction pathway." }
      ]
    },
    {
      group: "Producer Responsibility & Policy Instruments",
      explanation: "OECD guidance on Extended Producer Responsibility supplies the institutional design levers and causal logic that directly populate our Policy_strength → Funding_allocated → Infrastructure_installation_rate loop: it clarifies how regulatory design translates into funding streams, producer fees, and infrastructure incentives, and therefore informs the policy-parameterization in the CLD (what types of policy increase funding, which incentives change industrial demand for recycled material) as well as likely delays, compliance mechanisms, and equity safeguards to include in the model.",
      items: [
        { title: "Extended Producer Responsibility: Updated Guidance for Efficient Waste Management", source: "OECD", year: "2016", url: "https://www.oecd.org/en/publications/extended-producer-responsibility_9789264256385-en.html", why: "Gold-standard design guidance for EPR schemes—directly informs Policy strength → Funding allocated → Infrastructure growth loops and material recovery incentives." }
      ]
    },
    {
      group: "HCI, Behavior Change & Visualisation",
      explanation: "Canonical HCI case studies (e.g., BinCam) and visualization projects (e.g., Trash Track) establish the operational pathways from Collected data → Dashboard_visibility → Public_awareness → Recycling_behavior: they show which UI patterns and feedback mechanisms reliably change household disposal actions, what interaction data you can expect (scan/weight logs, reporting rates), and how to design dashboards that produce salience without manipulation. These works feed the SFD’s auxiliary variables (reporting_probability, social_norms, campaign_effectiveness) and give effect-size priors for behavior-change interventions used in BOT scenarios.",
      items: [
        { title: "BinCam (CHI): Social Persuasion for Waste & Recycling", source: "ACM CHI 2012 session abstract", year: "2012", url: "https://chi2012.hosting.acm.org/program/desktop/Session169.html", why: "Canonical HCI example of feedback, social comparison, and gamification to shift disposal habits—evidence base for Public awareness → Recycling behavior causal links." }
      ]
    },
    {
      group: "Data Stewardship, Privacy & Ethics",
      explanation: "The FAIR principles, ACM Code of Ethics, and contextual-integrity frameworks specify how Collected data must be governed so model assumptions about data availability, freshness and usability are realistic: they define practices that reduce data loss/obsolescence (standardized formats, provenance, stewardship budgets), constrain what telemetry you ethically can collect (consent, minimisation), and provide the ethical rules that should be encoded as model constraints or decision rules (e.g., opt-out rates, redaction delays) to simulate realistic dashboard uptake and policy legitimacy.",
      items: [
        { title: "FAIR Guiding Principles for Scientific Data Management & Stewardship", source: "Scientific Data (Nature) — Wilkinson et al., 2016", year: "2016", url: "https://www.nature.com/articles/sdata201618", why: "Operationalises findable, accessible, interoperable, reusable data—directly supports the Collected data stock quality and interoperability across agencies." },
        { title: "ACM Code of Ethics and Professional Conduct", source: "Association for Computing Machinery", year: "2018 (current)", url: "https://www.acm.org/code-of-ethics", why: "Normative HCI/CS ethics baseline for responsible dashboards, persuasive UIs, and data minimisation in public-facing interventions." },
        { title: "Privacy as Contextual Integrity", source: "Helen Nissenbaum (open pdf)", year: "2010+", url: "https://nissenbaum.tech.cornell.edu/papers/H.%20Nissenbaum%2C%20_Privacy%20as%20Contextual%20Integrity.pdf", why: "Frames how context-appropriate data flows should work—guides consent, transparency, and purpose limitation in waste tracking & behavioural telemetry." }
      ]
    },
    {
      group: "Thematic Deep-Dives",
      explanation: "Domain-specific syntheses such as the Global E-waste Monitor and Ellen MacArthur Foundation materials supply sectoral constraints and systemic levers: they help you populate technology-specific Processing_yield, contamination profiles, and market-demand pathways (critical for Resource availability and recycled material uptake), and they provide the circular-economy policy toolkit that shapes long-term BOT recovery scenarios—i.e., which combinations of design-for-recycling, EPR, and market incentives produce sustained rebounds in resource availability.",
      items: [
        { title: "Global E-waste Monitor 2024", source: "ITU/UNITAR", year: "2024", url: "https://www.itu.int/hub/publication/d-gen-e_waste-01-2024/", why: "Up-to-date e-waste flows, policy coverage, and collection rates—useful for modelling resource scarcity pressure and infrastructure needs in electronics." },
        { title: "Circular Economy Primer (Definition & System Levers)", source: "Ellen MacArthur Foundation", year: "ongoing", url: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview", why: "Conceptual backbone for shifting from waste management to resource stewardship—helps position your SDG 12.2 objective in a broader, design-led frame." }
      ]
    }
  ];

  return (
    <div className="analysis-section">
      <div className="content-block">
        <h2>System Scope — Evidence Base</h2>
        <p className="main-description" style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', borderColor: '#3b82f6' }}>
            The following sources are tightly aligned with this project’s scope (SDG&nbsp;12.2, waste & resource
            recovery, HCI/behavioural interventions, and data governance). Each item includes a short note on how it
            supports our model assumptions, units, and design choices.
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          {refs.map((block) => (
            <div key={block.group} style={{ marginBottom: '2.5rem' }}>
              <h3 className="clickable-title" onClick={() => handleToggle(block.group)}>
                {block.group}
                <span className={`accordion-icon ${openSection === block.group ? 'open' : ''}`}>▼</span>
              </h3>
              
              {/* Accordion Content */}
              {openSection === block.group && (
                <div className="explanation-text">
                  <p><strong>Rationale:</strong> {block.explanation}</p>
                </div>
              )}

              <div className="scope-domains">
                {block.items.map((r) => (
                  <div key={r.url} className="domain-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
                      <div>
                        <h4>
                          <a href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                            {r.title}
                          </a>
                        </h4>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          {r.source} · {r.year}
                        </div>
                      </div>
                      <a href={r.url} target="_blank" rel="noreferrer" aria-label="Open reference">
                        <ExternalLink style={{ width: '1rem', height: '1rem', color: '#94a3b8' }} />
                      </a>
                    </div>
                    <p style={{ marginTop: '1rem' }}>{r.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="scope-overview">
            <h4>How these references constrain model scope</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '0.5rem' }}>
              <li>Units & comparability: UN SDG 12.2 metadata and Eurostat methodologies guide stock/flow units and BOT axes.</li>
              <li>Policy levers: OECD EPR and Australia’s Action Plan justify the <em>Policy strength → Funding → Infrastructure</em> loops.</li>
              <li>Behavioral pathways: CHI/Ubicomp cases and recycling behavior reviews justify <em>Public awareness → Recycling behavior → Waste</em> dynamics.</li>
              <li>Data ethics: FAIR + ACM Code + contextual integrity set guardrails for dashboards, telemetry, and public reporting.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

// === Main Analysis Page Component ===
const Analysis = () => {
  return (
    <div className="page analysis-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">System Analysis</h1>
          <p className="page-description">
            A comprehensive analysis of the energy feedback system, grounded in established research and aligned with sustainable development goals.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="analysis-content">
            
            {/* System Aims Section (from original file) */}
            <div className="analysis-section">
              <div className="content-block">
                <h2>System Aims</h2>
                <div className="aims-content">
                  <p className="main-description">
                    The system aims to advance the sustainable management and efficient use of natural resources by integrating behavioral data, recycling infrastructure, and policy feedback into a coherent model that supports evidence-based decision-making, enhances public awareness, and ensures ethical and equitable participation aligned with SDG 12.2.

                  </p>
                  
                  <div className="aims-grid">
                    <div className="aim-item">
                      <h4>🎯 Behavioral Change Through Feedback</h4>
                      <p>
                        Investigate the relationship between feedback frequency and energy conservation behaviors, 
                        based on established theories in environmental psychology and behavioral economics.
                      </p>
                      <div className="reference-link">
                        <a href="https://doi.org/10.1016/j.jenvp.2013.02.002" target="_blank" rel="noopener noreferrer">
                          Karlin et al. (2015): The effects of feedback on energy conservation
                        </a>
                      </div>
                    </div>

                    <div className="aim-item">
                      <h4>🌱 Sustainable Energy Practices</h4>
                      <p>
                        Promote long-term sustainable energy consumption patterns aligned with climate action goals 
                        and resource efficiency principles.
                      </p>
                      <div className="reference-link">
                        <a href="https://sdgs.un.org/goals/goal12" target="_blank" rel="noopener noreferrer">
                          UN SDG 12: Ensure sustainable consumption and production patterns
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Scope Section (Replaced with the new component) */}
            <SystemScope />

            {/* Supporting Framework Section (from original file) */}
            <div className="analysis-section">
              <div className="content-block">
                <h2>Theoretical Framework & Global Context</h2>
                <div className="framework-content">
                  <p>
                    This research is grounded in established theoretical frameworks and contributes 
                    to global sustainability objectives through evidence-based energy conservation strategies.
                  </p>
                  
                  <div className="framework-grid">
                    <div className="framework-item">
                      <h4>🧠 Behavioral Science Foundation</h4>
                      <p>Based on social cognitive theory, nudge theory, and environmental psychology principles</p>
                      <a href="https://doi.org/10.1146/annurev.psych.52.1.1" target="_blank" rel="noopener noreferrer">
                        Bandura (2001): Social Cognitive Theory →
                      </a>
                    </div>

                    <div className="framework-item">
                      <h4>💻 HCI Design Principles</h4>
                      <p>Human-centered design methodologies for environmental and sustainability applications</p>
                      <a href="https://www.webofscience.com/wos/woscc/full-record/WOS:001061209400001" target="_blank" rel="noopener noreferrer">
                        Rossi, E et al. (2023): Research Synergies between Sustainability and Human-Centered Design: A Systematic Literature Review →
                      </a>
                    </div>

                    <div className="framework-item">
                      <h4>📊 Energy Efficiency Research</h4>
                      <p>Evidence-based approaches to residential energy conservation and demand response</p>                      
                      <a href="https://www.iea.org/reports/energy-efficiency-2021" target="_blank" rel="noopener noreferrer">
                        IEA Energy Efficiency Report 2021 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;