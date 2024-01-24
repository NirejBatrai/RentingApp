import React from "react";
import Image2 from "../assets/Xadv-750.png";
import "./Home.css";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: "scale(1)",
    delay: 600,
    // Add more animation properties as needed
  });

  const textSpring = useSpring({
    opacity: 2,
    from: { opacity: 0 },
    delay: 500,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return (
    <div className="home-container">
      <div className="landing-section">
        <animated.img
          src={Image2}
          alt="Xadv motorbike image"
          style={imageSpring}
        />

        <animated.h1 style={textSpring}>Some good shit for you</animated.h1>

        <div className="buttons-container">
          <animated.button style={buttonSpring}>Learn more</animated.button>
          <animated.button style={buttonSpring}>Pick a bike</animated.button>
          <animated.button style={buttonSpring}>F***z</animated.button>
        </div>
      </div>
    </div>
  );
}
