import React, { useState } from 'react';
import './Pages.css';

const AIReflection = () => {
  const [activeTab, setActiveTab] = useState('tools');

  return (
    <div className="page ai-reflection-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">AI Tool Reflection</h1>
          <p className="page-description">
            Transparent documentation of AI collaboration and critical evaluation
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          {/* 核心声明区域 - 保持不变 */}
          <div className="commitment-hero">
            <div className="commitment-content">
              <div className="commitment-icon">🤝</div>
              <h2>AI as Collaborative Partner</h2>
              <p className="commitment-statement">
                This project utilized AI for ideation and drafting. All content was critically reviewed, 
                modified, and validated. <strong>Final analysis and conclusions are my own.</strong>
              </p>
            </div>
          </div>

          {/* 选项卡导航 - 保持不变 */}
          <div className="reflection-tabs">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                <span className="tab-icon">🛠️</span>
                AI Tools Used
              </button>
              <button 
                className={`tab-btn ${activeTab === 'engagement' ? 'active' : ''}`}
                onClick={() => setActiveTab('engagement')}
              >
                <span className="tab-icon">🔍</span>
                Critical Engagement
              </button>
              <button 
                className={`tab-btn ${activeTab === 'ownership' ? 'active' : ''}`}
                onClick={() => setActiveTab('ownership')}
              >
                <span className="tab-icon">👤</span>
                My Contributions
              </button>
              <button 
                className={`tab-btn ${activeTab === 'learning' ? 'active' : ''}`}
                onClick={() => setActiveTab('learning')}
              >
                <span className="tab-icon">💡</span>
                Key Learnings
              </button>
            </div>

            {/* AI工具使用 - [已用新内容更新] */}
            <div className={`tab-content ${activeTab === 'tools' ? 'active' : ''}`}>
              <p style={{textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic', color: '#4a5568'}}>
                AI-powered tools were used at various stages to enhance efficiency in information retrieval, drafting, and systematic modeling.
              </p>
              <div className="tools-grid">
                <div className="tool-card gpt4">
                  <div className="tool-header">
                    <div className="tool-logo">🧠</div>
                    <div>
                      <h3>ChatGPT (GPT-5 Thinking mini)</h3>
                      <span className="tool-purpose">Drafting & Modeling Aid</span>
                    </div>
                  </div>
                  <div className="tool-tasks">
                    <div className="task-tag">Drafting Text</div>
                    <div className="task-tag">Structuring CLD→SFD Steps</div>
                    <div className="task-tag">Generating Clusters and Elements</div>
                    <div className="task-tag">Explaining BOTs</div>
                  </div>
                </div>

                <div className="tool-card gemini">
                  <div className="tool-header">
                    <div className="tool-logo">🌐</div>
                    <div>
                      <h3>Gemini 2.5 Pro </h3>
                      <span className="tool-purpose">Research & Context</span>
                    </div>
                  </div>
                  <div className="tool-tasks">
                    <div className="task-tag">Retrieving Authoritative Literature</div>
                    <div className="task-tag">Finding Indicator Explanations</div>
                    <div className="task-tag">Referencing Project Files</div>
                  </div>
                </div>

                <div className="tool-card claude">
                  <div className="tool-header">
                    <div className="tool-logo">💻</div>
                    <div>
                      <h3>Claude 4.0 Sonnet</h3>
                      <span className="tool-purpose">Prototyping & Development</span>
                    </div>
                  </div>
                  <div className="tool-tasks">
                    <div className="task-tag">Generating React/JSX Snippets</div>
                    <div className="task-tag">UI Component Examples</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 关键参与示例 - [已用新内容更新] */}
            <div className={`tab-content ${activeTab === 'engagement' ? 'active' : ''}`}>
              <div className="engagement-examples">
                <div className="example-card">
                  <div className="example-header">
                    <h3>🎯 Refining Literature Scope</h3>
                  </div>
                  <div className="comparison-flow">
                    <div className="ai-output">
                      <div className="output-label">AI Suggestion</div>
                      <p>Provided references on energy feedback and household electricity consumption.</p>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="my-refinement">
                      <div className="output-label">My Refinement</div>
                      <p>Replaced with UN SDG 12.2 metadata, the Australian National Waste Report, and OECD EPR guidelines.</p>
                    </div>
                  </div>
                  <div className="rationale">
                    <strong>Rationale:</strong> The AI's suggestions were related but not specific to the core topic of urban solid waste and resource efficiency. I manually curated sources that directly informed the model's scope and parameters.
                  </div>
                </div>

                <div className="example-card">
                  <div className="example-header">
                    <h3>🔧 Correcting Model Variables</h3>
                  </div>
                  <div className="comparison-flow">
                    <div className="ai-output">
                      <div className="output-label">AI Suggestion</div>
                      <p>Generated generic SFD variable names and inconsistent units.</p>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="my-refinement">
                      <div className="output-label">My Refinement</div>
                      <p>Manually corrected variable names for clarity and ensured strict unit consistency for model viability.</p>
                    </div>
                  </div>
                  <div className="rationale">
                    <strong>Rationale:</strong> AI-generated outputs required significant human correction to be suitable for a formal, quantifiable system dynamics model.
                  </div>
                </div>
                
                <div className="example-card">
                  <div className="example-header">
                    <h3>🇦🇺 Adding Context and Fairness</h3>
                  </div>
                  <div className="comparison-flow">
                    <div className="ai-output">
                      <div className="output-label">AI Suggestion</div>
                      <p>Proposed generic policy recommendations and ethical statements.</p>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="my-refinement">
                      <div className="output-label">My Refinement</div>
                      <p>Added localization (Australia/city-scale context) and integrated specific equity and fairness checks into the proposals.</p>
                    </div>
                  </div>
                  <div className="rationale">
                    <strong>Rationale:</strong> AI's advice lacks local context. I applied my domain knowledge to ensure recommendations were relevant, actionable, and ethically sound for the specific setting.
                  </div>
                </div>
              </div>
            </div>

            {/* 我的贡献 - [已用新内容更新] */}
            <div className={`tab-content ${activeTab === 'ownership' ? 'active' : ''}`}>
              <div className="ownership-visual">
                <div className="contribution-split">
                  <div className="my-work">
                    <div className="work-header">
                      <h3>🎯 My Core Contributions</h3>
                      <div className="percentage">Lead</div>
                    </div>
                    <div className="work-items">
                      <div className="work-item critical">Construction of original CLD and SFD</div>
                      <div className="work-item critical">Definition of variables, units, and equations</div>
                      <div className="work-item critical">Selection of parameters from literature/data</div>
                      <div className="work-item critical">Detailed UI prototype design</div>
                      <div className="work-item critical">Ethical considerations & stakeholder plans</div>
                      <div className="work-item critical">Final research method and experimental design</div>
                    </div>
                  </div>
                  
                  <div className="ai-assisted">
                    <div className="work-header">
                      <h3>🤖 AI as Assistant</h3>
                      <div className="percentage">Support</div>
                    </div>
                    <div className="work-items">
                      <div className="work-item support">Organizing literature candidates</div>
                      <div className="work-item support">Generating first-draft text</div>
                      <div className="work-item support">Providing SD writing style examples</div>
                      <div className="work-item support">Suggesting example equations</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #667eea' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#2d3748' }}>
                  "The theoretical framework, model selection, and final interpretations in this study are the sole responsibility of the researcher. AI was used exclusively as an auxiliary tool."
                </p>
              </div>
            </div>

            {/* 关键学习 - [已用新内容更新] */}
            <div className={`tab-content ${activeTab === 'learning' ? 'active' : ''}`}>
              <div className="learning-insights">
                <div className="insight-card positive">
                  <div className="insight-icon">✅</div>
                  <h3>Practical Gains</h3>
                  <ul>
                    <li>Accelerated literature review and drafting processes.</li>
                    <li>Systematized the 5-step method for converting a CLD to an SFD.</li>
                    <li>Clarified how to define units and BOT reference modes for each stock.</li>
                  </ul>
                </div>

                <div className="insight-card warning">
                  <div className="insight-icon">⚠️</div>
                  <h3>Identified AI Limitations</h3>
                  <ul>
                    <li>Weak in judging the specific scope and domain fit of information.</li>
                    <li>Lacks local context and detailed nuances for policy/ethics.</li>
                    <li>Requires human expertise for the "last mile" of validation and refinement.</li>
                  </ul>
                </div>

                <div className="insight-card future">
                  <div className="insight-icon">🚀</div>
                  <h3>Actionable Improvements</h3>
                  <ul>
                    <li>Develop a formal Data Governance SOP for data collection.</li>
                    <li>Integrate fairness-impact metrics directly into the dashboard design.</li>
                    <li>Add `policy → funding` delay parameters into the model for realism.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReflection;