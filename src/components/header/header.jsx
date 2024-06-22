import './header.css';
import React, { useState, useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

 

function Header() {
  const [text] = useTypewriter({
    words: ['Cybersecurity Enthusiast', 'Ethical Hacker', 'Programmer', 'Digital Investigator', "👇Click my image"],
    loop: {},
    typeSpeed: 50,
    typeSpeed: 100
  })

  return (
    <div id='home' className='container header-container'>
      <h3>
        <p>
          I<span>'</span>m
        </p>
        <h3 className='glitch'>
        Faraz Ahmed </h3><span className='aka'>aka PakCyberbot</span>
      </h3>
      
      <h2>&lt; {text}<Cursor cursorColor='lightgreen' />/&gt;</h2>      


      
    </div>
  );
}
export default Header;
