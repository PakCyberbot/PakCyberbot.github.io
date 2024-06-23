import './home.css';
import Socials from "./socials";
import img from '../props/hacker2.png';
import Buttons from '../button/button';
import { BsFillCpuFill } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [ipInfo, setIpInfo] = useState(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to get IP address and location information
    axios.get('http://ip-api.com/json')
      .then(response => {
        setIpInfo(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching IP info:', error);
        setLoading(false);
      });
  }, []);
  return (
    <>
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <a href='https://app.hackthebox.com/profile/1098862' className='circle' target='_blank' ></a>
          <a href='https://tryhackme.com/p/PakCyberbot' className='circle' target='_blank' ></a>
          <a href='https://www.cloudskillsboost.google/public_profiles/4b4fb9c0-10b4-4d04-919e-4df9129364f8
' className='circle' target='_blank' ></a>
          <a href='https://learn.microsoft.com/en-us/users/pakcyberbot/' className='circle' target='_blank' ></a>
          <a href='https://www.hackerrank.com/pakcyberbot' className='circle' target='_blank' ></a>
          <a href='https://ctftime.org/user/138629' className='circle' target='_blank' ></a>
          <a href='https://pakcyberbot.github.io' className='circle' target='_blank' ></a>
          <a href='https://api.ca.badgr.io/public/collections/4104c95894fb4505ad1500cd05648601' className='circle' target='_blank' ></a>

        </div>

        <img src={img} alt='' />
      </div>

      {/* <a href='https://github.com/PakCyberbot/PakCyberbot/blob/main/assets/vid.gif' target='_blank' className='scroll-down'>
        <hr />
        <h5> ( T ³ )</h5>
        <BsFillCpuFill className='scroll' />
        <hr />
      </a> */}

      <h2>
        <span>About Me</span> <br />
        <p style={{textAlign:'center'}}>
        I am a Self-Taught CyberSecurity Researcher, CTF Player, Junior Pentester, and a Programmer. Currently learning and honing my skills in Purple Teaming, Bug Bounty, and OSINT to become a well-rounded security professional.
        </p>
      </h2>
      {/* IP address */}
      {/* <h1>IP Address and Location</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>IP Address:</strong> {ipInfo.query}</p>
          <p><strong>Location:</strong> {ipInfo.city}, {ipInfo.regionName}, {ipInfo.country}</p>
          <p><strong>Coordinates:</strong> {ipInfo.lat}, {ipInfo.lon}</p>
          <p><strong>ISP:</strong> {ipInfo.isp}</p>
        </div>
      )} */}
      {/* IP address */}

      <Socials />
    

      <Buttons />
    </div>
</>
  );
}

export default Home;
