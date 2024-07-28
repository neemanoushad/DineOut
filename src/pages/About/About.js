import React from "react";
import images from "../../Components/Data/images/us.jpg";
import "./About.css";

function About() {
  return (
    <div className="main-about">
        <div className="about-container">
        <h1>About Us</h1>
          <p>
            We are three passionate women who founded Dine Out with a simple
            mission: to bring the comfort and delight of homemade food to your
            gatherings. Our journey began from a shared love for cooking and a
            commitment to using fresh, quality ingredients. At Dine Out, we
            believe in the power of wholesome meals, crafted with care and
            personalized service. Whether it's a small gathering or a corporate
            event, we're here to cater to your culinary desires with dishes that
            satisfy both palate and heart. Our services include personalized
            catering for events of all sizes, ensuring each dish is tailored to
            your taste and occasion. We also offer convenient home delivery
            services, bringing our delicious homemade meals straight to your
            doorstep. Experience the joy of dining out in the comfort of your
            own home with Dine Out's reliable delivery service. Join us in
            celebrating the joy of homemade cooking. Let Dine Out be your go-to
            choice for memorable dining experiences, where every meal is made
            with love and served with a smile.
          </p>
          </div>
          <div className="image">
            <img src={images} alt="About Us" />
          </div>
      
      </div>

  );
}

export default About;
