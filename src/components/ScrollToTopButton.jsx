import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';

function ScrollToTopButton({gradientColor}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Detect when modal is open/closed
  useEffect(() => {
    const checkModalStatus = () => {
      // Check if any Mantine modal overlay exists and is visible
      const overlay = document.querySelector('.mantine-Modal-overlay');
      if (overlay) {
        const isOverlayVisible = window.getComputedStyle(overlay).display !== 'none';
        setIsModalOpen(isOverlayVisible);
      } else {
        setIsModalOpen(false);
      }
    };

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(checkModalStatus);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    
    // Initial check
    checkModalStatus();
    
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't show button if modal is open OR not scrolled enough
  if (!isVisible || isModalOpen) return null;

  return (
    <Button
      variant="gradient"
      gradient={gradientColor}
      onClick={scrollToTop}
      title='Scroll back to top'
      style={{
        fontSize: '16px',
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        zIndex: 1000,
        borderRadius: '10px',
        width: '70px',
        height: '40px',
        padding: 0,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
      className='btn-pulse'
    >
      ↑ Top
    </Button>
  );
}

export default ScrollToTopButton;