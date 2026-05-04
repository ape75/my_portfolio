import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import ExpandableImage from './ExpandableImage';

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
            <ExpandableImage 
              src={src} 
              alt={`${projectName} details ${index + 1}`}
              maxHeight={300}
            />
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;