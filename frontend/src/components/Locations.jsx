import React from "react";

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Downtown",
      address: "123 Main Street, Downtown, City, 10001",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM, Sun: Closed",
      directions: "https://maps.google.com",
    },
    {
      id: 2,
      name: "Westside Mall",
      address: "Westside Shopping Mall, 456 West Ave, City, 10002",
      phone: "(555) 987-6543",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-6PM",
      directions: "https://maps.google.com",
    },
    {
      id: 3,
      name: "Eastside",
      address: "789 East Boulevard, City, 10003",
      phone: "(555) 456-7890",
      hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 10AM-6PM",
      directions: "https://maps.google.com",
    },
  ];

  return (
    <section id="locations" className="locations">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our <span>Locations</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Visit one of our convenient locations for fast, professional phone
            repair services. No appointment necessary!
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <h3 className="location-title">{location.name} Location</h3>
              <div className="mb-4">
                {/* Placeholder for location map - in production, replace with actual map */}
                <div className="map-placeholder">
                  <span>Map</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="location-details">
                  <span>Address:</span> {location.address}
                </p>
                <p className="location-details">
                  <span>Phone:</span> {location.phone}
                </p>
                <p className="location-details">
                  <span>Hours:</span> {location.hours}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={location.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  Get Directions
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
            Need help finding us? Call our customer service line at{" "}
            <span>(555) 111-2222</span>
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
