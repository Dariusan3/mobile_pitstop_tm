import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">PhoneFixPro</a>
        
        {/* Desktop Menu */}
        <ul className="navbar-nav">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#locations" className="nav-link">Locations</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="container">
            <a href="#home" className="mobile-menu-link" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="mobile-menu-link" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="mobile-menu-link" onClick={toggleMobileMenu}>Services</a>
            <a href="#locations" className="mobile-menu-link" onClick={toggleMobileMenu}>Locations</a>
            <a href="#contact" className="mobile-menu-link" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;