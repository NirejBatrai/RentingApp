import React from "react";
import Image2 from "../assets/Xadv-750.png";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

export default function Home() {
  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: "translateX(-160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    transform: "scale(1)",
    delay: 600,
    
  });

  const textSpring = useSpring({
    opacity: 2,
    from: { opacity: 0, transform: "translateX(160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 500,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-160px)" },
    to: { opacity: 1, transform: "translateX(0)" },
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
          <animated.button className="button-55" style={buttonSpring}>
            Learn more
          </animated.button>
          <animated.button className="button-55" style={buttonSpring}>
            <Link to="/pricing">Pick a bike You want</Link>
          </animated.button>
          {/* <animated.button className="button-55" style={buttonSpring}>
            F***z
          </animated.button> */}
        </div>
      </div>
    </div>
  );
}
