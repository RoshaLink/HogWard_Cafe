import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import './App.css';

// SVG Corner Ornament for authentic fantasy game frame
const CornerOrnament = () => (
  <svg viewBox="0 0 100 100" className="corner-svg" style={{ width: '100%', height: '100%' }}>
    {/* Dark carved stone background */}
    <path d="M 0 0 L 100 0 L 100 20 Q 60 20 40 40 Q 20 60 20 100 L 0 100 Z" fill="#121820" stroke="#3b495e" strokeWidth="1" />
    <path d="M 0 0 L 80 0 L 80 15 Q 50 15 32 32 Q 15 50 15 80 L 0 80 Z" fill="#1c2533" />
    
    {/* Ornate Gold Filigree curves */}
    <path d="M 5 5 L 75 5 Q 45 20 20 45 L 5 75 Z" fill="none" stroke="#d4af37" strokeWidth="2.5" />
    <path d="M 12 12 Q 35 18 45 45 Q 18 35 12 12 Z" fill="none" stroke="#e6c587" strokeWidth="1.5" />
    <circle cx="26" cy="26" r="8" fill="#121820" stroke="#d4af37" strokeWidth="2" />
    <polygon points="26,19 32,26 26,33 20,26" fill="#00d9ff" stroke="#ffffff" strokeWidth="0.8" />
  </svg>
);

function App() {
  const [viewMode, setViewMode] = useState('video'); // 'video' | 'photo'

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'video' ? 'photo' : 'video'));
  };

  return (
    <div className="fantasy-frame-wrapper">
      {/* 4 Ornate Frame Corners */}
      <div className="frame-border-corner top-left"><CornerOrnament /></div>
      <div className="frame-border-corner top-right"><CornerOrnament /></div>
      <div className="frame-border-corner bottom-left"><CornerOrnament /></div>
      <div className="frame-border-corner bottom-right"><CornerOrnament /></div>

      {/* Main Parchment Inner Area */}
      <div className="parchment-viewport">
        <Navbar viewMode={viewMode} onToggleViewMode={toggleViewMode} />
        <main className="main-content">
          <Homepage viewMode={viewMode} onToggleViewMode={toggleViewMode} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
