import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Content from "./components/content/content";
import Navbar from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import PageTransition from './components/PageTransition/PageTransition';

// Wrapper component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/myprojects" element={
          <PageTransition>
            <Experience />
          </PageTransition>
        } />
        <Route path="/content" element={
          <PageTransition>
            <Content />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function WebContent() {
  return (
    <Router>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Navbar />
      <main className="main-content">
        <AnimatedRoutes />
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default WebContent;
