import React from 'react';
import './socials.css'; // Import the CSS file
import { SocialIcon } from 'react-social-icons'


const Socials = () => {
    const iconSize = 16; // Change the size to your preferred value in pixels

  return (
    <div className='containersoc social-wrapper'>
        <SocialIcon url="https://www.twitter.com/pakcyberbot" className='social-icons'/>
        <SocialIcon url="https://www.linkedin.com/in/pakcyberbot/" className='social-icons'/>
        <SocialIcon url="https://github.com/PakCyberbot" className='social-icons'/>
        <SocialIcon url="https://pakcyberbot.medium.com/" className='social-icons'/>
        <SocialIcon url="https://www.youtube.com/@pakcyberbot" className='social-icons'/>
        <SocialIcon url="https://www.instagram.com/pakcyberbot/" className='social-icons'/>
        <SocialIcon url="https://web.facebook.com/pakcyberbot" className='social-icons'/>

        
    </div>
    // <div className="containersoc social-wrapper">
    //   <FaFacebook size={iconSize} sid="facebook" className="fa-social" />
    //   <FaTwitter size={iconSize} id="twitter" className="fa-social" />
    //   <FaCodepen size={iconSize} id="codepen" className="fa-social" />
    //   <FaFreeCodeCamp size={iconSize} id="fcc" className="fa-social" />
    //   <FaGithub size={iconSize} id="github" className="fa-social" />
    //   <FaInstagram size={iconSize} id="instagram" className="fa-social" />
    //   <FaLinkedin size={iconSize} id="linkedin" className="fa-social" />
    //   <FaMeetup size={iconSize} id="meetup" className="fa-social" />
    //   <FaTwitch size={iconSize} id="twitch" className="fa-social" />
    //   <FaEnvelope size={iconSize} id="email" className="fa-social" />
    // </div>
  );
}

export default Socials;
