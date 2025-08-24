import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUserSecret, FaTools, FaNetworkWired, FaChevronUp } from 'react-icons/fa';
import { PiCertificateFill, PiChalkboardTeacherDuotone } from 'react-icons/pi';
import { GiBookCover } from 'react-icons/gi';
import { MdOutlineComputer } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import './nav.css';

const navItems = [
  { path: '/', icon: <FaUserSecret />, label: 'Home' },
  { path: '/about', icon: <PiCertificateFill />, label: 'Certificates' },
  { path: '/content', icon: <PiChalkboardTeacherDuotone />, label: 'Content' },
  { path: '/myprojects', icon: <FaTools />, label: 'Projects' },
];

const externalLinks = [
  { 
    url: 'https://pakcyberbot.github.io/CTF-Writeups/', 
    icon: <GiBookCover />, 
    label: 'CTF Writeups' 
  },
  { 
    url: 'https://www.linkedin.com/in/pakcyberbot/', 
    icon: <MdOutlineComputer />, 
    label: 'Experience' 
  },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('');
  const [isExternalOpen, setIsExternalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  // Handle scroll effect with throttling
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (path, label, isExternal = false) => {
    // Don't do anything if already on this page
    if (path === location.pathname && !isExternal) {
      return;
    }
    
    setTransitioning(true);
    setTransitionText(label);
    setActiveNav(path);
    
    // Close external dropdown if open
    if (isExternalOpen) {
      setIsExternalOpen(false);
    }
    
    // Play a subtle click sound (optional)
    if (typeof window !== 'undefined') {
      const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
      clickSound.volume = 0.2;
      clickSound.play().catch(e => console.log('Audio play failed:', e));
    }
    
    if (isExternal) {
      // For external links, open in new tab after short delay
      setTimeout(() => {
        window.open(path, '_blank', 'noopener,noreferrer');
        // Keep the transition state for a moment for better UX
        setTimeout(() => setTransitioning(false), 300);
      }, 300);
    } else {
      // For internal navigation, wait for animation to complete
      setTimeout(() => {
        navigate(path);
        // Keep the transition state until the new page loads
        const timer = setTimeout(() => {
          setTransitioning(false);
        }, 800);
        
        // Cleanup timer if component unmounts
        return () => clearTimeout(timer);
      }, 500);
    }
  };
  
  const toggleExternal = (e) => {
    e.stopPropagation();
    const newState = !isExternalOpen;
    setIsExternalOpen(newState);
    
    // Play a subtle sound when toggling
    if (typeof window !== 'undefined') {
      const toggleSound = new Audio(newState ? 
        'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3' : 
        'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
      toggleSound.volume = 0.15;
      toggleSound.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  return (
    <>
      {/* Transition Overlay */}
      <AnimatePresence mode="wait">
        {transitioning && (
          <motion.div 
            className="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="transition-content">
              <div className="transition-line"></div>
              <div className="transition-text">{transitionText}</div>
              <div className="transition-line"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <motion.nav 
        className={`bottom-nav ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          boxShadow: isScrolled 
            ? '0 10px 30px rgba(0, 0, 0, 0.5)'
            : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(138, 240, 162, 0.1)'
        }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 15
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="nav-container">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNavClick(item.path, item.label)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="nav-icon">
                {React.cloneElement(item.icon, {
                  style: { 
                    transition: 'all 0.3s ease',
                    transform: location.pathname === item.path ? 'scale(1.2)' : 'scale(1)'
                  }
                })}
              </div>
              <span className="nav-label">{item.label}</span>
              {location.pathname === item.path && (
                <motion.div 
                  className="nav-indicator" 
                  layoutId="navIndicator"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </motion.div>
          ))}
          
          {/* External Links Dropdown */}
          <motion.div 
            className={`nav-item external-toggle ${isExternalOpen ? 'active' : ''}`}
            onClick={toggleExternal}
            onKeyDown={(e) => e.key === 'Enter' && toggleExternal(e)}
            aria-expanded={isExternalOpen}
            aria-haspopup="true"
          >
            <div className="nav-icon">
              <FaNetworkWired />
            </div>
            <span className="nav-label">More</span>
            <motion.span 
              className="chevron-icon"
              animate={{ rotate: isExternalOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronUp />
            </motion.span>
            
            <AnimatePresence>
              {isExternalOpen && (
                <motion.div 
                  className="external-dropdown"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {externalLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavClick(link.url, link.label, true);
                      }}
                      whileHover={{ x: 5, color: 'var(--color-pri)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="external-icon">{link.icon}</span>
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Status Bar */}
        <motion.div 
          className="nav-status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="status-indicator"></div>
          <span>Available for work</span>
        </motion.div>
      </motion.nav>
    </>
  );
}

export default Navbar;
