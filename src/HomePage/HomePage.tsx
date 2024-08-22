import React from "react";
import "./HomePage.css";
import Menu from "../components/Menu/Menu";

const HomePage = () => {
  return (
    <div className="hero-section" id="home">
      <div className="header">
        <img src="/assets/Logo.png" alt="Logo" className="logo" />
        <Menu />
      </div>

      <div className="sound">
        <img
          src="/assets/sound-waves.png"
          alt="sound-waves"
          className="sound-image"
        />
        <h1 className="text">
          The world shades.
          <br />
          Your music shines.
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
