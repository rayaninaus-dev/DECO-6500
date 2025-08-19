import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Map from './pages/Map';
import AIReflection from './pages/AIReflection';
import References from './pages/References';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/map" element={<Map />} />
            <Route path="/ai-reflection" element={<AIReflection />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
