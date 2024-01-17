import Card from "../components/Card";
import Image1 from "../assets/Tmax.png";
import Image2 from "../assets/XADV.png";

export default function Pricing() {
  const cardDescriptionStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    textAlign: "justify",
    marginTop: "15px",
  };

  return (
    <>
      <h1 className="pricing-title">Discover Our Exclusive Models</h1>

      <Card
        imageSrc={Image1}
        description={
          <p style={cardDescriptionStyle}>
            Unleash the urban warrior within with the Tmax bike. Featuring a
            responsive 560cc engine, this sleek marvel is not just a mode of
            transportation; it's a statement. With its sporty design and
            cutting-edge features, the Tmax seamlessly blends style with
            performance. Whether you're weaving through city streets or
            embarking on a weekend joyride, the Tmax offers an unmatched
            combination of comfort and exhilaration. Experience the perfect
            synthesis of efficiency and elegance with the Tmax bike.
          </p>
        }
      />

      <Card
        imageSrc={Image2}
        description={
          <p style={cardDescriptionStyle}>
            Embark on a journey of boundless exploration with the Xadv bike,
            your versatile adventure companion. Powering through with a robust
            750cc engine, this off-road marvel is not just a bike; it's a
            testament to the spirit of adventure. Built for those who crave the
            thrill of the unknown, the Xadv boasts a rugged design, advanced
            suspension, and powerful performance to conquer every terrain it
            encounters. Elevate your riding experience with the Xadv and embrace
            the excitement of uncharted paths with unwavering confidence.
          </p>
        }
      />
    </>
  );
}
