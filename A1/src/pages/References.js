import React from 'react';

const References = () => {
  return (
    <>
      {/* This style block contains all the CSS to replicate the original layout and design, 
        avoiding external files and ensuring the hover effects work, as per your request.
        I have only modified the styles for the contact section to increase the font size
        and ensured the bolding is applied correctly.
      */}
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7fafc;
          color: #4a5568;
        }

        .page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .page-header {
          background-color: #2c5282;
          color: #fff;
          padding: 3rem 0;
          text-align: center;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-description {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .content-section {
          padding: 3rem 0;
          flex-grow: 1;
        }

        .references-content {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 2rem;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #2c5282;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #2c5282;
          padding-bottom: 0.5rem;
        }

        .reference-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #2c5282;
        }

        .reference-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .reference-item {
          padding: 1rem;
          background-color: #f0f4f8;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .reference-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.15);
        }

        .reference-author,
        .reference-title,
        .reference-journal {
          margin-bottom: 0.5rem;
        }
        
        .reference-author {
          font-weight: 600;
          color: #2d3748;
        }

        .reference-title {
          font-style: italic;
          color: #4a5568;
        }

        .contact-section {
          margin-top: 3rem;
        }

        /* I have updated the font size for the contact content as you requested.
          I also ensured the strong tags are correctly bolded.
        */
        .contact-content p {
          font-size: 1.25rem;
          color: #4a5568;
        }

        .contact-info {
          font-size: 1.5rem;
          color: #2d3748;
        }
        
        .contact-info strong {
          font-weight: 700;
          color: #2d3748;
        }
        
        .contact-detail {
          padding: 12px 0;
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .page-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
        `}
      </style>

      <div className="page references-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title">References & Contact</h1>
            <p className="page-description">
              Comprehensive bibliography and references 
              supporting this energy feedback system research.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="container">
            <div className="references-content">
              <div className="references-section">
                <h2 className="section-title">Academic References</h2>
                <div className="references-list">
                  
                  <div className="reference-category">
                    <h3>Behavioral Science & Energy Feedback</h3>
                    <div className="reference-items">
                      <a href="https://ideas.repec.org/a/eee/enepol/v61y2013icp729-739.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="reference-item">
                          <div className="reference-author">
                            Delmas, M. A., Fischlein, M., & Asensio, O. I. (2013). 
                          </div>
                          <div className="reference-title">
                            Information strategies and energy conservation behavior: A meta-analysis of experimental studies from 1975 to 2012. 
                          </div>
                          <div className="reference-journal">
                            Energy Policy, 61, 729-739.
                          </div>
                        </div>
                      </a>
                      
                      
                      
                    </div>
                  </div>

                  <div className="reference-category">
                    <h3>System Dynamics & Causal Loop Modeling</h3>
                    <div className="reference-items">
                      <a href="https://systemdynamics.org/product/business-dynamics-systems-thinking-and-modeling-for-a-complex-world/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="reference-item">
                          <div className="reference-author">
                            Sterman, J. D. (2000). 
                          </div>
                          <div className="reference-title">
                            Business dynamics: Systems thinking and modeling for a complex world. 
                          </div>
                          <div className="reference-journal">
                            McGraw-Hill. 
                          </div>
                        </div>
                      </a>
                      <a href="https://www.researchgate.net/figure/Causal-loop-diagram-of-energy-consumption-in-dwellings_fig1_281375438" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="reference-item">
                          <div className="reference-author">
                            Ghaffarian, S., & Bideh, Z. H. (2015). 
                          </div>
                          <div className="reference-title">
                            Causal Loop Diagram of the improved model for building energy consumption. 
                          </div>
                          <div className="reference-journal">
                            International Journal of Electrical Power & Energy Systems, 63, 473-484.
                          </div>
                        </div>
                      </a>
                      <a href="https://thesystemsthinker.com/step-by-step-stocks-and-flows-improving-the-rigor-of-your-thinking/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="reference-item">
                          <div className="reference-author">
                            Daniel Aronson,Daniel Angelakis. 
                          </div>
                          <div className="reference-title">
                            Step-By-Step Stocks and Flows: Improving the Rigor of Your Thinking
                          </div>
                          
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="reference-category">
                    <h3>User Interface & Technology</h3>
                    <div className="reference-items">
                      
                      <a href="https://www.diva-portal.org/smash/get/diva2:1675444/FULLTEXT01.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="reference-item">
                          <div className="reference-author">
                            Lindqvist, T. (2022).
                          </div>
                          <div className="reference-title">
                            Interface Design to Increase Consumers' Engagement with Energy Usage.
                          </div>
                          <div className="reference-journal">
                            DiVA portal.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="contact-section">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                  <p>
                    For questions about this project, collaboration opportunities, 
                     please contact:
                  </p>
                  <div className="contact-info">
                    <div className="contact-detail">
                      <strong>Author:</strong> Rongyang Jian
                    </div>
                    <div className="contact-detail">
                      <strong>Institution:</strong> University of Queensland
                    </div>
                    <div className="contact-detail">
                      <strong>Email:</strong> r.jian@student.uq.edu.au
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default References;
