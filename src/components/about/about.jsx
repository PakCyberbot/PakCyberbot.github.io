import "./about.css";
import Qualifications from "../qualifications/qualifications";
import ReactSkillbar from 'react-skillbars';

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function About() {
const percentage = 66;


  const progskills = [
    { type: 'Python', level: 85 },
    { type: 'Bash', level: 80 },
    { type: 'Powershell', level: 70 },
    { type: 'Javascript', level: 70 },
    { type: 'C/C++', level: 50 },
    { type: 'Java', level: 50 },
  ];

  // 'Incident Response',
  // 'Malware Analysis',
  // 'Security Architecture',
  // 'Threat Hunting',
  // 'Network Security',
  // 'Web Application Security',
  // 'Cryptography',
  // 'Security Policies and Compliance',
  // 'Security Awareness and Training',
  // 'Security Assessment and Risk Management',
  // 'Cloud Security',
  // 'IoT (Internet of Things) Security',
  // 'Mobile Security',
  // 'Secure Coding',
  // 'Wireless Network Security',
  // 'Identity and Access Management (IAM)',
  // 'Security Tools',
  const cyberskills = [
    { type: 'Pentesting', level: 80 },
    { type: 'Code Analysis', level: 70 },
    { type: 'OSINT', level: 60 },
    { type: 'Forensics', level: 50 },
    { type: 'Red Teaming', level: 40 },
    { type: 'Cryptography', level: 30 },
    { type: 'Reverse Engineering', level: 30 },
    { type: 'Malware Analysis', level: 20 },
    
  ];
  
  
  const ITskills = [
    { type: 'Troubleshooting', level: 80 },
    { type: 'Linux', level: 80 },
    { type: 'Windows', level: 70 },
    { type: 'Networking', level: 60 },
    { type: 'Cloud', level: 60 },
    { type: 'Devops', level: 40 },
    { type: 'AI', level: 20 },
  ];
  const colors = {
    bar: '#6AB8B3', // Change the bar color to green (#00ff00)
    title: {
      text: {
        hue: {
          minimum: 120, // Adjust the minimum hue for text to a green hue (around 120)
          maximum: 180, // Adjust the maximum hue for text to a green hue (around 180)
        },
        saturation: 50,
        level: {
          minimum: 30,
          maximum: 90,
        },
      },
      background: {
        hue: 120, // Set the background hue to a green hue (around 120)
        saturation: 50,
        level: 30,
      },
    },
  };
  
  return (
    

    <div id="about" className="container about-container">

      <h1 className="heading1" >My Digital Badges</h1>
      <div className="badge-container">
      <a href="https://credentials.offsec.com/7d159261-fceb-4503-8531-eeef31b68969#acc.TdbPX9Ry">
          <div className="coin oscp">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://www.credly.com/badges/22d82bbf-0a03-4761-a6ea-88088ca98388/public_url">
          <div className="coin googleit">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://www.credly.com/badges/381cc55c-1e00-47b3-a678-5454932708bf/public_url">
          <div className="coin ibmcyber">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://www.credly.com/badges/a6ba1de3-1579-4ac6-b452-697b8cab04e5/public_url">
          <div className="coin ciscocyber">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://api.ca.badgr.io/public/assertions/cCRrGYu6RuSVTrshLAiWSQ">
          <div className="coin tracelabcontestant">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://api.ca.badgr.io/public/assertions/kVQbK1cbTbmi_eBmryN_tQ">
          <div className="coin tracelabcoach">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
        <a href="https://www.credly.com/badges/80a15dbc-ab70-4dc3-abd6-f812bb0f25ff/public_url">
          <div className="coin gcloudsecurity">
            <div className="tails" ></div>
            <div className="heads" ></div>
          </div>
        </a>
      </div>
      {/* <h1 className="heading1" >My Skills</h1>

      

      <h2>Cyber Security</h2>

      <div className="badge-container">
      {cyberskills.map((skill, index) => {
        const textSize = skill.type.length <= 14 ? '10px' : '8px';

        return (
        
        <div key={index} style={{ width: 200, height: 200, margin:20 }}>
          <CircularProgressbar
            value={skill.level}
            text={skill.type}
            styles={buildStyles({
              textSize: textSize,
              pathColor: `rgb(0, 255, 191)`,
              textColor: `rgb(255, 255, 255)`,
              trailColor: `rgba(0, 255, 191, 0.1)`,
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
      )})}
      </div>


      

      <h2>Programming</h2>

      <div className="badge-container">
      {progskills.map((skill, index) => {
        const textSize = skill.type.length <= 14 ? '10px' : '8px';

        return (
        
        <div key={index} style={{ width: 200, height: 200, margin:20 }}>
          <CircularProgressbar
            value={skill.level}
            text={skill.type}
            styles={buildStyles({
              textSize: textSize,
              pathColor: `rgb(0, 255, 191)`,
              textColor: `rgb(255, 255, 255)`,
              trailColor: `rgba(0, 255, 191, 0.1)`,
              backgroundColor: '#11111',
            })}
          />
        </div>
      )})}
      </div>
      

      <h2>IT</h2>


      <div className="badge-container">
      {ITskills.map((skill, index) => {
        const textSize = skill.type.length <= 14 ? '10px' : '8px';

        return (
        
        <div key={index} style={{ width: 200, height: 200, margin:20 }}>
          <CircularProgressbar
            value={skill.level}
            text={skill.type}
            styles={buildStyles({
              textSize: textSize,
              pathColor: `rgb(0, 255, 191)`,
              textColor: `rgb(255, 255, 255)`,
              trailColor: `rgba(0, 255, 191, 0.1)`,
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
      )})}
      </div> */}

      <h1 className="heading1" >Certifications</h1>

      <h2>Competitions</h2>
      <Qualifications viewType='CTF'/>

      <h2>Exams</h2>
      <Qualifications viewType='Exams'/>

      <h2>Courses & Practical Work</h2>
      <Qualifications viewType='CyberSecurity'/>

      <Qualifications viewType='Programming'/>

      <Qualifications viewType='GeneralIT'/>
      <Qualifications viewType='Others'/>



    </div>
  );
}
export default About;
