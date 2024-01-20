import React from "react";
import "./Card.css";

export default function Card({ imageSrc, bikeName, description }) {
  const containerStyle = {
    border: "solid white 1px",
    Width: "100px",
  };

  const buttonStyle = {
    backgroundColor: "#3498db", // Use your desired button color
    color: "#fff", // Use a contrasting text color
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div className="card-holder">
      <img src={imageSrc} alt={description} />

      <h1>{bikeName}</h1>

      <p style={{ fontSize: "14px" }}>{description}</p>

      <button style={buttonStyle}>Learn more</button>
    </div>
  );
}
