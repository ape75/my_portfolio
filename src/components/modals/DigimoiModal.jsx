import { Modal, Text, List, Group, Button } from '@mantine/core';
import { IconStarFilled, IconCheckFilled } from '@tabler/icons-react';
import CarouselComponent from '../CarouselComponent';
import GradientBadge from '../GradientBadge';
import gradients from '../../constants/gradients';
import icons from '../../constants/icons';


const DigimoiImages = [
  "/my_portfolio/assets/img/digimoi_main.png",
  "/my_portfolio/assets/img/digimoi_1.png",
  "/my_portfolio/assets/img/digimoi_2.png",
  "/my_portfolio/assets/img/digimoi_3.png",
  "/my_portfolio/assets/img/digimoi_4.png"
];

function DigimoiModal({ modalProps, stack }) {
  return (
    <Modal {...modalProps} title="Digimoi" size="lg">
      <div>
        <CarouselComponent imageArray={DigimoiImages} projectName="Digimoi" />
        <Text size="lg" fw={500} mb="sm" mt="md" c="var(--accent-primary)">Project Overview</Text>
        <Text mb="md">
          Digimoi is a citizen engagement platform that enables public sector organizations 
          and companies to collect visual feedback and engage with their communities...
        </Text>
        <Text fw={500} mb="xs" c="var(--accent-primary)">Key Features:</Text>
        <List
            spacing="xs"
            size="sm"
            center
            icon={                            
                <IconStarFilled size={22} color='gold' />
            }
        >
            <List.Item>Create geolocation targeted campaigns</List.Item>
            <List.Item>TDefine custom rewards for campaigns</List.Item>
            <List.Item>Citizen engagement with mobile application</List.Item>
            <List.Item>Custom API for automatic object detection</List.Item>
            <List.Item>Accept/reject images automatically or manually</List.Item>
            <List.Item>YOLOv5 Model and dataset management</List.Item>
            <List.Item>Built-in annotation tool for custom datasets for creating customized object detection models</List.Item>
        </List> 
        <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">My Contributions:</Text>
        <List 
            spacing="xs" 
            size="sm" 
            icon={                            
                <IconCheckFilled size={18} color="#10b981" />                            
            }>
            <List.Item>Worked as part of an international team in collaboration with a subcontractor's development team</List.Item>
            <List.Item>Participated in creating Software Requirements Specification (SRS) documentation as part of project planning and stakeholder collaboration</List.Item>
            <List.Item>Performed QA testing for the web-based campaign management tool and mobile application</List.Item>
            <List.Item>Designed and implemented automatic object detection features using YOLOv5-based computer vision models</List.Item>
            <List.Item>Built a web application for YOLOv5 model management and dataset annotation (JavaScript-based drawing tool)</List.Item>
            <List.Item>Integrated dataset image libraries with AWS S3</List.Item>
            <List.Item>Built a secure integration between model/dataset management and campaign management systems using token-based (JWT) user authentication</List.Item>
            <List.Item>Developed a custom API for object detection using AWS API Gateway and AWS Lambda</List.Item>                     
        </List>                   
        <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">Technologies Used:</Text>
        <Group gap="xs" mb="md">
            <GradientBadge 
                leftSection={icons.react}
                gradientColor={gradients.green}
            >
                React
            </GradientBadge>                         
            <GradientBadge 
                leftSection={icons.python}
                gradientColor={gradients.green}
            >
                Python
            </GradientBadge>                      
            <GradientBadge 
                leftSection={icons.django}
                gradientColor={gradients.green}
            >
                Django
            </GradientBadge>                    
            <GradientBadge 
                leftSection={icons.postgres}
                gradientColor={gradients.green}
            >
                PostgreSQL
            </GradientBadge>  
            <GradientBadge 
                leftSection={icons.javascript}
                gradientColor={gradients.green}
            >
                JavaScript
            </GradientBadge>                 
            <GradientBadge 
                leftSection={icons.googleMaps}
                gradientColor={gradients.green}
            >
                Google Maps API
            </GradientBadge>                          
            <GradientBadge 
                leftSection={icons.pytorch}
                gradientColor={gradients.green}
            >
                YOLOv5
            </GradientBadge>                                   
        </Group>
        
        <Group mt="xl">
            <Button 
                variant="gradient"
                gradient={{ from: '#4f46e5', to: '#7c3aed', deg: 90 }}
                onClick={() => stack.close('digimoi')}
                title="Close details"
                className='btn-pulse'
            >
                Close
            </Button>
        </Group>
      </div>
    </Modal>
  );
}

export default DigimoiModal;