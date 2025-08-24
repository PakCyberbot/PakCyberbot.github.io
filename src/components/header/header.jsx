import './header.css';
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaTerminal, FaChevronDown } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const [text] = useTypewriter({
    words: ['Cybersecurity Specialist', 'Ethical Hacker', 'CTF Player', 'Security Researcher', 'Bug Bounty Hunter'],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="identity-section">
            <div className="identity-text">
              <h1 className='glitch'>Faraz Ahmed</h1>
              <div className="typewriter-wrapper">
                <span className='aka'>@PakCyberbot</span>
                <div className="typewriter-output">
                  <span className="typewriter-text">{text}</span>
                  <Cursor cursorColor='var(--color-pri)' />
                </div>
              </div>
            </div>
          </div>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-text">{item.label}</span>
                <span className="nav-underline"></span>
              </button>
            ))}
          </nav>

          <div className="mobile-menu-toggle">
            <FaChevronDown className="menu-icon" />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="nav-text">{item.label}</span>
            <span className="nav-underline"></span>
          </button>
        ))}
      </div>
    </>
  );
}

export default Header;
