import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skill-container">

       {/* Languages */}
        <div className="skill-box">
          <h3>Languages</h3>
          <ul>
            <li>Android - Kotlin</li>
            <li>Java</li>
            <li>Python</li>
            <li>PHP</li>
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>


        {/* Frontend */}
        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>XML</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js (Basic)</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li>Android Studio</li>
            <li>VS Code</li>
            <li>Git / GitHub</li>
            <li>phpMyAdmin</li>
            <li>SQL Server Management Studio</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;