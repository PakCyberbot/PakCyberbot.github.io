import "./nav.css";

import { PiCertificateFill } from "react-icons/pi"
import { FaUserSecret } from "react-icons/fa6"
import {PiChalkboardTeacherDuotone} from "react-icons/pi"
import { Link } from "react-router-dom";
import { MdOutlineComputer } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import './LinkWithHover.css';

function Navbar() {
  return (
    <div className="navigation">

  <div className="link-container">
<Link to="/">
    <FaUserSecret className="icon active-nav" />
  
<span className="hover-text">Home</span>
</Link>
</div>

  

  <div className="link-container">
<Link to="https://www.linkedin.com/in/pakcyberbot/">
    <MdOutlineComputer className="icon" />
  
<span className="hover-text">Professional Experience</span>
</Link>
</div>
  <div className="link-container">
<Link to="/content">
    <PiChalkboardTeacherDuotone className="icon" />
  
<span className="hover-text">My Content</span>
</Link>
</div>
  <div className="link-container">
  <a href="https://pakcyberbot.github.io/CTF-Writeups/">
    <GiBookCover   className="icon" />
  
<span className="hover-text">CTF Writeups</span>
</a>
</div>

<div className="link-container">
<Link to="/myprojects">
    <FaTools className="icon" />
  
<span className="hover-text">My Projects</span>
</Link>
</div>

<div className="link-container">
<Link to="/about">
    <PiCertificateFill className="icon" />
  
<span className="hover-text">Certificates & Skills</span>
</Link>
</div>

</div>
  );
}

export default Navbar;
