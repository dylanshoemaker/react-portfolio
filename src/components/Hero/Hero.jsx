import React from "react";


const Hero = () => {

  return (
    <section className="hero" alt="hero">

      <div className="hero-image">
      <img src={require("../../assets/images/profile-final.jpg").default}
      alt={"headshot"}/>
      </div>
      <div className="hero-text">
        <h3>
          <a href="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1">
            Have a look around!
          </a> 
        </h3>
      </div>
    </section>
  );
};

export default Hero;
