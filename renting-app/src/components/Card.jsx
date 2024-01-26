import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Card.css";

export default function Card({ imageSrc, bikeName, description }) {
  const cardSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div className="card-holder" style={cardSpring}>
      <img src={imageSrc} alt={bikeName} />
      <h1>{bikeName}</h1>
      <p>{description}</p>
      <div className="card-buttons-container">
        <Link
          to={`/bike-details?imageSrc=${encodeURIComponent(
            imageSrc
          )}&bikeName=${encodeURIComponent(
            bikeName
          )}&description=${encodeURIComponent(description)}`}
          className="button-style"
        >
          Details
        </Link>
        <button className="button-style">Select</button>
      </div>
      </animated.div>
  );
}
