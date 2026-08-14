import React, { useState } from 'react';
import { Castle, Beer, Scroll, Feather, Send, Sparkles, Globe, ChevronDown, Calendar, Menu, X, Camera, Video } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

// Cauldron SVG icon for Kitchen
const CauldronIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11c0 5 3.5 9 8 9s8-4 8-9V8H4v3z" />
    <path d="M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    <path d="M9 3v-1" />
    <path d="M12 3v-1" />
    <path d="M15 3v-1" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="13" cy="13" r="1.5" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
  </svg>
);

const languagesList = [
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' }
];

const Navbar = ({ viewMode, onToggleViewMode }) => {
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <header className="fantasy-navbar-container">
      {/* Scroll Roll Left Cap */}
      <div className="scroll-cap left-cap">
        <div className="scroll-knob top"></div>
        <div className="scroll-roll"></div>
        <div className="scroll-knob bottom"></div>
      </div>

      {/* Main Wood & Gold Navigation Bar */}
      <nav className="fantasy-nav-bar">
        {/* Left Navigation Section */}
        <div className="nav-group nav-left">
          {/* View Mode Toggle Button (Left of Navbar) */}
          <button
            className={`fantasy-view-toggle-btn ${viewMode === 'photo' ? 'active-photo' : ''}`}
            onClick={onToggleViewMode}
            title={viewMode === 'video' ? t('btnViewPhoto') : t('btnViewVideo')}
          >
            {viewMode === 'video' ? (
              <>
                <Camera className="toggle-icon" size={16} />
                <span className="toggle-label">{t('btnViewPhoto')}</span>
              </>
            ) : (
              <>
                <Video className="toggle-icon" size={16} />
                <span className="toggle-label">{t('btnViewVideo')}</span>
              </>
            )}
          </button>

          <a href="#home" className="nav-item active">
            <div className="icon-wrapper">
              <Castle className="nav-icon" />
            </div>
            <span className="nav-label">{t('navHome')}</span>
          </a>

          <a href="#brews" className="nav-item">
            <div className="icon-wrapper">
              <Beer className="nav-icon" />
            </div>
            <span className="nav-label">{t('navBrews')}</span>
          </a>

          <a href="#kitchen" className="nav-item">
            <div className="icon-wrapper">
              <CauldronIcon />
            </div>
            <span className="nav-label">{t('navKitchen')}</span>
          </a>

          <a href="#book" className="nav-item">
            <div className="icon-wrapper">
              <Calendar className="nav-icon" />
            </div>
            <span className="nav-label">{t('navBookTable')}</span>
          </a>
        </div>

        {/* Center Round Hogward Cafe Logo Badge Header */}
        <div className="nav-center-emblem">
          <div className="hogward-logo-ring">
            <img src="/assets/logo.png" alt="Hogward Cafe Emblem" className="hogward-badge-logo-img" />
          </div>
        </div>

        {/* Right Navigation Section */}
        <div className="nav-group nav-right">
          <a href="#spells" className="nav-item">
            <div className="icon-wrapper">
              <Scroll className="nav-icon" />
              <Sparkles className="sparkle-badge" />
            </div>
            <span className="nav-label">{t('navSpells')}</span>
          </a>

          <a href="#ourtale" className="nav-item">
            <div className="icon-wrapper">
              <Feather className="nav-icon" />
            </div>
            <span className="nav-label">{t('navOurTale')}</span>
          </a>

          <a href="#contact" className="nav-item">
            <div className="icon-wrapper">
              <Send className="nav-icon" />
            </div>
            <span className="nav-label">{t('navContact')}</span>
          </a>

          {/* Ornate Fantasy Language Switcher Button */}
          <div className="lang-switcher-wrapper">
            <button
              className="fantasy-lang-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              title="Change Language / تغییر زبان"
            >
              <Globe className="lang-globe-icon" />
              <span className="lang-flag">{currentLangObj.flag}</span>
              <span className="lang-code">{currentLangObj.code.toUpperCase()}</span>
              <ChevronDown className={`lang-arrow ${dropdownOpen ? 'open' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="lang-dropdown-menu">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${language === lang.code ? 'selected' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="opt-flag">{lang.flag}</span>
                    <span className="opt-label">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu for Responsive Screens */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-nav-drawer">
            <div className="mobile-drawer-inner">
              {/* Mobile View Mode Toggle */}
              <button
                className={`mobile-view-toggle-btn ${viewMode === 'photo' ? 'active-photo' : ''}`}
                onClick={() => {
                  onToggleViewMode();
                  setMobileMenuOpen(false);
                }}
              >
                {viewMode === 'video' ? (
                  <>
                    <Camera size={18} /> <span>{t('btnViewPhoto')}</span>
                  </>
                ) : (
                  <>
                    <Video size={18} /> <span>{t('btnViewVideo')}</span>
                  </>
                )}
              </button>

              <a href="#home" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Castle size={20} /> <span>{t('navHome')}</span>
              </a>
              <a href="#brews" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Beer size={20} /> <span>{t('navBrews')}</span>
              </a>
              <a href="#kitchen" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <CauldronIcon /> <span>{t('navKitchen')}</span>
              </a>
              <a href="#book" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Calendar size={20} /> <span>{t('navBookTable')}</span>
              </a>
              <a href="#spells" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Scroll size={20} /> <span>{t('navSpells')}</span>
              </a>
              <a href="#ourtale" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Feather size={20} /> <span>{t('navOurTale')}</span>
              </a>
              <a href="#contact" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
                <Send size={20} /> <span>{t('navContact')}</span>
              </a>

              {/* Mobile Language Switcher */}
              <div className="mobile-lang-section">
                <span className="mobile-lang-title">Language / زبان:</span>
                <div className="mobile-lang-options">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      className={`mobile-lang-btn ${language === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scroll Roll Right Cap */}
      <div className="scroll-cap right-cap">
        <div className="scroll-knob top"></div>
        <div className="scroll-roll"></div>
        <div className="scroll-knob bottom"></div>
      </div>
    </header>
  );
};

export default Navbar;
