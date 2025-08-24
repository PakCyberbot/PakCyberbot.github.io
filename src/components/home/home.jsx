import './home.css';
import img from '../props/hacker2.png';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank, FaMicrosoft, FaGoogle, FaShieldAlt, FaTerminal, FaServer, FaLock, FaCode, FaSearch, FaUserSecret, FaFingerprint, FaExternalLinkAlt, FaArrowRight, FaBug, FaNetworkWired, FaClock } from 'react-icons/fa';
import { SiTryhackme, SiHackthebox, SiHackernoon } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/PakCyberbot',
    username: '@PakCyberbot',
    color: '#333',
    hoverColor: '#6e5494',
    category: 'dev'
  },
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin />, 
    url: 'https://linkedin.com/in/pakcyberbot',
    username: 'pakcyberbot',
    color: '#0077b5',
    hoverColor: '#00a0dc',
    category: 'professional'
  },
  { 
    name: 'HackTheBox', 
    icon: <SiHackthebox />, 
    url: 'https://app.hackthebox.com/profile/1098862',
    username: 'PakCyberbot',
    color: '#9fef00',
    hoverColor: '#b8ff33',
    category: 'ctf'
  },
  { 
    name: 'TryHackMe', 
    icon: <SiTryhackme />, 
    url: 'https://tryhackme.com/p/PakCyberbot',
    username: 'PakCyberbot',
    color: '#1db954',
    hoverColor: '#1ed760',
    category: 'ctf'
  },
  { 
    name: 'CTFTime', 
    icon: <FaClock />, 
    url: 'https://ctftime.org/user/138629',
    username: 'PakCyberbot',
    color: '#ff9f1c',
    hoverColor: '#ffb347',
    category: 'ctf'
  },
  { 
    name: 'Google Cloud', 
    icon: <FaGoogle />, 
    url: 'https://www.cloudskillsboost.google/public_profiles/4b4fb9c0-10b4-4d04-919e-4df9129364f8',
    username: 'PakCyberbot',
    color: '#4285f4',
    hoverColor: '#5a95f5',
    category: 'certifications'
  },
  { 
    name: 'Microsoft Learn', 
    icon: <FaMicrosoft />, 
    url: 'https://learn.microsoft.com/en-us/users/pakcyberbot/',
    username: 'pakcyberbot',
    color: '#00a4ef',
    hoverColor: '#33b5f7',
    category: 'certifications'
  },
  { 
    name: 'HackerRank', 
    icon: <FaHackerrank />, 
    url: 'https://www.hackerrank.com/pakcyberbot',
    username: 'pakcyberbot',
    color: '#2ec866',
    hoverColor: '#57d68d',
    category: 'coding'
  },
  { 
    name: 'Twitter', 
    icon: <FaTwitter />, 
    url: 'https://twitter.com/pakcyberbot',
    username: '@pakcyberbot',
    color: '#1da1f2',
    hoverColor: '#1a91da',
    category: 'social'
  }
];

function Home() {
  const [ipInfo, setIpInfo] = useState(null);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Make an API request to get IP address and location information
    axios.get('http://ip-api.com/json')
      .then(response => {
        setIpInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching IP info:', error);
      });

    // Simulate system status
    const timer = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Penetration Testing', icon: FaBug, level: 95, color: 'var(--color-pri)' },
    { name: 'Network Security', icon: FaNetworkWired, level: 90, color: 'var(--color-sec)' },
    { name: 'Web Security', icon: FaShieldAlt, level: 88, color: 'var(--color-pri-light)' },
    { name: 'Forensics', icon: FaSearch, level: 85, color: 'var(--color-sec-light)' },
    { name: 'Cryptography', icon: FaLock, level: 82, color: 'var(--color-pri)' },
    { name: 'Malware Analysis', icon: FaCode, level: 80, color: 'var(--color-sec)' }
  ];

  const filteredSocials = activeCategory === 'all' 
    ? socialLinks 
    : socialLinks.filter(link => link.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Platforms' },
    { id: 'ctf', name: 'CTF Platforms' },
    { id: 'coding', name: 'Coding' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'professional', name: 'Professional' },
    { id: 'social', name: 'Social' },
  ];

  return (
    <div className='home' id='home'>
      <div className='container home-container'>
        {/* Profile Section */}
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-header">
            <div className="security-badge">
              <FaShieldAlt className="security-icon" />
              <span className="security-text">SECURE ACCESS</span>
            </div>
            <div className="system-status">
              <span className="status-dot online"></span>
              <span className="status-text">SECURE</span>
            </div>
          </div>

          <div className='logo'>
            <div className='hover-show'>
              <a href='https://app.hackthebox.com/profile/1098862' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://tryhackme.com/p/PakCyberbot' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://www.cloudskillsboost.google/public_profiles/4b4fb9c0-10b4-4d04-919e-4df9129364f8' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://learn.microsoft.com/en-us/users/pakcyberbot/' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://www.hackerrank.com/pakcyberbot' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://ctftime.org/user/138629' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://pakcyberbot.github.io' className='circle' target='_blank' rel="noopener noreferrer"></a>
              <a href='https://api.ca.badgr.io/public/collections/4104c95894fb4505ad1500cd05648601' className='circle' target='_blank' rel="noopener noreferrer"></a>
            </div>

            <img src={img} alt='Profile' />
          </div>

          <div className="profile-info">
            <div className="user-identity">
              <FaUserSecret className="identity-icon" />
              <span className="identity-text">PAK CYBERBOT</span>
            </div>
            <div className="access-level">
              <FaFingerprint className="fingerprint-icon" />
              <span className="level-text">LEVEL 5 ACCESS</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced About Section */}
        <div className="about-section">
          <div className="section-header">
            <FaTerminal className="section-icon" />
            <h2>SYSTEM ANALYSIS</h2>
          </div>
          
          <div className="about-content">
            <p>I am a Self-Taught CyberSecurity Researcher, CTF Player, Junior Pentester, and a Programmer. Currently learning and honing my skills in Purple Teaming, Bug Bounty, and OSINT to become a well-rounded security professional.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-item" style={{ '--skill-color': skill.color }}>
                  <div className="skill-header">
                    <Icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Status Section */}
        <div className="system-status-section">
          <div className="connection-status">
            <div className="status-header">
              <FaServer className="status-icon" />
              <h3>CONNECTION STATUS</h3>
            </div>
            
            <div className="connection-details">
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${connectionProgress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{connectionProgress}%</span>
              </div>
              
              <div className="status-indicators">
                <div className="status-item">
                  <span className="status-dot online"></span>
                  <span>Authentication</span>
                </div>
                <div className="status-item">
                  <span className="status-dot online"></span>
                  <span>Encryption</span>
                </div>
                <div className="status-item">
                  <span className="status-dot online"></span>
                  <span>Firewall</span>
                </div>
              </div>
            </div>
          </div>

          {ipInfo && (
            <div className="network-info">
              <div className="info-header">
                <FaNetworkWired className="info-icon" />
                <h3>NETWORK INFO</h3>
              </div>
              
              <div className="info-details">
                <div className="info-row">
                  <span className="info-label">IP Address:</span>
                  <span className="info-value">{ipInfo.query}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{ipInfo.city}, {ipInfo.country}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Security:</span>
                  <span className="status-badge online">SECURE</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Social Media Section */}
        <motion.section 
          className="social-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="section-header">
            <FaNetworkWired className="section-icon" />
            <h2>CONNECT WITH ME</h2>
          </div>
          
          <div className="social-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="social-grid">
            <AnimatePresence>
              {filteredSocials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card ${hoveredCard === index ? 'hovered' : ''}`}
                  style={{ '--card-color': social.color, '--card-hover': social.hoverColor }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <div className="social-details">
                    <h3>{social.name}</h3>
                    <p>{social.username}</p>
                  </div>
                  <div className="social-arrow">
                    <FaExternalLinkAlt />
                  </div>
                  <div className="social-glow" />
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="social-footer">
            <p>Let's connect and collaborate on exciting projects!</p>
            <motion.a 
              href="#contact" 
              className="contact-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <FaArrowRight />
            </motion.a>
          </div>
        </motion.section>

        <div className="action-section">
          {/* Action buttons can be added here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
