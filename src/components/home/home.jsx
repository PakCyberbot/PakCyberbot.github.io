import './home.css';
import img from '../props/hacker2.png';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank, FaMicrosoft, FaGoogle, FaShieldAlt, FaTerminal, FaServer, FaLock, FaCode, FaSearch, FaUserSecret, FaFingerprint, FaExternalLinkAlt, FaArrowRight, FaBug, FaNetworkWired, FaClock, FaTrophy, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiTryhackme, SiHackthebox, SiHackernoon, SiMedium } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedin />, 
    url: 'https://linkedin.com/in/pakcyberbot',
    username: 'pakcyberbot',
    color: '#0077b5',
    hoverColor: '#00a0dc',
    category: 'social'
  },
  { 
    name: 'YouTube', 
    icon: <FaYoutube />, 
    url: 'https://youtube.com/@pakcyberbot',
    username: '@pakcyberbot',
    color: '#FF0000',
    hoverColor: '#FF4D4D',
    category: 'social'
  },
  { 
    name: 'Medium', 
    icon: <SiMedium />, 
    url: 'https://medium.com/@pakcyberbot',
    username: '@pakcyberbot',
    color: '#000000',
    hoverColor: '#404040',
    category: 'blog'
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/PakCyberbot',
    username: '@PakCyberbot',
    color: '#333',
    hoverColor: '#6e5494',
    category: 'coding'
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
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram />, 
    url: 'https://instagram.com/pakcyberbot',
    username: '@pakcyberbot',
    color: '#E1306C',
    hoverColor: '#FF5C8D',
    category: 'social'
  },
  { 
    name: 'Facebook', 
    icon: <FaFacebook />, 
    url: 'https://facebook.com/pakcyberbot',
    username: 'PakCyberbot',
    color: '#1877F2',
    hoverColor: '#3B82F6',
    category: 'social'
  }
];

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const achievements = [
    {
      title: "OSCP Certification (Awarded by Offsec)",
      issuer: "Offensive Security",
      year: 2024,
      description: "Awarded free OSCP certification by Offsec for securing 1st position in their report writing contest.",
      icon: <FaShieldAlt className="achievement-icon" />,
      color: "#FF6B00",
      url: "https://youtu.be/8BnOxdsT7qY"
    },
    {
      title: "National CyberHackathon 2024 Finalist",
      issuer: "National Level",
      year: 2024,
      description: "Secured 3rd position in the finals of National level CyberHackathon 2024.",
      icon: <FaTrophy className="achievement-icon" />,
      color: "#FFD700",
      url: "https://www.linkedin.com/posts/pakcyberbot_cybersecurity-hackathon-teamrevolt-activity-7275030483439153152-s3Du"  // Update with actual URL if available
    },
    {
      title: "BlackHat MEU CTF 2024 First Blood",
      issuer: "BlackHat Middle East",
      year: 2024,
      description: "Achieved first blood in BlackHat MEU CTF 2024, demonstrating exceptional skills in competitive cybersecurity.",
      icon: <FaBug className="achievement-icon" />,
      color: "#FF0000",
      url: "https://www.linkedin.com/posts/pakcyberbot_blackhatmea-blackhat-ctfcompetition-activity-7236315931671461889-qqi1"
    },
    {
      title: "TryHackMe 365 Days Challenge",
      issuer: "TryHackMe",
      year: 2023,
      description: "Successfully completed the 365 days learning streak challenge on TryHackMe platform.",
      icon: <SiTryhackme className="achievement-icon" />,
      color: "#1DB954",
      url: "https://medium.com/system-weakness/cybersecurity-quest-my-365-days-on-tryhackme-c99f7f0cca0f"
    },
    {
      title: "CTF Challenge Creator",
      issuer: "Multiple Platforms",
      year: "2023-Present",
      description: "Created numerous CTF challenges for HackTheBox, TryHackMe, and various onsite events and organizations.",
      icon: <FaCode className="achievement-icon" />,
      color: "#9FEF00",
      url: "https://medium.com/@pakcyberbot/my-cybersecurity-journey-2024-achievements-challenges-and-milestones-c718793f7193#8340"  // Update with actual URL if available
    },
    {
      title: "Trace Labs CTF Judge & Participant",
      issuer: "Trace Labs",
      year: "2023-Present",
      description: "Active participant and judge in multiple Trace Labs Search Party CTF events, contributing to OSINT investigations for missing persons.",
      icon: <FaSearch className="achievement-icon" />,
      color: "#00A4EF",
      url: "https://www.linkedin.com/posts/pakcyberbot_i-usually-participate-in-trace-labs-as-activity-7229046076530429952-AOLK"
    }
  ];

  const skills = [
    { name: 'Red Teaming', icon: FaBug, level: 85, color: 'var(--color-pri)' },
    { name: 'DFIR', icon: FaNetworkWired, level: 70, color: 'var(--color-sec)' },
    { name: 'OSINT', icon: FaSearch, level: 85, color: 'var(--color-pri)' },
    { name: 'DevOps', icon: FaShieldAlt, level: 50, color: 'var(--color-sec)' },
    { name: 'Challenge Creation', icon: FaLock, level: 70, color: 'var(--color-pri)' },
    { name: 'Programming', icon: FaCode, level: 75, color: 'var(--color-sec)' }
  ];

  const filteredSocials = activeCategory === 'all' 
    ? socialLinks 
    : socialLinks.filter(link => link.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Platforms' },
    { id: 'social', name: 'Social' },
    { id: 'ctf', name: 'CTF Platforms' },
    { id: 'blog', name: 'Blog' },
    { id: 'coding', name: 'Coding' },
    { id: 'certifications', name: 'Certifications' },
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
              <span className="status-text">ONLINE</span>
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
            <p>I am an OSCP, Google Cloud Security Engineer, Google IT Professional, and eJPT-certified specialist with strong programming skills across multiple languages. With extensive experience in cybersecurity, I have designed CTF challenges for HackTheBox and contributed to various security projects. Additionally, My team secured 2nd runner-up in a national-level CTF hackathon in 2024, showcasing my expertise in offensive security and problem-solving.</p>
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

        {/* Achievements Section */}
        <motion.div 
          className="achievements-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-header">
            <FaTrophy className="section-icon" />
            <h2>ACHIEVEMENTS</h2>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.a 
                key={index}
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card-link"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 10px 20px rgba(0,0,0,0.3)` }}
              >
                <div className="achievement-card">
                  <div className="achievement-header" style={{ backgroundColor: `${achievement.color}20`, borderLeft: `4px solid ${achievement.color}` }}>
                    <div className="achievement-icon-wrapper" style={{ backgroundColor: achievement.color }}>
                      {achievement.icon}
                    </div>
                    <div className="achievement-title">
                      <h3>{achievement.title}</h3>
                      <div className="achievement-issuer">{achievement.issuer} • {achievement.year}</div>
                    </div>
                    <FaExternalLinkAlt className="external-link-icon" style={{ color: achievement.color }} />
                  </div>
                  <div className="achievement-body">
                    <p>{achievement.description}</p>
                    <span className="read-more" style={{ color: achievement.color }}>
                      Check More <FaArrowRight className="read-more-arrow" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

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
              href="mailto:pakcyberbot@proton.me" 
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
