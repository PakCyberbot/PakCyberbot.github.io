import './header.css';
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaTerminal } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
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
      </div>
    </header>
  );
}

export default Header;
