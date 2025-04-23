import { useState, useEffect } from 'react';
import mobilePitstopLogo from '../assets/mobile_pitstop_logo.svg';

const translations = {
  en: {
    title: "Professional Phone Repair Services",
    description: "Fast, reliable repairs for all brands and models. Get your device fixed by certified technicians with same-day service available.",
    servicesButton: "Our Services",
    contactButton: "Contact Us",
    address: "str, Daliei, nr.2, Timișoara",
    phone: "0770525474",
    sameDayRepairs: "✓ Same Day Repairs",
    warranty: "✓ 90-Day Warranty"
  },
  ro: {
    title: "Servicii Profesionale de Reparare Telefoane",
    description: "Reparații rapide și fiabile pentru toate mărcile și modelele. Reparați-vă dispozitivul de către tehnicieni certificați cu serviciu disponibil în aceeași zi.",
    servicesButton: "Serviciile Noastre",
    contactButton: "Contactați-ne",
    address: "str, Daliei, nr.2, Timișoara",
    phone: "0770525474",
    sameDayRepairs: "✓ Reparații în aceeași zi",
    warranty: "✓ Garanție de 90 de zile"
  }
};

const Hero = ({ lang }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const t = translations[lang];

  return (
    <section id="home" className="hero">
      <div className="hero-gradient"></div>
      <div className="container hero-content">
        <div className="hero-grid">
          <div className={isLoaded ? 'animate-slide-up' : 'opacity-0'}>
            <h1 className="hero-title">
              {t.title}
            </h1>
            <p className="hero-description">
              {t.description}
            </p>
            <div className="hero-buttons">
              <a 
                href="#services" 
                className="btn btn-primary"
              >
                {t.servicesButton}
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                {t.contactButton}
              </a>
            </div>
          </div>
          <div className={`hero-image ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src={mobilePitstopLogo} 
                alt="Mobile PitStop TM - Phone Repair Shop" 
                className="w-full max-w-md mx-auto"
              />
              <div className="feature-badge badge-bottom-left">
                <p>{t.sameDayRepairs}</p>
              </div>
              <div className="feature-badge badge-top-right">
                <p>{t.warranty}</p>
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold">{t.address}</p>
                <p className="font-bold">{t.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;