import ProjectCard from './ProjectCard';
import { Timeline, Text, Modal, useModalsStack, Badge, Divider, List, ThemeIcon, SimpleGrid, Paper, Image} from '@mantine/core';
import SportModal from './modals/SportModal';
import DigimoiModal from './modals/DigimoiModal';
import CalevaLabModal from './modals/CalevaLabModal';
import KalibroModal from './modals/KalibroModal';
import ScrollToTopButton from './ScrollToTopButton';
import { TypeAnimation } from 'react-type-animation';
import ContactForm from './ContactForm';
import gradients from '../constants/gradients';


const MainContent = () => { 
    
    const stack = useModalsStack(['360sport', 'digimoi','calevalab', 'kalibro']); 
             
    return (
        <main className="MainContent">
            <Modal.Stack>
                <SportModal modalProps={stack.register('360sport')} stack={stack} />           
                <DigimoiModal modalProps={stack.register('digimoi')} stack={stack} />
                <CalevaLabModal modalProps={stack.register('calevalab')} stack={stack} />
                <KalibroModal modalProps={stack.register('kalibro')} stack={stack} />           
            </Modal.Stack>    
            <div className="main-content-upper-container" id='home'>
                <div className="main-content-header-container">
                    <Badge 
                        size="xl" 
                        variant="gradient" 
                        gradient={gradients.blue}
                        mb="md"
                        mt="md"
                        radius={'sm'}
                    >
                        <Text size="xl" fw={700}> 
                            Welcome to my portfolio
                        </Text>                   
                    </Badge>
                    <h2 className="introduction-header">Ari Ahonen</h2>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'Python Enthusiast',
                            1000,
                            'Data-Driven Problem Solver',
                            1000,
                        ]}
                        wrapper="h3"
                        speed={50}
                        repeat={Infinity}
                        className="introduction-header-lower"
                        style={{ color: 'var(--accent-primary)' }}
                    />
                </div>                          
                <Paper p="lg" radius="md" bg="var(--bg-tertiary)" withBorder className="introduction-main-container">
                    <div className='introduction-main-header-container'>
                        <div className="introduction-main-header-container-left">
                            <div className="profile-picture-container">
                                <img src="/my_portfolio/assets/img/profile_pic.jpg" alt="profile-picture" className="profile-picture" />
                            </div>
                            <Text size="m">
                                I'm a software developer based in Finland with a BBA in IT. 
                                My previous career in retail has taught me customer-centric thinking and problem-solving under pressure. 
                                Now I combine that business insight with technical expertise to build applications that solve real problems.
                            </Text>
                        </div> 
                        <div className="introduction-main-header-container-right">                       
                        </div>
                    </div>             
                    <SimpleGrid cols={3} spacing="md">
                        <Paper p="md" radius="md" bg="var(--bg-secondary)" ta="center" withBorder>
                            <Text size="xl" fw={700} c="var(--accent-primary)">3+</Text>
                            <Text className='introduction-paper-text' size="sm" c="dimmed">Years of Experience</Text>
                        </Paper>
                        
                        <Paper p="md" radius="md" bg="var(--bg-secondary)" ta="center" withBorder>
                            <Text size="xl" fw={700} c="var(--accent-primary)">15+</Text>
                            <Text className='introduction-paper-text' size="sm" c="dimmed">Projects (Personal & Professional)</Text>
                        </Paper>                    
                        <Paper p="md" radius="md" bg="var(--bg-secondary)" ta="center" withBorder>
                            <Text 
                                style={{ 
                                    fontSize: '50px', 
                                    fontWeight: 500,  
                                    lineHeight: 0.9, 
                                    
                                }} 
                                c="var(--accent-primary)"
                            >
                                ∞
                            </Text>
                            <Text className='introduction-paper-text' size="sm" c="dimmed">Always Learning</Text>
                        </Paper>
                    </SimpleGrid>                                   
                </Paper>                      
            </div>
            
            <Divider my="md" />
            <div className='project-main-header' id='experience'>Experience</div>
            <div className='work-experience-container'>
                <Timeline radius="xl" active={3} bulletSize={50} color="var(--accent-primary)">
                    <Timeline.Item 
                        title="Calevala Interactive"
                        lineVariant='dotted'                   
                        bullet={
                            <ThemeIcon 
                                size={44} 
                                radius="xl"
                                style={{ backgroundColor: '#ffffff' }}
                            >
                                <Image 
                                src="/my_portfolio/assets/img/calevala_logo.png" 
                                alt="Calevala"
                                style={{ 
                                    width: 40,
                                    height: 40,
                                    objectFit: 'contain'
                                }}
                                />
                            </ThemeIcon>
                            }
                    >
                        <Text c="dimmed" size="sm">
                            Full Stack developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            April 2023 – January 2026
                        </Text>                    
                        <Text fw={500} size="sm" mb="xs" c="var(--accent-primary)">Key responsibilities:</Text>
                        <Paper p="md" radius="md" bg="var(--bg-tertiary)" ta="left" withBorder className='work-experience-responsibilities-container'>
                            <List size="sm" spacing="xs">
                                <List.Item>Developed backend services using Python, Node.js, PostgreSQL, and MongoDB</List.Item>
                                <List.Item>Built responsive frontends with React, Jinja2, JavaScript, HTML and CSS</List.Item>
                                <List.Item>Created data visualization dashboards with Plotly Dash and Chart.js</List.Item>
                                <List.Item>Deployed and maintained applications on AWS (ECS, Lambda, API Gateway, S3)</List.Item>                            
                                <List.Item>Integrated external APIs (Stripe, Polar AccessLink) and YOLOv5 computer vision models</List.Item>
                                <List.Item>Maintained CI/CD pipelines using GitHub Actions and Docker</List.Item>
                                <List.Item>Used browser DevTools and logging for debugging and performed QA testing</List.Item>
                                <List.Item>Contributed to SRS documentation and project planning</List.Item>
                            </List>
                        </Paper>
                    </Timeline.Item>
                    <Timeline.Item 
                        title="Pirkanmaan Osuuskauppa"
                        lineVariant='dotted'
                        bullet={
                            <ThemeIcon 
                                size={44} 
                                radius="xl"
                                style={{ backgroundColor: '#ffffff' }}
                            >
                                <Image 
                                src="/my_portfolio/assets/img/pok_logo.png" 
                                alt="Calevala"
                                style={{ 
                                    width: 56,
                                    height: 56,
                                    objectFit: 'contain'
                                }}
                                />
                            </ThemeIcon>
                            }
                    >
                        <Text c="dimmed" size="sm">
                            Sales Professional, department manager
                        </Text>
                        <Text c="dimmed" size="sm">
                            2003 – 2022
                        </Text>
                        <Text fw={500} size="sm" mb="xs" c="var(--accent-primary)">Key responsibilities:</Text>
                        <Paper p="md" radius="md" bg="var(--bg-tertiary)" ta="left" withBorder className='work-experience-responsibilities-container'>
                            <List size="sm" spacing="xs">
                                <List.Item>Managed various grocery store departments, service counters and store kitchens</List.Item>
                                <List.Item>Order, inventory and team management</List.Item>
                                <List.Item>Customer service</List.Item>
                            </List>
                        </Paper>
                    </Timeline.Item>                
                </Timeline>
            </div> 
            <Divider my="md" />           
            <div className='project-main-header' id="projects">Professional Projects</div>
            <div className='project-container'>
                <ProjectCard
                    headerText={"360Sport Experience"}
                    imageUrl={"/my_portfolio/assets/img/360sports_main.png"}
                    mainText={"Web-based application for analyzing and visualizing match data for athletes and teams."}
                    badgeText={"Sport Analysis"}
                    badgeColor={gradients.orange}
                    buttonText={"Show Details"}  
                    buttonTitle={"View details for 360Sport Experience"}
                    buttonColor={gradients.blue}
                    modalName = {"360sport"}
                    stack={stack}
                /> 
                <ProjectCard
                    headerText={"Digimoi"}
                    imageUrl={"/my_portfolio/assets/img/digimoi_main.png"}
                    mainText={"Web-based tool for citizen engagement and visual feedback collection for public sector organizations and companies."}
                    badgeText={"Citizen Engagement"}
                    badgeColor={gradients.orange}
                    buttonText={"Show Details"}  
                    buttonTitle={"View details for Digimoi"}
                    buttonColor={gradients.blue}
                    modalName = {"digimoi"}
                    stack={stack}
                />    
                <ProjectCard
                    headerText={"CalevaLAB"}
                    imageUrl={"/my_portfolio/assets/img/calevalab_main.png"}
                    mainText={"Web application for managing and visualizing training data for athletes, coaches and club managers."}
                    badgeText={"Athlete Development"}
                    badgeColor={gradients.orange}
                    buttonText={"Show Details"}  
                    buttonTitle={"View details for CalevalaLAB"}
                    buttonColor={gradients.blue}
                    modalName = {"calevalab"}
                    stack={stack}
                />    
                <ProjectCard
                    headerText={"Kalibro"}
                    imageUrl={"/my_portfolio/assets/img/kalibro_main.png"}
                    mainText={"Advanced web auditing platform built for modern businesses to analyze, compare and elevate their websites."}
                    badgeText={"Website Analysis/Audit"}
                    badgeColor={gradients.orange}
                    buttonText={"Show Details"}  
                    buttonTitle={"View details for Kalibro"}
                    buttonColor={gradients.blue}
                    modalName = {"kalibro"}
                    stack={stack}
                />    
            </div>
            <Divider my="md" />           
            <div className='contact-main-header' id="contact">Contact Me</div>
            <div className='contact-container'>            
                <ContactForm/>
            </div>
        <ScrollToTopButton gradientColor={gradients.blue}/>
        </main>
    )
}

export default MainContent;