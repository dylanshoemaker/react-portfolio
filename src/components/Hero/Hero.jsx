import React from "react";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero-image">
      <img src={process.env.PUBLIC_URL + '/images/profile-final.jpg'} 
      alt={"headshot"}/>
      </div>
      <div class="hero-text">
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
