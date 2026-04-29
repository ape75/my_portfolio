import { useState } from 'react';
import { Burger, Drawer, NavLink } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function MobileNav({ scrollToSection, scrollToTop }) {
  const [opened, setOpened] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const navItems = [
    { label: 'Experience', link: 'experience' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contact', link: 'contact' },
  ];

  const handleNavigation = (sectionId) => {
    if (sectionId === 'top') {
      scrollToTop();
    } else {
      scrollToSection(sectionId);
    }
    setOpened(false);
  };

  // On desktop, don't show the mobile menu components
  if (isDesktop) {
    return null;
  }

  return (
    <>
      {/* Mobile Burger Button - positioned absolutely over the nav */}
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 101,
        }}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened(true)}
          aria-label="Open menu"
          color="var(--text-primary)"
          size="sm"
        />
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        title="Menu"
        position="right"
        size="250px"
        styles={{            
            header: {
                backgroundColor: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border)',
            },
            title: {
                color: 'var(--accent-primary)',
                fontWeight: 600,
            },
            body: {
                backgroundColor: 'var(--bg-primary)',
            },
        }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            onClick={() => handleNavigation(item.link)}
            variant="subtle"
            my="sm"
            styles={{
              root: {
                color: 'var(--text-primary)',
                // backgroundColor: 'var(--bg-primary)',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'var(--surface-hover)',
                },
              },
              label: {
                fontSize: '1rem',
              },
            }}
          />
        ))}
      </Drawer>
    </>
  );
}

export default MobileNav;