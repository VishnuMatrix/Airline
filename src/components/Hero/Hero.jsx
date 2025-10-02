// src/components/Hero/Hero.jsx
import React from "react";
import BookingForm from "../BookingForm/BookingForm";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="breadcrumb">
          <a href="#">Book</a> / <span>About booking online</span>
        </div>
        <BookingForm />
      </div>
    </section>
  );
};

export default Hero;
