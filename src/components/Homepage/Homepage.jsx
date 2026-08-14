import React, { useState, useRef } from 'react';
import { Sparkles, Scroll, Flame, Volume2, VolumeX, Play, Pause, Eye, EyeOff, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import heroVideo from '../../assets/hero_video/Hero-video.mp4';
import cafeImg1 from '../../assets/insid-caffe/Coffee_shop_interior_with_books_202608051250.jpeg';
import cafeImg2 from '../../assets/insid-caffe/Coffee_shop_interior_with_books_202608051250 (1).jpeg';
import cafeImg3 from '../../assets/insid-caffe/Coffee_shop_interior_with_books_202608051250 (2).jpeg';
import cafeImg4 from '../../assets/insid-caffe/Coffee_shop_interior_with_books_202608051250 (3).jpeg';
import './Homepage.css';

const interiorImages = [
  { id: 1, src: cafeImg1, title: 'Magical Library Lounge' },
  { id: 2, src: cafeImg2, title: 'Mystical Books & Brews' },
  { id: 3, src: cafeImg3, title: 'Elixir Counter & Candles' },
  { id: 4, src: cafeImg4, title: 'Enchanted Great Hall Tables' }
];

const menuData = [
  {
    id: 'b1',
    category: 'brews',
    name: 'Butterscotch Brew',
    price: '12 Galleons',
    desc: 'Steaming mug with golden foam, magical caramel aroma & butterscotch magic',
    icon: '🍺',
    badge: 'POPULAR'
  },
  {
    id: 'b2',
    category: 'brews',
    name: 'Phoenix Ember Latte',
    price: '15 Galleons',
    desc: 'Fiery espresso mug infused with phoenix feather spice & glowing cinnamon',
    icon: '🔥',
    badge: 'HOUSE SPECIAL'
  },
  {
    id: 'b3',
    category: 'brews',
    name: 'Moonbeam Tea',
    price: '10 Galleons',
    desc: 'Glowing celestial blue tea brewed with shimmering star swirls',
    icon: '🌙',
    badge: 'MAGICAL'
  },
  {
    id: 'b4',
    category: 'brews',
    name: 'Spellcaster\'s Chai',
    price: '14 Galleons',
    desc: 'Spiced potion chai served from a self-stirring copper teapot',
    icon: '🫖',
    badge: ''
  },
  {
    id: 'b5',
    category: 'brews',
    name: 'Whispering Willow Juice',
    price: '11 Galleons',
    desc: 'Refreshing elixir harvested from enchanted grove willow blossoms',
    icon: '🧪',
    badge: 'FRESH'
  },
  {
    id: 'p1',
    category: 'pastries',
    name: 'Golden Snitch Scone',
    price: '9 Galleons',
    desc: 'Winged golden scone with honey sparkles & cosmic sugar dusting',
    icon: '🧹',
    badge: 'FAVORITE'
  },
  {
    id: 'p2',
    category: 'pastries',
    name: 'Dragon\'s Egg Tart',
    price: '11 Galleons',
    desc: 'Glowing scaled tart filled with passionfruit & dragonfruit custard',
    icon: '🥚',
    badge: 'SPICY SWEET'
  },
  {
    id: 'p3',
    category: 'pastries',
    name: 'Starlight Macarons',
    price: '13 Galleons',
    desc: 'Trio of color-shifting glowing macarons infused with star dust',
    icon: '✨',
    badge: 'NEW'
  },
  {
    id: 'p4',
    category: 'pastries',
    name: 'Gilded Griffin Cake',
    price: '16 Galleons',
    desc: 'Rich dark chocolate cake crowned with edible gold griffin figure',
    icon: '🦅',
    badge: 'DELUXE'
  },
  {
    id: 'p5',
    category: 'pastries',
    name: 'Elderflower Cheesecake',
    price: '14 Galleons',
    desc: 'Creamy elderberry slice dusted with enchanted white flowers',
    icon: '🌸',
    badge: ''
  },
  {
    id: 'm1',
    category: 'morsels',
    name: 'Wand-Wave Cookies',
    price: '8 Galleons',
    desc: 'Celestial star & crescent moon butter cookies with sparkling sugar',
    icon: '⭐',
    badge: 'SNACK'
  }
];

const Homepage = ({ viewMode }) => {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeMenuTab, setActiveMenuTab] = useState('all');
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % interiorImages.length);
  };

  const handlePrevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  const filteredMenuItems = activeMenuTab === 'all'
    ? menuData
    : menuData.filter((item) => item.category === activeMenuTab);

  return (
    <div className="fantasy-homepage">
      {/* Full Page Video or Photo Container */}
      <div className="hero-video-frame">
        <div className="video-gold-border"></div>

        {/* Video or Photo Media Element */}
        {viewMode === 'photo' ? (
          <>
            <img
              key={photoIndex}
              src={interiorImages[photoIndex].src}
              alt={`Caffé Hogward Interior ${photoIndex + 1}`}
              className="hero-video-media cafe-interior-img"
            />

            {/* Left & Right Gallery Navigation Arrows */}
            <button
              className="gallery-arrow-btn left"
              onClick={handlePrevPhoto}
              title={t('prevPhoto')}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="gallery-arrow-btn right"
              onClick={handleNextPhoto}
              title={t('nextPhoto')}
              aria-label="Next Photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Top Counter Badge */}
            <div className="gallery-counter-badge">
              <Images size={14} />
              <span>{photoIndex + 1} / {interiorImages.length}</span>
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            className="hero-video-media"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/assets/Hero-video.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        )}

        {/* Light Overlay Gradient */}
        <div className="video-overlay-shade"></div>

        {/* Sleek Floating Bottom Hero Banner (Unobscured Video View) */}
        {showContent && (
          <div className="hero-bottom-banner">
            <div className="banner-content-box">
              <div className="scroll-ornament-header">
                <Flame className="flame-icon left" />
                <h2 className="fantasy-title">{t('welcomeTitle')}</h2>
                <Flame className="flame-icon right" />
              </div>

              <p className="fantasy-subtitle">{t('welcomeSub')}</p>

              <div className="fantasy-cta-container">
                <a href="#menu" className="fantasy-btn primary">
                  <Sparkles className="btn-icon" /> {t('btnMenu')}
                </a>
                <a href="#book" className="fantasy-btn secondary">
                  <Scroll className="btn-icon" /> {t('btnBook')}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Video / Gallery Controls (Play/Pause, Sound, Toggle Text) */}
        <div className="video-controls">
          <button
            onClick={() => setShowContent(!showContent)}
            className="video-control-btn"
            title={showContent ? "Hide Text / Dölj Text" : "Show Text / Visa Text"}
          >
            {showContent ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>

          {viewMode === 'video' && (
            <>
              <button
                onClick={togglePlay}
                className="video-control-btn"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button
                onClick={toggleMute}
                className="video-control-btn"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Seamless Parchment Menu Section (Continues down on scroll) */}
      <section id="menu" className="parchment-menu-section">
        {/* Parchment Section Ornate Header Divider */}
        <div className="parchment-divider-header">
          <div className="divider-line left"></div>
          <div className="divider-emblem">
            <Sparkles className="emblem-sparkle" size={20} />
            <h2 className="menu-section-title">{t('menuTitle')}</h2>
            <Sparkles className="emblem-sparkle" size={20} />
          </div>
          <div className="divider-line right"></div>
        </div>

        <p className="menu-section-subtitle">{t('menuSub')}</p>

        {/* Category Filter Tabs */}
        <div className="menu-tabs-container">
          <button
            className={`menu-tab-btn ${activeMenuTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('all')}
          >
            ✨ ALL / ALLT
          </button>

          <button
            className={`menu-tab-btn ${activeMenuTab === 'brews' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('brews')}
          >
            🍺 {t('catBrews')}
          </button>

          <button
            className={`menu-tab-btn ${activeMenuTab === 'pastries' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('pastries')}
          >
            🧁 {t('catPastries')}
          </button>

          <button
            className={`menu-tab-btn ${activeMenuTab === 'morsels' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('morsels')}
          >
            ⭐ {t('catMorsels')}
          </button>

          <button
            className={`menu-tab-btn ${activeMenuTab === 'board' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('board')}
          >
            📜 MENU SCROLL
          </button>
        </div>

        {/* Content: Interactive Grid or Full Parchment Board */}
        {activeMenuTab === 'board' ? (
          <div className="menu-image-container">
            <div className="menu-image-frame">
              <img
                src="/assets/menu-board.jpg"
                alt="Hogward's Magic Cafe Menu Board"
                className="menu-board-img"
              />
            </div>
          </div>
        ) : (
          <div className="interactive-menu-grid">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="menu-item-card">
                <div className="card-top-row">
                  <span className="card-item-icon">{item.icon}</span>
                  {item.badge && <span className="card-badge">{item.badge}</span>}
                </div>
                <h3 className="card-item-name">{item.name}</h3>
                <p className="card-item-desc">{item.desc}</p>
                <div className="card-bottom-row">
                  <span className="card-item-price">{item.price}</span>
                  <button className="card-order-btn">
                    <Sparkles size={14} /> ORDER
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Homepage;
