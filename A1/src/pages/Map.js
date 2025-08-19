import React from 'react';
import './Pages.css';

const Map = () => {
  // Miro board URL
  const miroEmbedUrl = "https://miro.com/app/live-embed/uXjVJVhNopE=/?embedMode=view_only_without_ui&moveToViewport=-1238%2C-2658%2C17263%2C8703&embedId=162807094601";
  const miroFullScreenUrl = "https://miro.com/app/board/uXjVJVhNopE=/";

  // Function to open Miro board in full screen
  const handleOpenFullScreen = () => {
    window.open(miroFullScreenUrl, '_blank', 'fullscreen=yes,scrollbars=yes,resizable=yes');
  };

  // Function to export view (opens Miro's export functionality)
  const handleExportView = () => {
    // Open Miro board in new tab and let user use Miro's native export features
    window.open(miroFullScreenUrl, '_blank');
    alert('Miro board opened in new tab. You can use Miro\'s native export features (File → Export) to save your view.');
  };

  return (
    <div className="page map-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Interactive System Map</h1>
          <p className="page-description">
            Visual representation of the energy feedback system including causal loops, 
            stock and flow dynamics, and SDG connections
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="map-layout">
            {/* 主要的Miro嵌入区域 */}
            <div className="miro-main-container">
              <div className="miro-header">
                <h2 className="section-title">Interactive System Map - Miro Board</h2>
                <div className="miro-controls">
                  <button 
                    className="btn btn-primary" 
                    onClick={handleOpenFullScreen}
                    title="Open Miro board in full screen mode"
                  >
                    Open Full Screen
                  </button>
                  <button 
                    className="btn btn-secondary" 
                    onClick={handleExportView}
                    title="Export the current view"
                  >
                    Export View
                  </button>
                </div>
              </div>
              <div className="miro-embed-area">
                {/* 嵌入的Miro iframe */}
                <iframe
                  src={miroEmbedUrl}
                  width="100%"
                  height="800"
                  style={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  allowFullScreen
                  title="Interactive System Map - Miro Board"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 侧边信息面板 */}
            <div className="info-panels">
              <div className="panel cld-info-panel">
                <h3 className="panel-title">Causal Loop Key</h3>
                <div className="cld-key">
                  <div className="key-item">
                    <span className="key-symbol positive">+</span>
                    <span>Positive relationship </span>
                  </div>
                  <div className="key-item">
                    <span className="key-symbol negative">-</span>
                    <span>Negative relationship </span>
                  </div>
                  
                </div>
              </div>
              
              <div className="panel sdg-panel">
                <h3 className="panel-title">SDG Connections</h3>
                <div className="sdg-grid">
                  <div className="sdg-item sdg-7">
                    <div className="sdg-number">7</div>
                    <div className="sdg-title">Ensure access to sustainable energy</div>
                  </div>
                  <div className="sdg-item sdg-12">
                    <div className="sdg-number">12</div>
                    <div className="sdg-title">Responsible Consumption</div>
                  </div>
                  <div className="sdg-item sdg-13">
                    <div className="sdg-number">13</div>
                    <div className="sdg-title">Climate Action</div>
                  </div>
                </div>
              </div>

              {/* 新增控制面板 */}
              <div className="panel controls-panel">
                <h3 className="panel-title">Map Controls</h3>
                <div className="control-items">
                  <div className="control-item">
                    <button 
                      className="btn btn-outline"
                      onClick={() => window.location.reload()}
                    >
                      🔄 Refresh Map
                    </button>
                  </div>
                  <div className="control-item">
                    <span className="control-label">Zoom:</span>
                    <span className="control-value">Use mouse wheel or touch gestures</span>
                  </div>
                  <div className="control-item">
                    <span className="control-label">Pan:</span>
                    <span className="control-value">Click and drag to navigate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部详细信息 */}
          <div className="details-section">
            <div className="details-grid">
              <div className="detail-card">
                <h4>System Components</h4>
                <p>The interactive map includes feedback loops, stock and flow dynamics to help understand energy conservation patterns.</p>
              </div>
           
              
              <div className="detail-card">
                <h4>How to Use</h4>
                <p>
                  • Use the embedded view below for quick reference<br/>
                  • Click "Open Full Screen" for detailed editing<br/>
                  • Use "Export View" to save your current perspective<br/>
                  • Navigate using zoom and pan controls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;