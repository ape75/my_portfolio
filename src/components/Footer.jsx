import { Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
    const today = new Date();
    return (
        <footer className="Footer">
            <div className="footer-left-section"></div>
            <div className="footer-center-section">
                <Group gap="md">
                    <a 
                        href="https://github.com/ape75"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="My GitHub"
                        className="social-icon-link"
                    >
                        <IconBrandGithub size={34} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/ari-ahonen-380bbb264/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="My LinkedIn"
                        className="social-icon-link"
                    >
                        <IconBrandLinkedin size={34} />
                    </a>
                </Group>
            </div>
            <div className="footer-right-section">
                <span className="copyright-text">&copy;{today.getFullYear()} Ari Ahonen. All rights reserved.</span>
            </div>            
        </footer>
    )
}

export default Footer;