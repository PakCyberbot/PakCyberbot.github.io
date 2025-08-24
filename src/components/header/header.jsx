import './header.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaShieldAlt, FaTerminal, FaNetworkWired, FaServer, FaClock, FaMapMarkerAlt, FaUserSecret, FaFingerprint, FaRocket } from 'react-icons/fa';

function Header() {
  const [text] = useTypewriter({
    words: ['Cybersecurity Enthusiast', 'Ethical Hacker', 'Programmer', 'Digital Investigator', 'Security Researcher', 'Bug Hunter'],
    loop: {},
    typeSpeed: 100
  });

  return (
    <div id='home' className='container header-container'>
      {/* Enhanced Header with Modern Design */}
      <div className="header-content">
        <div className="header-main">
          <div className="identity-section">
            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <FaUserSecret className="avatar-icon" />
              <div className="status-indicator online"></div>
            </div>
            <div className="identity-text">
              <h3 className='glitch'>
                Faraz Ahmed
              </h3>
              <span className='aka'>aka PakCyberbot</span>
            </div>
          </div>

          <div className="typewriter-section">
            <div className="prompt-line">
              <span className="prompt-symbol">$</span>
              <span className="prompt-text">whoami</span>
            </div>
            <div className="typewriter-output">
              <span className="output-prefix">&lt;</span>
              <span className="typewriter-text">{text}</span>
              <Cursor cursorColor='var(--color-pri)' />
              <span className="output-suffix">/&gt;</span>
            </div>
          </div>
        </div>

        <div className="header-stats">
          <div className="stat-item">
            <FaShieldAlt className="stat-icon" />
            <div className="stat-content">
              <span className="stat-label">STATUS</span>
              <span className="stat-value">SECURE</span>
            </div>
          </div>
          
          <div className="stat-item">
            <FaNetworkWired className="stat-icon" />
            <div className="stat-content">
              <span className="stat-label">PROTOCOL</span>
              <span className="stat-value">HTTPS/2.0</span>
            </div>
          </div>
          
          <div className="stat-item">
            <FaServer className="stat-icon" />
            <div className="stat-content">
              <span className="stat-label">SERVER</span>
              <span className="stat-value">ONLINE</span>
            </div>
          </div>
        </div>

        <div className="header-actions">
          <div className="action-badge">
            <FaRocket className="action-icon" />
            <span className="action-text">READY TO HACK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
