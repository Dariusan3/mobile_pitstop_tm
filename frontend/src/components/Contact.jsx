import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // For now, we'll just log the form data
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      device: "",
      issue: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a question or need to book a repair? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            <h3 className="form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
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
                    Email Address *
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
                    Phone Number
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
                    Device Type
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select your device</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google">Google Pixel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue" className="form-label">
                  What needs repair?
                </label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select repair type</option>
                  <option value="Screen">Screen Replacement</option>
                  <option value="Battery">Battery Replacement</option>
                  <option value="Water">Water Damage</option>
                  <option value="Camera">Camera Repair</option>
                  <option value="Charging">Charging Port</option>
                  <option value="Data">Data Recovery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-control"
                  placeholder="Please provide any additional details about your repair needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="contact-info-container">
              <h3 className="form-title">Contact Information</h3>
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
                    <p>Phone</p>
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
                    <p>Email</p>
                    <p>info@phonefixpro.com</p>
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
                    <p>Business Hours</p>
                    <p>Mon-Fri: 9AM-7PM</p>
                    <p>Sat: 10AM-5PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="emergency-container">
              <h3 className="form-title">Emergency Repairs</h3>
              <p>
                Need your device fixed urgently? We offer same-day repair
                services for most common issues.
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
                <span>Same-day service available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
