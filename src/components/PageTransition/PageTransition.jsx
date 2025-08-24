import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollPosition = useRef(0);

  const pageTitles = {
    '/': 'Home',
    '/about': 'About',
    '/skills': 'Skills',
    '/experience': 'Projects',
    '/content': 'Content',
    '/contact': 'Contact'
  };

  // Save scroll position before animation starts
  useEffect(() => {
    scrollPosition.current = window.scrollY;
    
    const handlePopState = () => {
      // Restore scroll position after browser navigation
      window.scrollTo(0, scrollPosition.current);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle page transition
  useEffect(() => {
    setPageTitle(pageTitles[location.pathname] || '');
    setIsAnimating(true);
    
    // Smooth scroll to top on route change
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
      scrollToTop();
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      // Save current scroll position before unmount
      scrollPosition.current = window.scrollY;
    };
  }, [location]);

  return (
    <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.5 },
            x: { duration: 0.5 }
          }
        }}
        exit={{ 
          opacity: 0, 
          x: -50,
          transition: { 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1] 
          }
        }}
        onAnimationStart={() => {
          // Disable scroll during animation
          document.body.style.overflow = 'hidden';
        }}
        onAnimationComplete={() => {
          // Re-enable scroll after animation
          document.body.style.overflow = 'auto';
        }}
      >
        {isAnimating && (
          <motion.div 
            className="page-transition-overlay"
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ 
              scaleX: [0, 1, 1, 0], 
              opacity: [0, 0.9, 0.9, 0], 
              originX: [0, 0, 1, 1] 
            }}
            transition={{ 
              duration: 1, 
              ease: [0.87, 0, 0.13, 1], 
              times: [0, 0.3, 0.7, 1] 
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: [20, 0, 0, -20],
                scale: [0.9, 1.05, 1, 0.95]
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.87, 0, 0.13, 1], 
                times: [0, 0.3, 0.7, 1],
                scale: {
                  duration: 1.2,
                  times: [0, 0.2, 0.5, 1]
                }
              }}
              className="page-title"
            >
              {pageTitle}
            </motion.span>
          </motion.div>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
