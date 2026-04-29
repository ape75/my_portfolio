import { Modal, Text, List, Group, Button } from '@mantine/core';
import { IconStarFilled, IconCheckFilled } from '@tabler/icons-react';
import CarouselComponent from '../CarouselComponent';
import GradientBadge from '../GradientBadge';
import gradients from '../../constants/gradients';
import icons from '../../constants/icons';


const KalibroImages = [
        "/assets/img/kalibro_main.png",
        "/assets/img/kalibro_1.png",
        "/assets/img/kalibro_2.png",
        "/assets/img/kalibro_3.png",
        "/assets/img/kalibro_4.png"
    ];  


function KalibroModal({ modalProps, stack }) {
return (
    <Modal {...modalProps} title="Kalibro" size="lg">
        <div>                    
            <CarouselComponent
                imageArray={KalibroImages}
                projectName={"Kalibro"}
            />
            <Text size="lg" fw={500} mb="sm" mt="md" c="var(--accent-primary)">Project Overview</Text>
            <Text mb="md">
                Kalibro is a powerful website analysis and auditing tool that helps businesses 
                optimize their online presence. It provides comprehensive insights into website 
                performance, SEO, accessibility, and user experience.
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
                <List.Item>Rate your website based on advanced Kalibro scoring algorithm and compare it to other websites</List.Item>
                <List.Item>Website technical analysis (whois & domain, IP & location, DNS Records, Web Stack)</List.Item>
                <List.Item>Security analysis & audit, SSL Certificate analysis</List.Item>
                <List.Item>Web diagnostic HUB for analysing website performance, accessibility, SEO and best practices</List.Item>
                <List.Item>UI/UX auditing including website color palette analysis and art style classification</List.Item>
            </List> 
            <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">My Contributions:</Text>
            <List 
                spacing="xs" 
                size="sm" 
                icon={                            
                    <IconCheckFilled size={18} color="#10b981" />                            
                }>
                <List.Item>Contributed to backend development</List.Item>
                <List.Item>Improved the website analysis functions and the scoring/analysis algorithm</List.Item>
                <List.Item>Implemented visual classification of websites using a YOLOv5-based computer vision model</List.Item>                        
                <List.Item>Debugged and fixed bugs on the backend code</List.Item>                    
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
                    leftSection={icons.flask}
                    gradientColor={gradients.green}
                >
                    Flask
                </GradientBadge>                   
                <GradientBadge 
                    leftSection={icons.postgres}
                    gradientColor={gradients.green}
                >
                    PostgreSQL
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
                    onClick={() => stack.close('kalibro')}
                    title='Close Kalibro details'
                    className='btn-pulse'
                >
                    Close
                </Button>
            </Group>   
        </div> 
    </Modal>
  );
}

export default KalibroModal;