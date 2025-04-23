import React from "react";

const translations = {
  en: {
    title: "Our Locations",
    description: "Visit one of our convenient locations for fast, professional phone repair services. No appointment necessary!",
    getDirections: "Get Directions",
    address: "Address:",
    phone: "Phone:",
    hours: "Hours:",
    needHelp: "Need help finding us? Call our customer service line at",
    contactUs: "Contact Us"
  },
  ro: {
    title: "Locațiile Noastre",
    description: "Vizitați una dintre locațiile noastre convenabile pentru servicii rapide și profesionale de reparații telefoane. Nu este necesară programare!",
    getDirections: "Obține Indicații",
    address: "Adresă:",
    phone: "Telefon:",
    hours: "Program:",
    needHelp: "Aveți nevoie de ajutor pentru a ne găsi? Sunați la linia noastră de servicii clienți la",
    contactUs: "Contactați-ne"
  }
};

const Locations = ({ lang }) => {
  const t = translations[lang];
  const locations = [
    {
      id: 1,
      name: "Punct de lucru Iulius Mall",
      address: "Iulius Mall, Timișoara",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.6061437908857!2d21.226984038857253!3d45.76693566382321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567c28251367f%3A0xdad4d0d2dc253876!2sIulius%20Town!5e0!3m2!1sro!2sro!4v1745086489651!5m2!1sro!2sro",
      directions: "https://goo.gl/maps/6wQvK8kQv8wQv8wQ9",
      phone: "0770525474",
      hours: "Mon-Sat: 10:00-20:00, Sun: 12:00-18:00"
    },
    {
      id: 2,
      name: "Punct de lucru Complex Studențesc",
      address: "Str. Daliei, nr. 2, Complexul Studențesc, Timișoara",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2724.9389627317705!2d21.23963581038293!3d45.75252634519559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455ddbad6ad55b%3A0x2b8fd74158c9934c!2sMobile%20PitStop!5e0!3m2!1sen!2sro!4v1745086247386!5m2!1sen!2sro",
      directions: "https://www.google.com/maps/place/Mobile+PitStop/@45.7510146,21.2409323,18.81z/data=!4m15!1m8!3m7!1s0x47455d88155ca31d:0x69d96a33e0f6b4fb!2sStrada+Daliei+2,+Timi%C8%99oara!3b1!8m2!3d45.7511776!4d21.241749!16s%2Fg%2F11l5d34ll5!3m5!1s0x47455ddbad6ad55b:0x2b8fd74158c9934c!8m2!3d45.7508611!4d21.2419416!16s%2Fg%2F11h3g3jkx6?hl=en&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D",
      phone: "0770525474",
      hours: "Mon-Sat: 10:00-20:00, Sun: 12:00-18:00"
    }
  ];
  return (
    <section id="locations" className="locations">
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

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <h3 className="location-title">{location.name}</h3>
              <div className="mb-4">
                <div className="map-embed" style={{width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="250"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.name + ' Map'}
                  ></iframe>
                </div>
              </div>
              <div className="space-y-2">
                <p className="location-details">
                  <span>{t.address}</span> {location.address}
                </p>
                <p className="location-details">
                  <span>{t.phone}</span> {location.phone}
                </p>
                <p className="location-details">
                  <span>{t.hours}</span> {location.hours}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={location.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  {t.getDirections}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="locations-footer">
          <p>
            {t.needHelp}{" "}
            <span>0770525474</span>
          </p>
          <a href="#contact" className="btn btn-primary">
            {t.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
