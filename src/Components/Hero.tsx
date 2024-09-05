import mypic from "./../Images/headshot.jpg";

import "../CSS/Header.css";
import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="flex-row">
        <hgroup>
          <h1 id="my-name"> Oliver Gomes Jr.</h1>
          <p>Check out my collection of work below.</p>
          
        </hgroup>
        <img src={mypic} alt="oliver" id="oliver" />
      </div>
    </section>
  );
}

export default Hero;
