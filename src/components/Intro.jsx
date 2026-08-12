import React from "react";
import "./Intro.css";
// import myPhoto from "../assets/utuPic.png"; 


function Intro() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Hello, I'm <span className="highlight">Yogesh</span></h1>
        <p>MCA Student • Android Developer • Understanding Of OOPs</p>
        {/* <button className="glow-btn">Download Resume</button> */}
      </div>

      <div className="hero-image">
       <img src="/assets/utuPic.png" alt="Profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Intro;
  