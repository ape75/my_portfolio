import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';

function ScrollToTopButton({gradientColor}) {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
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
    )
  );
}

export default ScrollToTopButton;