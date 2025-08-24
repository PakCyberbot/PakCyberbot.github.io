import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Content from "./components/content/content";
import Navbar from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route, Link,useLocation } from 'react-router-dom';

import React, { useEffect } from 'react';

function WebContent() {
  
  return (
    <>
    
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route index path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/myprojects" element={<Experience/>} />
            <Route path="/content" element={<Content/>} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}
export default WebContent;
