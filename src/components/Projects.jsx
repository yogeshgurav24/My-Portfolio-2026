import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="back">
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-line"></div>

      <div className="project-container">

        <div className="project-card glow-hover">
          <h3>AI Smart Note</h3>
          <p style={{fontSize:"13px"}}>Kotlin, XML, Gemini Api, Sqlite, Firebase Auth, Firebase Firestore.</p>
        </div>


         <div className="project-card glow-hover">
          <h3>Garland Shop</h3>
          {/* <p style={{color:"gray"}}>Flowers Distribution And Monthly Billing Management System Android Application</p> */}
          <p style={{fontSize:"13px"}}>Kotlin, XML, Firebase Realtime Database.</p>
        </div>

        <div className="project-card glow-hover">
          <h3>Event Management System</h3>
          <p style={{fontSize:"13px"}}>HTML, CSS, Javascript, PHP, MySql.</p>
        </div>

         <div className="project-card glow-hover">
          <h3>My-Portfolio</h3>
          <p style={{fontSize:"13px"}}> React, Animated css.</p>
        </div>
        
        <div className="project-card glow-hover">
          <h3>Search Car</h3>
          <p style={{fontSize:"13px"}}>Kotlin, XML, Firebase Realtime Database.</p>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Projects;
