import { Modal, Text, List, Group, Button } from '@mantine/core';
import { IconStarFilled, IconCheckFilled } from '@tabler/icons-react';
import CarouselComponent from '../CarouselComponent';
import GradientBadge from '../GradientBadge';
import gradients from '../../constants/gradients';
import icons from '../../constants/icons';

const SportExperienceImages = [
  "/my_portfolio/assets/img/360sports_main.png",
  "/my_portfolio/assets/img/360sports_1.png",
  "/my_portfolio/assets/img/360sports_2.png",
  "/my_portfolio/assets/img/360sports_3.png",
  "/my_portfolio/assets/img/360sports_4.png"
];

function SportModal({ modalProps, stack }) {
  return (
    <Modal {...modalProps} title="360Sport Experience" size="lg">
      <div>
        <CarouselComponent
          imageArray={SportExperienceImages}
          projectName={"360Sports Experience"}
        />
        <Text size="lg" fw={500} mb="xs" mt="md" c="var(--accent-primary)">Project Overview</Text>
        <Text mb="md">
          360Sport Experience is a sport data analysis platform that provides data-driven insights and advanced analytics...
        </Text>
        
        <Text fw={500} mb="xs" c="var(--accent-primary)">Key Features:</Text>
        <List spacing="xs" size="sm" icon={<IconStarFilled size={22} color='gold' />}>
          <List.Item>Comprehensive visualized analysis data on multiple levels (player, line, team, match)</List.Item>
          <List.Item>TOP Ranking lists for players and teams</List.Item>
          <List.Item>Data filtering by sport, team, player, league and season</List.Item>
          <List.Item>Comparison available on player and team level</List.Item>
        </List>
        
        <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">My Contributions:</Text>
        <List 
            spacing="xs" 
            size="sm" 
            icon={                            
                <IconCheckFilled size={18} color="#10b981" />                            
            }>
            <List.Item>Designed and built the entire application in collaboration with another developer, including UI/UX design, backend and frontend</List.Item>
            <List.Item>Designed a complex PostgreSQL database schema with 50+ tables to model sports, seasons, tournaments, teams, players, lineups, match results, analysis data and user data</List.Item>
            <List.Item>Participated in creating Software Requirements Specification (SRS) documentation as part of project planning and stakeholder collaboration</List.Item>                        
            <List.Item>Built dynamic dashboard views with Plotly Dash to visualize key performance metrics at player, team, player line and match level</List.Item>
            <List.Item>Integrated Stripe payment system to define subscription tiers and paid features</List.Item>
            <List.Item>Built a role-based access control (RBAC) system that filters UI elements and API data responses based on user subscription tiers, implementing both frontend conditional rendering and backend query filtering</List.Item>
            <List.Item>Built an interface for the admin to manage sports, seasons, tournaments/leagues, teams, players, lineups, and match results as well as the registered users</List.Item>
            <List.Item>Developed a separate Python script to migrate analysis data from Excel spreadsheets to the new database while maintaining data integrity</List.Item>

        </List>

        <Text fw={500} mt="md" mb="xs" c="var(--accent-primary)">Technologies Used:</Text>
        <Group gap="xs" mb="md">
          <GradientBadge leftSection={icons.python} gradientColor={gradients.green}>Python</GradientBadge>
          <GradientBadge leftSection={icons.flask} gradientColor={gradients.green}>Flask</GradientBadge>
          <GradientBadge leftSection={icons.jinja} gradientColor={gradients.green}>Jinja2</GradientBadge>
          <GradientBadge leftSection={icons.javascript} gradientColor={gradients.green}>JavaScript</GradientBadge>
          <GradientBadge leftSection={icons.plotly} gradientColor={gradients.green}>Plotly Dash</GradientBadge>
          <GradientBadge leftSection={icons.postgres} gradientColor={gradients.green}>PostgreSQL</GradientBadge>
        </Group>
        
        <Group mt="xl">
          <Button 
            variant="gradient"
            gradient={{ from: '#4f46e5', to: '#7c3aed', deg: 90 }}
            onClick={() => stack.close('360sport')}
            className="btn-pulse"
          >
            Close
          </Button>
        </Group>
      </div>
    </Modal>
  );
}

export default SportModal;