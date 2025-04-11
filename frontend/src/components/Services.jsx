import React from "react";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Screen Replacement",
      description:
        "Cracked or broken screen? We offer high-quality screen replacements for all major phone brands with same-day service available.",
      icon: "📱",
      price: "From $49.99",
    },
    {
      id: 2,
      title: "Battery Replacement",
      description:
        "Restore your phone's battery life with our professional battery replacement service. All batteries come with a 6-month warranty.",
      icon: "🔋",
      price: "From $29.99",
    },
    {
      id: 3,
      title: "Water Damage Repair",
      description:
        "Dropped your phone in water? Our specialized water damage treatment can save your device and recover your data.",
      icon: "💧",
      price: "From $69.99",
    },
    {
      id: 4,
      title: "Camera Repair",
      description:
        "Fix blurry photos and camera issues with our expert camera module replacement and repair services.",
      icon: "📷",
      price: "From $39.99",
    },
    {
      id: 5,
      title: "Charging Port Repair",
      description:
        "Having trouble charging your device? We can repair or replace your charging port to get your phone charging properly again.",
      icon: "🔌",
      price: "From $34.99",
    },
    {
      id: 6,
      title: "Data Recovery",
      description:
        "Lost important data? Our technicians can help recover photos, contacts, and other important information from your damaged device.",
      icon: "💾",
      price: "From $59.99",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We offer a wide range of repair services for all major phone brands
            including Apple, Samsung, Google, and more. All repairs come with
            our 90-day warranty.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <a
                  href="#contact"
                  className="text-sm text-primary hover:underline"
                >
                  Book Repair →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="diagnostic-banner">
          <div className="diagnostic-content">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Not sure what's wrong with your device?
              </h3>
              <p>
                Bring it in for a free diagnostic check by our expert
                technicians.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Free Diagnostic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
