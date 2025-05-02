// LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandindStyle.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">BRAIN TUMOR DETECTION</h1>
        <p className="description">
          Upload your MRI scan and let our AI model assist in early tumor
          detection. Fast. Accurate. Reliable.
        </p>
        <button className="start-button" onClick={() => navigate("/Main")}>
          Start Diagnosis
        </button>
      </div>
    </div>
  );
};

export default Landing;
