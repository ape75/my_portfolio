import { Carousel } from '@mantine/carousel';
import { Image, Box } from '@mantine/core';

const CarouselComponent = ({ imageArray, projectName }) => {
  return (
    <Carousel   
        withIndicators  
        withControls                    
        height={320}
        slideSize="100%"
        slideGap={0}
        controlSize={36}
        loop
        styles={{
            slide: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },       
        }}
        emblaOptions={{ loop: true, align: 'center' }}
    >
      {imageArray.map((src, index) => (
        <Carousel.Slide key={index}>
          <Box
            style={{
              width: '100%',
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image 
              src={src} 
              alt={`${projectName} details ${index + 1}`}
              style={{
                maxWidth: 'calc(100% - 140px)',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;