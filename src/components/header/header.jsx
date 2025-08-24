import './header.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaUserSecret, FaTerminal } from 'react-icons/fa';

function Header() {
  const [text] = useTypewriter({
    words: ['Cybersecurity Enthusiast', 'Ethical Hacker', 'Security Researcher', 'CTF Player', 'Bug Hunter'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="identity-section">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <FaUserSecret className="avatar-icon" />
          </div>
          <div className="identity-text">
            <h1 className='glitch'>Faraz Ahmed</h1>
            <span className='aka'>aka PakCyberbot</span>
          </div>
        </div>

        <div className="typewriter-section">
          <div className="prompt-line">
            <FaTerminal className="terminal-icon" />
            <span className="prompt-text">$ whoami</span>
          </div>
          <div className="typewriter-output">
            <span className="typewriter-text">{text}</span>
            <Cursor cursorColor='var(--color-pri)' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
