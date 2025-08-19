import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

// Individual components
const HeroSection = () => {
  const navigate = useNavigate();
  
  // 滚动到Project Overview部分的函数
  const scrollToProjectOverview = () => {
    const projectOverviewElement = document.querySelector('.project-overview');
    if (projectOverviewElement) {
      projectOverviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 跳转到Analysis页面的函数
  const navigateToAnalysis = () => {
    navigate('/analysis');
  };

  return (
    <div className="hero-section">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge animate-fade-in-up">
          <span>📚</span>
          <div className="author-info">
            <div className="author-line"><strong>Author:</strong> Rongyang Jian</div>
            <div className="student-id"><strong>Student ID:</strong> s4950018</div>
          </div>
        </div>
        
        <h1 className="hero-title animate-fade-in-up">
          Recyclable energy Feedback System
        </h1>
        

        
        <div className="research-question animate-fade-in-up">
          <span className="research-label">Research Question</span>
          <span className="research-text">
            "How does feedback frequency influence residential energy conservation behaviors?"
          </span>
        </div>
        
        <div className="hero-buttons animate-fade-in-up">
          <button 
            className="btn btn-primary btn-large"
            onClick={scrollToProjectOverview}
          >
            <span>Explore Research</span>
            <span className="btn-arrow">→</span>
          </button>
          <button 
            className="btn btn-secondary btn-large"
            onClick={navigateToAnalysis}
          >
            <span>View Analysis</span>
            <span className="btn-arrow">📊</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectOverview = () => {
  return (
    <div className="content-section project-overview">
      <div className="container">
        <h2 className="section-title animate-fade-in">Project Overview</h2>
        <div className="features-grid">
          <div className="feature-card priority animate-fade-in-up">
            <div className="feature-icon">🎯</div>
            <h3>Research Objective</h3>
            <p>
              This research aims to determine how improving the quantity, quality, and visibility of collected recycling data
              causally affects policy strength, funding allocation, public awareness, infrastructure utilization, and ultimately municipal waste reduction—using a mixed-methods approach that combines CLD/SFD system-dynamics modelling, interface prototyping, 
              and empirical measurement of key indicators to identify effective, equitable interventions for achieving SDG 12.2.

            </p>
            <div className="feature-metrics">
              <span className="metric">Behavioral Science</span>
              <span className="metric">Smart Technology</span>
            </div>
          </div>
          
          <div className="feature-card animate-fade-in-up">
            <div className="feature-icon">👥</div>
            <h3>Target Population</h3>
            <p>
              The study targets multi-level actors in municipal recycling data systems: policymakers, budget holders, waste managers, 
              facility operators, collection crews, households, and recycled material users/producers. From an HCI perspective, 
              we focus on primary dashboard users—policy analysts, operations staff, and community engagement officers—while involving citizen data-providers in co-design. 
             
            </p>
            <div className="feature-metrics">
              <span className="metric">Households</span>
              <span className="metric">Smart Meters</span>
            </div>
          </div>
          
          <div className="feature-card animate-fade-in-up">
            <div className="feature-icon">🌱</div>
            <h3>Sustainability Impact</h3>
            <p>
              Contributing to global energy conservation efforts and supporting 
              sustainable development goals through behavioral science insights.
            </p>
            <div className="feature-metrics">
              <span className="metric">Carbon Reduction</span>
              <span className="metric">SDG Aligned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SDGAlignment = () => {
  return (
    <div className="sdg-alignment-section">
      <div className="container">
        <div className="sdg-header">
          <h2 className="section-title animate-fade-in">SDG Alignment</h2>
          
        </div>
        
        <div className="sdg-primary animate-fade-in-up">
          <div className="sdg-primary-card">
            <div className="sdg-badge primary">Primary Focus</div>
            <div className="sdg-number-large">12</div>
            <h3>Ensure sustainable consumption and production patterns</h3>
            
            <div className="sdg-target">
              <strong>Target 12.2:</strong> Efficient resource use: By 2030, achieve the sustainable management and efficient use of natural resources
            </div>
          </div>
        </div>
        
        <h3 className="supporting-title animate-fade-in">Supporting SDGs</h3>
        <div className="sdg-supporting-container">
          <div className="sdg-supporting-vertical">
            <div className="sdg-item-horizontal animate-fade-in-up">
              <div className="sdg-left">
                <div className="sdg-badge">Supporting</div>
                <div className="sdg-number">11</div>
              </div>
              <div className="sdg-right">
                <h4>Sustainable Cities and Communities</h4>
                <p>Make cities and human settlements inclusive, safe, resilient and sustainable</p>
              </div>
            </div>
            
            <div className="sdg-item-horizontal animate-fade-in-up">
              <div className="sdg-left">
                <div className="sdg-badge">Supporting</div>
                <div className="sdg-number">13</div>
              </div>
              <div className="sdg-right">
                <h4>Climate Action</h4>
                <p>Take urgent action to combat climate change and its impacts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Home component
const EnhancedHome = () => {
  useEffect(() => {
    // Intersection observer logic can be added here when needed
  }, []);
  
  return (
    <div className="page home-page">
      <HeroSection />
      <ProjectOverview />
      <SDGAlignment />
    </div>
  );
};

export default EnhancedHome;