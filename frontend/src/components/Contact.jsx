import React, { useState } from "react";

const translations = {
  en: {
    title: "Contact",
    titleSpan: "Us",
    description: "Have a question or need to book a repair? Fill out the form below and we'll get back to you as soon as possible.",
    sendMessage: "Send Us a Message",
    name: "Your Name *",
    email: "Email Address *",
    phone: "Phone Number",
    device: "Device Type",
    selectDevice: "Select your device",
    repairNeeded: "What needs repair?",
    selectRepair: "Select repair type",
    screenReplacement: "Screen Replacement",
    batteryReplacement: "Battery Replacement",
    waterDamage: "Water Damage",
    cameraRepair: "Camera Repair",
    chargingPort: "Charging Port",
    dataRecovery: "Data Recovery",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Please provide any additional details about your repair needs...",
    sending: "Sending...",
    send: "Send Message",
    successMessage: "Thank you for your message! We will get back to you shortly.",
    errorMessage: "Failed to send message. Please try again later.",
    networkError: "Network error. Please check your connection and try again.",
    contactInfo: "Contact Information",
    phoneLabel: "Phone",
    emailLabel: "Email",
    businessHours: "Business Hours",
    monFri: "Mon-Fri: 9AM-7PM",
    sat: "Sat: 10AM-5PM",
    sun: "Sun: Closed",
    emergencyRepairs: "Emergency Repairs",
    emergencyDescription: "Need your device fixed urgently? We offer same-day repair services for most common issues.",
    sameDayService: "Same-day service available"
  },
  ro: {
    title: "Contacteaza-",
    titleSpan: "ne",
    description: "Ai o întrebare sau dorești să programezi o reparație? Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.",
    sendMessage: "Trimite-ne un Mesaj",
    name: "Numele tău *",
    email: "Adresa de Email *",
    phone: "Număr de Telefon",
    device: "Tip Dispozitiv",
    selectDevice: "Selectează dispozitivul",
    repairNeeded: "Ce necesită reparație?",
    selectRepair: "Selectează tipul reparației",
    screenReplacement: "Înlocuire Ecran",
    batteryReplacement: "Înlocuire Baterie",
    waterDamage: "Daune Apă",
    cameraRepair: "Reparație Cameră",
    chargingPort: "Port Încărcare",
    dataRecovery: "Recuperare Date",
    other: "Altele",
    message: "Mesaj",
    messagePlaceholder: "Te rugăm să oferi detalii suplimentare despre necesitățile de reparație...",
    sending: "Se trimite...",
    send: "Trimite Mesaj",
    successMessage: "Îți mulțumim pentru mesaj! Te vom contacta în curând.",
    errorMessage: "Mesajul nu a putut fi trimis. Te rugăm să încerci din nou mai târziu.",
    networkError: "Eroare de rețea. Te rugăm să verifici conexiunea și să încerci din nou.",
    contactInfo: "Informații de Contact",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    businessHours: "Program",
    monFri: "Luni-Vineri: 9:00-19:00",
    sat: "Sâmbătă: 10:00-17:00",
    sun: "Duminică: Închis",
    emergencyRepairs: "Reparații de Urgență",
    emergencyDescription: "Ai nevoie de reparație urgentă? Oferim servicii de reparații în aceeași zi pentru cele mai comune probleme.",
    sameDayService: "Serviciu disponibil în aceeași zi"
  }
};

const Contact = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    issue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: t.successMessage });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          device: "",
          issue: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || t.errorMessage });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ type: 'error', message: t.networkError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {t.title} <span>{t.titleSpan}</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {t.description}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            <h3 className="form-title">{t.sendMessage}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="device" className="form-label">
                    {t.device}
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">{t.selectDevice}</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google">Google Pixel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue" className="form-label">
                  {t.repairNeeded}
                </label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">{t.selectRepair}</option>
                  <option value="Screen">{t.screenReplacement}</option>
                  <option value="Battery">{t.batteryReplacement}</option>
                  <option value="Water">{t.waterDamage}</option>
                  <option value="Camera">{t.cameraRepair}</option>
                  <option value="Charging">{t.chargingPort}</option>
                  <option value="Data">{t.dataRecovery}</option>
                  <option value="Other">{t.other}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-control"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? t.sending : t.send}
              </button>
              
              {submitStatus && (
                <div className={`mt-4 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          <div>
            <div className="contact-info-container">
              <h3 className="form-title">{t.contactInfo}</h3>
              <div className="space-y-4">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>{t.phoneLabel}</p>
                    <p>(555) 111-2222</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>{t.emailLabel}</p>
                    <p>info@phonefixpro.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4h5l2 7l-2 2a16 16 0 0 0 6 6l2 -2l7 2v5a2 2 0 0 1 -2 2a19 19 0 0 1 -17 -17a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>{t.phoneLabel}</p>
                    <a href="tel:0770525474" className="contact-link">0770525474</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>{t.businessHours}</p>
                    <p>{t.monFri}</p>
                    <p>{t.sat}</p>
                    <p>{t.sun}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="emergency-container">
              <h3 className="form-title">{t.emergencyRepairs}</h3>
              <p>
                {t.emergencyDescription}
              </p>
              <div className="emergency-badge">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>{t.sameDayService}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
