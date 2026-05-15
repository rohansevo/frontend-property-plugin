import React from 'react';
import "../index.css";
import "../styles/banner.css";

import bannerImg from "../assets/images/property_banner.webp";

function PropertyBanner() {
  return (
    <div
      className="property-banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
        width: "100%",
        minHeight: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div className="banner-overlay">
        <h1>Find Your Dream Property</h1>
        <p>Best properties at the best locations</p>
      </div>
    </div>
  );
}

export default PropertyBanner;