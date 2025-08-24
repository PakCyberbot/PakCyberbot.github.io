import './home.css';
import Socials from "./socials";
import img from '../props/hacker2.png';
import Buttons from '../button/button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShieldAlt, FaTerminal, FaNetworkWired, FaServer, FaLock, FaCode, FaBug, FaSearch, FaUserSecret, FaFingerprint } from 'react-icons/fa';

function Home() {
  const [ipInfo, setIpInfo] = useState(null);
  const [connectionProgress, setConnectionProgress] = useState(0);

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

  return (
    <>
    <div id='home' className='container home-container'>
      {/* Profile Section - Preserving your existing hover-show and circle functionality */}
      <div className="profile-section">
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
      </div>

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

      {/* Social and Action Section */}
      <div className="social-section">
        <Socials />
      </div>

      <div className="action-section">
        <Buttons />
      </div>
    </div>
</>
  );
}

export default Home;
