// src/components/DestinationCard/DestinationCard.jsx
import React from "react";
import "./DestinationCard.css";

const DestinationCard = ({ name, image, description }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-overlay"></div>
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
