import React from "react";

export default function Card(imageSrc, description) {
  return (
    <div className="card_container">
      <img scr={imageSrc} />

      <p>{description}</p>

      <button>Learn more..</button>
    </div>
  );
}
