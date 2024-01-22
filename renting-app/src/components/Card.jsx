import React from "react";
import "./Card.css";

export default function Card({ imageSrc, bikeName, description }) {
  const containerStyle = {
    border: "solid white 1px",
    Width: "100px",
  };

  return (
    <div className="card-holder">
      <img src={imageSrc} alt={description} />

      <h1>{bikeName}</h1>

      <p style={{ fontSize: "14px" }}>{description}</p>

      <button className="button-style">Learn more</button>
    </div>
  );
}
