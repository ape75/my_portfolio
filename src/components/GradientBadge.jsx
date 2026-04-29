import { Badge } from '@mantine/core';

function GradientBadge({ children, gradientColor, leftSection, ...props }) {
  return (
    <Badge
      leftSection={leftSection}
      variant="gradient"
      gradient={gradientColor}
      {...props}
    >
      {children}
    </Badge>
  );
}

export default GradientBadge;