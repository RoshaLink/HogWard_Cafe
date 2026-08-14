import React from 'react';
import { ScrollText, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

// Custom SVG Icons for Instagram & Twitter
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="fantasy-footer-container">
      {/* Top Arched Stone Badge Header */}
      <div className="footer-top-arch">
        <div className="stone-pillar left"></div>
        <div className="arch-badge-content">
          <span className="arch-title">{t('caffe')} {t('elixir')}</span>
          <span className="arch-sub">{t('est')}</span>
        </div>
        <div className="stone-pillar right"></div>
      </div>

      {/* Main Dark Stone Footer Body */}
      <div className="footer-stone-body">
        <div className="footer-grid">
          {/* Left Column: FIND US */}
          <div className="footer-col find-us">
            <h4 className="col-title">{t('findUsTitle')}</h4>
            <p className="col-text">{t('findUsAddress')}</p>
          </div>

          {/* Center Column: FOLLOW US */}
          <div className="footer-col follow-us">
            <h4 className="col-title">{t('followUsTitle')}</h4>
            <div className="social-parchment-icons">
              <a href="#facebook" className="social-scroll-box" title="Facebook">
                <ScrollText className="social-icon" />
              </a>
              <a href="#instagram" className="social-scroll-box" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="#twitter" className="social-scroll-box" title="Twitter">
                <TwitterIcon />
              </a>
              <a href="#mail" className="social-scroll-box" title="Owl Post Mail">
                <Mail className="social-icon" />
              </a>
            </div>
          </div>

          {/* Right Column: LINKS & COPYRIGHT */}
          <div className="footer-col links-col">
            <h4 className="col-title">{t('linksTitle')}</h4>
            <div className="footer-nav-links">
              <a href="#menu">{t('linkMenu')}</a>
              <span className="link-divider">|</span>
              <a href="#events">{t('linkEvents')}</a>
              <span className="link-divider">|</span>
              <a href="#lore">{t('linkLore')}</a>
              <span className="link-divider">|</span>
              <a href="#bookings">{t('linkBookings')}</a>
            </div>
            <p className="copyright-text">{t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
