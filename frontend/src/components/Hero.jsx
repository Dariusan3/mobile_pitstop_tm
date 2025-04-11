import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-gradient"></div>
      
      <div className="container hero-content">
        <div className="hero-grid">
          <div className={isLoaded ? 'animate-slide-up' : 'opacity-0'}>
            <h1 className="hero-title">
              Professional <span>Phone Repair</span> Services
            </h1>
            <p className="hero-description">
              Fast, reliable repairs for all brands and models. Get your device fixed by certified technicians with same-day service available.
            </p>
            <div className="hero-buttons">
              <a 
                href="#services" 
                className="btn btn-primary"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className={`hero-image ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              {/* Placeholder for phone image - in production, replace with actual image */}
              <div className="image-placeholder">
                <span>Phone Image</span>
              </div>
              
              {/* Feature badges */}
              <div className="feature-badge badge-bottom-left">
                <p>✓ Same Day Repairs</p>
              </div>
              
              <div className="feature-badge badge-top-right">
                <p>✓ 90-Day Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;