import React from "react";
import "./Card.css";

export default function Card({ imageSrc, bikeName, description }) {
  return (
    <div className="card-holder">
      <img src={imageSrc} alt={description} />

      <h1>{bikeName}</h1>

      <p style={{ fontSize: "14px" }}>{description}</p>

      <div className="card-buttons-container">
        <button className="button-style">Learn more</button>
        <button className="button-style">Select</button>
      </div>
    </div>
  );
}
