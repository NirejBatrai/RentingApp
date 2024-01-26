import Card from "../components/Card";
import Image1 from "../assets/Tmax.png";
import Image2 from "../assets/Xadv-750.png";
import Image3 from "../assets/PCX.png";
import Image4 from "../assets/Xmaxx.png";
import Image5 from "../assets/Tmaxx.png";
import "./Pricing.css";
import React from "react";
import { useSpring, animated } from "react-spring";


export default function Pricing() {
  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  });

  const cardContainerSpring = useSpring({
    from: { opacity: 0, transform: "translateX(160px)" },
    to: { opacity: 1, transform: "translateX(10)" },
    config: { duration: 500 },
  });
  return (
    <div className="pricing-container">
     <animated.h1 className="pricing-title" style={titleSpring}>
        Discover Our Exclusive Models
      </animated.h1>

      <animated.div className="card-container" style={cardContainerSpring}>
        <Card
          imageSrc={Image1}
          bikeName={"T-max 550cc"}
          description="Unleash the urban warrior within with the Tmax bike. Featuring a responsive 560cc engine, this sleek marvel is not just a mode of transportation; it is a statement. With its sporty design and cutting-edge features, the Tmax seamlessly blends style with performance. Whether you are weaving through city streets or embarking on a weekend joyride, the Tmax offers an unmatched combination of comfort and exhilaration. Experience the perfect synthesis of efficiency and elegance with the Tmax bike."
        />

        <Card
          imageSrc={Image2}
          bikeName={"XADV 750cc"}
          description="
          
              Embark on a journey of boundless exploration with the Xadv bike,
              your versatile adventure companion. Powering through with a robust
              750cc engine, this off-road marvel is not just a bike; it is a
              testament to the spirit of adventure. Built for those who crave
              the thrill of the unknown, the Xadv boasts a rugged design,
              advanced suspension, and powerful performance to conquer every
              terrain it encounters. Elevate your riding experience with the
              Xadv and embrace the excitement of uncharted paths with unwavering
              confidence."
        />

        <Card
          imageSrc={Image3}
          bikeName={"PCX 160cc"}
          description="
              The PCX motorbike is a sleek and stylish two-wheeler renowned for
              its performance and efficiency. Powered by a 160cc engine, it
              seamlessly blends power with fuel efficiency, making it an ideal
              choice for urban commuting. Its modern design, comfortable
              seating, and advanced features make the PCX a standout option for
              riders seeking a dynamic and practical riding experience. Whether
              navigating through city traffic or cruising on the open road, the
              PCX delivers a thrilling ride while maintaining optimal fuel
              economy.
          
          "
        />

        <Card
          imageSrc={Image4}
          bikeName={"X-Max 300cc"}
          description="
            
              Unleash the urban warrior within with the XMAX scooter. Boasting a
              responsive 300cc engine, this sleek marvel is more than just a
              means of transport; it's a bold statement. The XMAX seamlessly
              merges sporty design with cutting-edge features, offering an
              unparalleled fusion of style and performance. Whether navigating
              busy city streets or embarking on a weekend adventure, the XMAX
              delivers an unbeatable blend of comfort and exhilaration. Indulge
              in the flawless synthesis of efficiency and elegance with the XMAX
              scooter.
            
          "
        />
        <Card
          imageSrc={Image5}
          bikeName={"T-max 550cc"}
          description="
            
              Unleash the urban warrior within with the Tmax bike. Featuring a
              responsive 560cc engine, this sleek marvel is not just a mode of
              transportation; it is a statement. With its sporty design and
              cutting-edge features, the Tmax seamlessly blends style with
              performance. Whether you are weaving through city streets or
              embarking on a weekend joyride, the Tmax offers an unmatched
              combination of comfort and exhilaration. Experience the perfect
              synthesis of efficiency and elegance with the Tmax bike.
            "
        />

        <Card
          imageSrc={Image2}
          bikeName={"XADV 750cc"}
          description="
           
              Embark on a journey of boundless exploration with the Xadv bike,
              your versatile adventure companion. Powering through with a robust
              750cc engine, this off-road marvel is not just a bike; it is a
              testament to the spirit of adventure. Built for those who crave
              the thrill of the unknown, the Xadv boasts a rugged design,
              advanced suspension, and powerful performance to conquer every
              terrain it encounters. Elevate your riding experience with the
              Xadv and embrace the excitement of uncharted paths with unwavering
              confidence.
          
          "
        />

        <Card
          imageSrc={Image3}
          bikeName={"PCX 160cc"}
          description="
              The PCX motorbike is a sleek and stylish two-wheeler renowned for
              its performance and efficiency. Powered by a 160cc engine, it
              seamlessly blends power with fuel efficiency, making it an ideal
              choice for urban commuting. Its modern design, comfortable
              seating, and advanced features make the PCX a standout option for
              riders seeking a dynamic and practical riding experience. Whether
              navigating through city traffic or cruising on the open road, the
              PCX delivers a thrilling ride while maintaining optimal fuel
              economy.
            
          "
        />

        <Card
          imageSrc={Image4}
          bikeName={"X-Max 300cc"}
          description="
            
              Unleash the urban warrior within with the XMAX scooter. Boasting a
              responsive 300cc engine, this sleek marvel is more than just a
              means of transport; it's a bold statement. The XMAX seamlessly
              merges sporty design with cutting-edge features, offering an
              unparalleled fusion of style and performance. Whether navigating
              busy city streets or embarking on a weekend adventure, the XMAX
              delivers an unbeatable blend of comfort and exhilaration. Indulge
              in the flawless synthesis of efficiency and elegance with the XMAX
              scooter.
          
          "
        />
        <Card
          imageSrc={Image1}
          bikeName={"T-max 550cc"}
          description="
              Unleash the urban warrior within with the Tmax bike. Featuring a
              responsive 560cc engine, this sleek marvel is not just a mode of
              transportation; it is a statement. With its sporty design and
              cutting-edge features, the Tmax seamlessly blends style with
              performance. Whether you are weaving through city streets or
              embarking on a weekend joyride, the Tmax offers an unmatched
              combination of comfort and exhilaration. Experience the perfect
              synthesis of efficiency and elegance with the Tmax bike.
            "
        />

        <Card
          imageSrc={Image2}
          bikeName={"XADV 750cc"}
          description="
              Embark on a journey of boundless exploration with the Xadv bike,
              your versatile adventure companion. Powering through with a robust
              750cc engine, this off-road marvel is not just a bike; it is a
              testament to the spirit of adventure. Built for those who crave
              the thrill of the unknown, the Xadv boasts a rugged design,
              advanced suspension, and powerful performance to conquer every
              terrain it encounters. Elevate your riding experience with the
              Xadv and embrace the excitement of uncharted paths with unwavering
              confidence.
            "
        />

        <Card
          imageSrc={Image3}
          bikeName={"PCX 160cc"}
          description="
              The PCX motorbike is a sleek and stylish two-wheeler renowned for
              its performance and efficiency. Powered by a 160cc engine, it
              seamlessly blends power with fuel efficiency, making it an ideal
              choice for urban commuting. Its modern design, comfortable
              seating, and advanced features make the PCX a standout option for
              riders seeking a dynamic and practical riding experience. Whether
              navigating through city traffic or cruising on the open road, the
              PCX delivers a thrilling ride while maintaining optimal fuel
              economy.
           "
        />

        <Card
          imageSrc={Image4}
          bikeName={"X-Max 300cc"}
          description="
              Unleash the urban warrior within with the XMAX scooter. Boasting a
              responsive 300cc engine, this sleek marvel is more than just a
              means of transport; it's a bold statement. The XMAX seamlessly
              merges sporty design with cutting-edge features, offering an
              unparalleled fusion of style and performance. Whether navigating
              busy city streets or embarking on a weekend adventure, the XMAX
              delivers an unbeatable blend of comfort and exhilaration. Indulge
              in the flawless synthesis of efficiency and elegance with the XMAX
              scooter.
            "
        />
         </animated.div>
     
    </div>
  );
}
