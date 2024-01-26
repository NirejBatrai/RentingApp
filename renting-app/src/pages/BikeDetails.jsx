import React from "react";
import { useLocation } from "react-router-dom";
import "./BikeDetails.css";

export default function BikeDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageSrc = params.get("imageSrc");
  const bikeName = params.get("bikeName");
  const description = params.get("description");

  return (
    <div className="BikeDetails-container">
      <h1>Bike Details</h1>
      <img src={imageSrc} alt={bikeName} />
      <h2>{bikeName}</h2>
      <p>{description}</p>
      {/* Additional details or components related to bike details */}
    </div>
  );
}
