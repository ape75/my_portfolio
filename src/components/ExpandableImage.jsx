import { useState } from 'react';
import { Modal, Image } from '@mantine/core';

function ExpandableImage({ src, alt, maxHeight }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Image 
        title='Click to zoom'
        src={src} 
        alt={alt}
        style={{
          maxWidth: 'calc(100% - 140px)',
          maxHeight: maxHeight,
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
        }}
        onClick={() => setOpened(true)}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      />
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="100%"
        padding={0}
        withCloseButton
        styles={{
          root: {
            position: 'fixed',
            zIndex: 10000,
          },
          body: {
            padding: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          },
          content: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
          inner: {
            padding: 0,
          },
          close: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001,
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)',
            },
          },
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Modal>
    </>
  );
}

export default ExpandableImage;