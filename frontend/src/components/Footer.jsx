import React from 'react';

const translations = {
  en: {
    description: "Professional phone repair services in Timișoara. Fast, reliable repairs for all brands and models.",
    quickLinks: "Quick Links",
    services: "Services",
    contactInfo: "Contact Info",
    home: "Home",
    about: "About Us",
    servicesLink: "Services",
    locations: "Locations",
    contact: "Contact",
    screenReplacement: "Screen Replacement",
    batteryReplacement: "Battery Replacement",
    waterDamage: "Water Damage Repair",
    cameraRepair: "Camera Repair",
    dataTransfer: "Data Transfer",
    rights: "All rights reserved."
  },
  ro: {
    description: "Servicii profesionale de reparații telefoane în Timișoara. Reparații rapide și fiabile pentru toate mărcile și modelele.",
    quickLinks: "Link-uri Rapide",
    services: "Servicii",
    contactInfo: "Informații Contact",
    home: "Acasă",
    about: "Despre Noi",
    servicesLink: "Servicii",
    locations: "Locații",
    contact: "Contact",
    screenReplacement: "Înlocuire Ecran",
    batteryReplacement: "Înlocuire Baterie",
    waterDamage: "Reparații Daune Apă",
    cameraRepair: "Reparații Cameră",
    dataTransfer: "Transfer Date",
    rights: "Toate drepturile rezervate."
  }
};

const Footer = ({ lang }) => {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">Mobile PitStop TM</h3>
            <p className="footer-description">
              {t.description}
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/mobilepitstop.tm" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/mobile_pitstop_tm/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="footer-title">{t.quickLinks}</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#home">{t.home}</a></li>
              <li className="footer-link"><a href="#about">{t.about}</a></li>
              <li className="footer-link"><a href="#services">{t.servicesLink}</a></li>
              <li className="footer-link"><a href="#locations">{t.locations}</a></li>
              <li className="footer-link"><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">{t.services}</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#services">{t.screenReplacement}</a></li>
              <li className="footer-link"><a href="#services">{t.batteryReplacement}</a></li>
              <li className="footer-link"><a href="#services">{t.waterDamage}</a></li>
              <li className="footer-link"><a href="#services">{t.cameraRepair}</a></li>
              <li className="footer-link"><a href="#services">{t.dataTransfer}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">{t.contactInfo}</h3>
            <ul className="footer-links">
              <li className="contact-item">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>str, Daliei, nr.2, Timișoara</span>
              </li>
              <li className="contact-item">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0770525474</span>
              </li>
              <li className="contact-item">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mobilepitstop.ro</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Mobile PitStop TM. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;