import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [isHovered, setIsHovered] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('');
  const [isExternalOpen, setIsExternalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to hide/show nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label) => {
    setTransitioning(true);
    setTransitionText(label);
    
    // Close external dropdown if open
    if (isExternalOpen) {
      setIsExternalOpen(false);
    }
    
    // Reset after animation completes
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  };
  
  const toggleExternalMenu = (e) => {
    e.preventDefault();
    setIsExternalOpen(!isExternalOpen);
  };

  return (
    <>
      {/* Transition Overlay */}
      <AnimatePresence>
        {transitioning && (
          <motion.div 
            className="transition-overlay"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
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
          y: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
          opacity: { duration: 0.8, ease: 'easeInOut' },
          boxShadow: { duration: 0.3, ease: 'easeInOut' }
        }}
      >
        <div className="nav-container">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNavClick(item.label)}
            >
              <div className="nav-icon">
                {item.icon}
              </div>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
          
          <div 
            className={`nav-item external-toggle ${isExternalOpen ? 'active' : ''}`}
            onClick={toggleExternalMenu}
          >
            <div className="nav-icon">
              <motion.span
                animate={{ rotate: isExternalOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaNetworkWired />
              </motion.span>
            </div>
            <span className="nav-label">More</span>
            <motion.span 
              className="chevron-icon"
              animate={{ rotate: isExternalOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronUp size={12} />
            </motion.span>
            
            <motion.div 
              className="external-dropdown"
              initial={false}
              animate={{
                height: isExternalOpen ? 'auto' : 0,
                opacity: isExternalOpen ? 1 : 0,
                pointerEvents: isExternalOpen ? 'auto' : 'none',
              }}
              transition={{ 
                height: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.2, ease: 'easeInOut' }
              }}
            >
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick(link.label);
                  }}
                >
                  <span className="external-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="nav-status">
          <div className="status-indicator"></div>
          <span>SECURE CONNECTION</span>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
