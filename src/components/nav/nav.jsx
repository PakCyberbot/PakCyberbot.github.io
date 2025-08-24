import "./nav.css";
import { PiCertificateFill } from "react-icons/pi"
import { FaUserSecret } from "react-icons/fa6"
import {PiChalkboardTeacherDuotone} from "react-icons/pi"
import { Link } from "react-router-dom";
import { MdOutlineComputer } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { FaShieldAlt, FaNetworkWired, FaTerminal, FaRocket } from "react-icons/fa";
import './LinkWithHover.css';

function Navbar() {
  return (
    <div className="navigation">
      {/* Enhanced Navigation Header */}
      <div className="nav-header">
        <div className="nav-logo">
          <FaShieldAlt className="nav-shield-icon" />
          <div className="nav-title">
            <span className="nav-main-title">PAK CYBERBOT</span>
            <span className="nav-subtitle">SECURITY NAV</span>
          </div>
        </div>
        <div className="nav-status">
          <span className="nav-status-dot online"></span>
          <span className="nav-status-text">SECURE</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <div className="link-container">
          <Link to="/" className="nav-link">
            <FaUserSecret className="icon active-nav" />
            <span className="hover-text">Home</span>
            <div className="link-glow"></div>
          </Link>
        </div>

        <div className="link-container">
          <Link to="/about" className="nav-link">
            <PiCertificateFill className="icon" />
            <span className="hover-text">Certificates & Skills</span>
            <div className="link-glow"></div>
          </Link>
        </div>

        <div className="link-container">
          <Link to="/content" className="nav-link">
            <PiChalkboardTeacherDuotone className="icon" />
            <span className="hover-text">My Content</span>
            <div className="link-glow"></div>
          </Link>
        </div>

        <div className="link-container">
          <Link to="/myprojects" className="nav-link">
            <FaTools className="icon" />
            <span className="hover-text">My Projects</span>
            <div className="link-glow"></div>
          </Link>
        </div>

        {/* External Links Section */}
        <div className="external-links-section">
          <div className="section-divider">
            <FaNetworkWired className="divider-icon" />
            <span>EXTERNAL</span>
          </div>
          
          <div className="link-container">
            <a href="https://pakcyberbot.github.io/CTF-Writeups/" className="nav-link external">
              <GiBookCover className="icon" />
              <span className="hover-text">CTF Writeups</span>
              <div className="link-glow"></div>
            </a>
          </div>

          <div className="link-container">
            <a href="https://www.linkedin.com/in/pakcyberbot/" className="nav-link external">
              <MdOutlineComputer className="icon" />
              <span className="hover-text">Professional Experience</span>
              <div className="link-glow"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="nav-footer">
        <div className="nav-connection">
          <FaTerminal className="connection-icon" />
          <div className="connection-info">
            <span className="connection-status">CONNECTED</span>
            <div className="connection-bar">
              <div className="connection-fill"></div>
            </div>
          </div>
        </div>
        
        <div className="nav-version">
          <FaRocket className="version-icon" />
          <span className="version-text">v2.0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
