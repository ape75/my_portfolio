import { Modal, Text, List, Group, Button } from '@mantine/core';
import { IconStarFilled, IconCheckFilled } from '@tabler/icons-react';
import CarouselComponent from '../CarouselComponent';
import GradientBadge from '../GradientBadge';
import gradients from '../../constants/gradients';
import icons from '../../constants/icons';
import PolarLogo from '../PolarLogo';

const CalevalaLabImages = [
    "/assets/img/calevalab_main.png",
    "/assets/img/calevalab_1.png",
    "/assets/img/calevalab_2.png",
    "/assets/img/calevalab_3.png",
    "/assets/img/calevalab_4.png",
    "/assets/img/calevalab_5.png",
    "/assets/img/calevalab_6.png"
];

function CalevaLabModal({ modalProps, stack }) {
return (
    <Modal {...modalProps} title="CalevaLAB" size="lg">
        <div>
            <CarouselComponent
                imageArray={CalevalaLabImages}
                projectName={"CalevaLAB"}
            />     
            <Text size="lg" fw={500} mb="sm" c="var(--accent-primary)">Project Overview</Text>
            <Text mb="md">
                CalevaLAB is an athlete development platform for athletes, coaches and club managers.
                It empowers coaches with real-time data for strategic decision-making and
                offers a centralized hub for athlete progress, stats, and communication.
            </Text>
            <List
                spacing="xs"
                size="sm"
                center
                icon={                            
                    <IconStarFilled size={22} color='gold' />                           
                }
            >
                <List.Item>Team, athelete and coach management</List.Item>
                <List.Item>Create and view training programs and exercises</List.Item>
                <List.Item>Record and track injury data</List.Item>
                <List.Item>Record and monitor workload data</List.Item>
                <List.Item>Set personal goals</List.Item>
                <List.Item>Monitor progress with test results</List.Item>
                <List.Item>Monitor your Polar sport watch exersice data</List.Item>
            </List>                   
            <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">My Contributions:</Text>
            <List 
                spacing="xs" 
                size="sm" 
                icon={                            
                    <IconCheckFilled size={18} color="#10b981" />                            
                }>
                <List.Item>Worked as part of an international team in collaboration with a subcontractor's development team</List.Item>
                <List.Item>Added new features  and views for managing test categories, tests, and results including all the necessary additions to backend, database and frontend</List.Item>
                <List.Item>Integrated Polar AccessLink API with the CalevaLAB user account using OAuth2 protocol and built a dedicated view for Polar data</List.Item>
                <List.Item>Debugged and fixed bugs on the backend and frontend codes</List.Item>                    
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
                    leftSection={icons.nodejs}
                    gradientColor={gradients.green}
                >
                    Node.js
                </GradientBadge>  
                <GradientBadge 
                    leftSection={icons.mongodb}
                    gradientColor={gradients.green}
                >
                    MongoDB
                </GradientBadge>                          
                <GradientBadge  
                    leftSection={<PolarLogo width={60} height={60} />}                   
                    gradientColor={gradients.green}
                >
                    AccessLink API
                </GradientBadge>  
            </Group>                    
            <Group mt="xl">
                <Button
                    variant="gradient"
                    gradient={{ from: '#4f46e5', to: '#7c3aed', deg: 90 }}
                    onClick={() => stack.close('calevalab')}
                    className='btn-pulse'
                >
                    Close
                </Button>
            </Group>   
        </div>
    </Modal>
  );
}

export default CalevaLabModal;