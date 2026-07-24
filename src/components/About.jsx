import React from "react";
import "./About.css";
import profilePic from "../assets/originalIMG.jpg"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm <strong>Yogesh Gurav</strong>, an MCA student with a growing interest in Android app development.
             I enjoy working with Kotlin, Java, and UI design to create simple and functional mobile applications.
              With every project, I focus on improving my skills, exploring new tools, and understanding real development practices.
               My goal is to become a skilled Android developer and build meaningful, user-friendly apps in the future.
          </p>

          <div className="about-info">
            <p>🎓 MCA Student</p>
            <p>💻 Android Developer</p>
            <p>📍 Surat, Gujarat, India</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;