import { Card, Image, Text, Badge, Button, Group} from '@mantine/core';


function ProjectCard({imageUrl, headerText, badgeText, mainText, buttonText, badgeColor, buttonColor, buttonTitle, modalName, stack}) {

  return (         
    <Card shadow="sm" padding="lg" radius="md" withBorder className="project-card shimmer">
      <Card.Section>
        <Image
          src={imageUrl}
          height={200}
          alt="Screenshot"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{headerText}</Text>
        <Badge 
          variant="gradient"
          gradient={badgeColor}
          radius={'sm'}
        >
          {badgeText}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {mainText}
      </Text>

      <Button 
        variant="gradient"
        gradient={buttonColor}
        fullWidth mt="md" 
        radius="md" 
        title={buttonTitle} 
        onClick={() => stack.open(modalName)}
        className='btn-pulse'
      >
          {buttonText}
      </Button>
    </Card>    
  );
}

export default ProjectCard;