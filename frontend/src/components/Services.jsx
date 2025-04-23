import React from "react";
import uagCase from "../assets/uag_case.svg";
import dataTransfer from "../assets/data_transfer.svg";

const translations = {
  en: {
    title: "Our Services",
    description: "We offer a wide range of repair services for all major phone brands including Apple, Samsung, Google, and more. All repairs come with our 90-day warranty.",
    accessoriesTitle: "Phone Accessories",
    accessoriesDescription: "We offer a wide selection of premium accessories to protect and enhance your mobile devices.",
    diagnosticTitle: "Not sure what's wrong with your device?",
    diagnosticDescription: "Bring it in for a free diagnostic check by our expert technicians.",
    diagnosticButton: "Free Diagnostic",
    bookService: "Book Service →",
    shopNow: "Shop Now →"
  },
  ro: {
    title: "Serviciile Noastre",
    description: "Oferim o gamă largă de servicii de reparații pentru toate mărcile importante de telefoane, inclusiv Apple, Samsung, Google și altele. Toate reparațiile vin cu garanția noastră de 90 de zile.",
    accessoriesTitle: "Accesorii Telefoane",
    accessoriesDescription: "Oferim o selecție largă de accesorii premium pentru a vă proteja și îmbunătăți dispozitivele mobile.",
    diagnosticTitle: "Nu știți ce problemă are dispozitivul dumneavoastră?",
    diagnosticDescription: "Aduceți-l pentru o verificare diagnostică gratuită de către tehnicienii noștri experți.",
    diagnosticButton: "Diagnostic Gratuit",
    bookService: "Programează Serviciu →",
    shopNow: "Cumpără Acum →"
  }
};

const Services = ({ lang }) => {
  const t = translations[lang];
  const servicesList = [
    {
      id: 1,
      title: "Screen Replacement",
      description:
        "Cracked or broken screen? We offer high-quality screen replacements for all major phone brands with same-day service available.",
      icon: "📱",
      price: "From 199 RON",
    },
    {
      id: 2,
      title: "Battery Replacement",
      description:
        "Restore your phone's battery life with our professional battery replacement service. All batteries come with a 6-month warranty.",
      icon: "🔋",
      price: "From 149 RON",
    },
    {
      id: 3,
      title: "Water Damage Repair",
      description:
        "Dropped your phone in water? Our specialized water damage treatment can save your device and recover your data.",
      icon: "💧",
      price: "From 299 RON",
    },
    {
      id: 4,
      title: "Camera Repair",
      description:
        "Fix blurry photos and camera issues with our expert camera module replacement and repair services.",
      icon: "📷",
      price: "From 179 RON",
    },
    {
      id: 5,
      title: "Charging Port Repair",
      description:
        "Having trouble charging your device? We can repair or replace your charging port to get your phone charging properly again.",
      icon: "🔌",
      price: "From 149 RON",
    },
    {
      id: 6,
      title: "Data Transfer",
      description:
        "Need to transfer data between devices? Our technicians can help transfer photos, contacts, and other important information between phones.",
      icon: "💾",
      price: "From 99 RON",
      image: dataTransfer,
    },
  ];
  
  const accessories = [
    {
      id: 1,
      title: "UAG Phone Cases",
      description: "Premium UAG cases for other popular phone models. Military-grade protection for your device.",
      image: uagCase,
      price: "From 179 RON",
    },
    {
      id: 2,
      title: "Screen Protectors",
      description: "High-quality tempered glass screen protectors for all major phone models.",
      icon: "🛡️",
      price: "From 49 RON",
    },
    {
      id: 3,
      title: "Charging Cables & Adapters",
      description: "Original and high-quality third-party charging accessories for all devices.",
      icon: "🔌",
      price: "From 29 RON",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {t.title}
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {t.description}
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              {service.image ? (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-w-[200px] h-48 object-contain mx-auto mb-4"
                />
              ) : (
                <div className="service-icon">{service.icon}</div>
              )}
              <h3 className="service-title">{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <a
                  href="#contact"
                  className="text-sm text-primary hover:underline"
                >
                  {t.bookService}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Accessories Section */}
        <div className="text-center my-16">
          <h2 className="section-title">
            {t.accessoriesTitle}
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {t.accessoriesDescription}
          </p>
        </div>
        
        <div className="services-grid">
          {accessories.map((item) => (
            <div key={item.id} className="service-card">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-w-[200px] h-48 object-contain mx-auto mb-4"
                />
              ) : (
                <div className="service-icon">{item.icon}</div>
              )}
              <h3 className="service-title">{item.title}</h3>
              <p>{item.description}</p>
              <div className="service-footer">
                <span className="service-price">{item.price}</span>
                <a
                  href="#contact"
                  className="text-sm text-primary hover:underline"
                >
                  {t.shopNow}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="diagnostic-banner">
          <div className="diagnostic-content">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t.diagnosticTitle}
              </h3>
              <p>
                {t.diagnosticDescription}
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              {t.diagnosticButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
