import { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang }) => {
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
      <div className="container navbar-container flex items-center justify-between">
        <a href="#" className="navbar-brand">Mobile PitStop TM</a>
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="navbar-nav hidden md:flex">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#locations" className="nav-link">Locations</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          {/* Language Switcher */}
         <div className="flex border rounded overflow-hidden ml-2">
            <button
              className={`relative w-16 h-8 flex items-center bg-white-100 rounded-full p-1 transition-colors duration-200 focus:outline-none border-2 border-blue-400 shadow-sm`}
              onClick={() => setLang(lang === 'en' ? 'ro' : 'en')}
              aria-label={lang === 'en' ? 'Schimbă în română' : 'Switch to English'}
            >
              <span className={`z-10 text-xs font-bold text-gray-800 transition-colors duration-200 ml-2`} style={{position:'absolute', left:'10px', top:'6px', backgroundColor:'grey'}}>
                {lang === 'en' ? 'EN' : ''}
              </span>
              <span className={`z-10 text-xs font-bold text-gray-800 transition-colors duration-200 ml-2`} style={{position:'absolute', right:'10px', top:'6px', backgroundColor:'grey'}}>
                {lang === 'ro' ? 'RO' : ''}
              </span>            
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggle md:hidden ml-2" 
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
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="container flex flex-col gap-2">
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