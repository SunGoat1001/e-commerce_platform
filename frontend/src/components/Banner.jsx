import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices!</p>
        <button className="banner-cta">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
