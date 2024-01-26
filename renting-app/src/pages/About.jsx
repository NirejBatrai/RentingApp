import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to [Your Company Name] - Your Premier Motorbike Rental Service</p>

        <div className="mission-values">
          <h2>Our Mission</h2>
          <p>
            At [Your Company Name], our mission is to provide an exceptional and
            unforgettable motorbike rental experience. We strive to offer top-notch
            vehicles, excellent customer service, and seamless processes to ensure
            your journey is nothing short of extraordinary.
          </p>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>High-Quality Fleet: Explore the city on our well-maintained and latest motorbike models.</li>
            <li>Customer-Centric Service: Our dedicated team is here to assist you at every step, ensuring your satisfaction.</li>
            <li>Flexible Rental Options: Choose from hourly, daily, or long-term rentals tailored to your needs.</li>
            <li>Competitive Pricing: Enjoy affordable rates without compromising on quality.</li>
          </ul>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <p>
            [Your Company Name] is comprised of a passionate team of motorbike enthusiasts.
            We are dedicated to making your experience with us memorable and enjoyable.
            Meet the faces behind our commitment to excellence.
          </p>
          {/* Add team member profiles or photos here */}
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions or ready to start your motorbike adventure with us? Contact our
            friendly team today.
          </p>
          <p>Email: info@[yourcompanyname].com</p>
          <p>Phone: [Your Contact Number]</p>
        </div>
      </div>
    </div>
  );
};

export default About;
