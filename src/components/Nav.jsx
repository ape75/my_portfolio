import MobileNav from './MobileNav';

const Nav = () => {  
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Reduced from 140 since mobile menu is different
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="Nav">
        <div className="nav-bar-left">
          <span className="nav-header" title="Home" onClick={(e) => { e.preventDefault(); scrollToTop();}}>
            Portfolio
          </span>        
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="nav-bar-center desktop-nav">      
          <ul>            
            <li>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experience
              </button>  
            </li>   
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </li>         
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </li>      
          </ul>
        </div>
        
        <div className="nav-bar-right"></div>
        
        {/* Mobile Navigation - Only visible on mobile */}
        <MobileNav scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
      </nav>
    </>
  );
}

export default Nav;