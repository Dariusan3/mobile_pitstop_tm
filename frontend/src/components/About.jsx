import React from "react";
import mobilePitstopLogo from "../assets/mobile_pitstop_logo.svg";

const translations = {
  en: {
    about: "About",
    company: "Mobile PitStop TM",
    trustedExperts: "Your Trusted Mobile Device Experts",
    welcome: "Welcome to <strong>Mobile PitStop TM</strong>—Timișoara’s premier destination for fast, reliable, and affordable phone repairs. Our certified technicians combine years of expertise with a passion for restoring your devices to peak performance.",
    services: [
      { icon: "📱", title: "Screen & battery", subtitle: "Replacements" },
      { icon: "💧", title: "Water Damage", subtitle: "Repair" },
      { icon: "🔍", title: "Diagnostics", subtitle: "& Troubleshooting" },
      { icon: "✨", title: "And much more!", subtitle: "" }
    ],
    quality: "We use only top-quality parts and offer transparent pricing, so you always know what to expect. Our mission is to get you reconnected—quickly and stress-free.",
    contact: "Contact us:",
    testimonial: "They fixed my iPhone screen in under an hour. Great service and reasonable prices!",
    client: "— Satisfied Client, Timișoara",
    stats: [
      { number: "5,000+", label: "Repairs Completed" },
      { number: "10+", label: "Certified Technicians" },
      { number: "1", label: "Location in Timișoara" },
      { number: "4.9/5", label: "Customer Rating" }
    ]
  },
  ro: {
    about: "Despre",
    company: "Mobile PitStop TM",
    trustedExperts: "Experții tăi de încredere pentru dispozitive mobile",
    welcome: "Bine ați venit la <strong>Mobile PitStop TM</strong>—destinația principală din Timișoara pentru reparații rapide, fiabile și accesibile ale telefoanelor. Tehnicienii noștri certificați combină ani de experiență cu pasiunea pentru a vă readuce dispozitivele la performanță maximă.",
    services: [
      { icon: "📱", title: "Ecran & baterie", subtitle: "Înlocuiri" },
      { icon: "💧", title: "Daune provocate de apă", subtitle: "Reparații" },
      { icon: "🔍", title: "Diagnosticare", subtitle: "& Depanare" },
      { icon: "✨", title: "Și multe altele!", subtitle: "" }
    ],
    quality: "Folosim doar piese de cea mai bună calitate și oferim prețuri transparente, astfel încât să știți mereu la ce să vă așteptați. Misiunea noastră este să vă reconectăm rapid și fără stres.",
    contact: "Contactați-ne:",
    testimonial: "Mi-au reparat ecranul iPhone-ului în mai puțin de o oră. Servicii excelente și prețuri rezonabile!",
    client: "— Client mulțumit, Timișoara",
    stats: [
      { number: "5.000+", label: "Reparații finalizate" },
      { number: "10+", label: "Tehnicieni certificați" },
      { number: "1", label: "Locație în Timișoara" },
      { number: "4.9/5", label: "Rating clienți" }
    ]
  }
};

const About = ({ lang, setLang }) => {
  const t = translations[lang];
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {t.about} <span>{t.company}</span>
          </h2>
          <div className="section-divider my-8"></div>
        </div>
        <div className="about-grid flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="about-content bg-white rounded-lg shadow-md p-6 mb-8 md:mb-0 flex-1">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <span role="img" aria-label="Expert">🛠️</span> {t.trustedExperts}
            </h3>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.welcome }} />
            <div className="grid grid-cols-2 gap-4 mb-4">
              {t.services.map((service, idx) => (
                <div key={idx} className="service-card flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="text-3xl mb-2" role="img" aria-label="Service">{service.icon}</span>
                  <span className="font-semibold">{service.title}</span>
                  {service.subtitle && <span className="text-xs text-gray-500">{service.subtitle}</span>}
                </div>
              ))}
            </div>
            <p className="mb-4">{t.quality}</p>
            <div className="mt-6">
              <strong>{t.contact} <a href="tel:0770525474" className="text-blue-600 hover:underline">0770 525 474</a></strong>
            </div>
          </div>
          <div className="about-image flex flex-col items-center flex-1">
            <img src={mobilePitstopLogo} alt="Mobile Pitstop - Phone Repair Shop" className="w-full max-w-xs mx-auto mb-6" />
            <div className="testimonial-card bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg mt-2 max-w-xs border-l-4 border-blue-400">
              <p className="italic text-gray-700 text-lg">
                "{t.testimonial}"
              </p>
              <p className="font-semibold text-right text-blue-800 mt-4">{t.client}</p>
            </div>
          </div>
        </div>
        <div className="stats-grid mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {t.stats.map((stat, idx) => (
            <div key={idx} className={`stat-card bg-white rounded shadow p-4${idx > 1 ? ' hidden md:block' : ''}`}>
              <div className="stat-number text-2xl font-bold text-blue-700">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
