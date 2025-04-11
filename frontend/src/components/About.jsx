import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span>PhoneFixPro</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Your Trusted Phone Repair Specialists</h3>
            <p>
              Founded in 2010, PhoneFixPro has grown from a small local shop to
              a trusted name in mobile device repair across the country. Our
              team of certified technicians brings over 50 years of combined
              experience to every repair.
            </p>
            <p>
              We pride ourselves on using only the highest quality parts,
              offering transparent pricing, and providing fast, reliable service
              that gets your device back in your hands as quickly as possible.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">10,000+</div>
                <p>Repairs Completed</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <p>Certified Technicians</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <p>Locations Nationwide</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.8/5</div>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="relative">
              {/* Placeholder for about image - in production, replace with actual image */}
              <div className="image-placeholder">
                <span>Repair Shop Image</span>
              </div>

              {/* Testimonial overlay */}
              <div className="testimonial-card">
                <p className="italic">
                  "They fixed my iPhone screen in under an hour. Great service
                  and reasonable prices!"
                </p>
                <p className="font-semibold">— Sarah T., Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
