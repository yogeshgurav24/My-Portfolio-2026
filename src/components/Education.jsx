import React from "react";
import "./Education.css";

function Education() {
    return (
        <section className="education-section" id="education">
            <h2 className="edu-title">Education</h2>

            <div className="edu-item">
                <div className="edu-left-bar pink"></div>
                <div className="edu-content">
                    <h3>Master of Computer Application</h3>
                    <p style={{ fontSize: "15px", color: "gray" }}>Uka Tarsadia University, Bardoli</p>
                    <span style={{ fontSize: "12px", color: "gray" }}>2025 – Pursuing</span>
                </div>
            </div>


            <div className="edu-item">
                <div className="edu-left-bar green"></div>
                <div className="edu-content">
                    <h3>Bachelor of Computer Application</h3>
                    <p style={{ fontSize: "15px", color: "gray" }}>Bhagwan Mahavir University, Surat</p>
                    <span style={{ fontSize: "12px", color: "gray" }}>2022 – 2025</span>
                </div>
            </div>

            <div className="edu-item">
                <div className="edu-left-bar blue"></div>
                <div className="edu-content">
                    <h3>HSC</h3>
                    <p style={{ fontSize: "15px", color: "gray" }}>M.H.S.S Junior College</p>
                    <p style={{ fontSize: "13px", color: "gray" }}>Maharashtra State Board</p>
                    <span style={{ fontSize: "12px", color: "gray" }}>2021 – 2022</span>
                </div>
            </div>

            <div className="edu-item">
                <div className="edu-left-bar"></div>
                <div className="edu-content">
                    <h3>SSC</h3>
                    <p style={{ fontSize: "15px", color: "gray" }}>N.D Marathe High School</p>
                    <p style={{ fontSize: "13px", color: "gray" }}>Maharashtra State Board</p>
                    <span style={{ fontSize: "12px", color: "gray" }}>2019 – 2020</span>
                </div>
            </div>

        </section>
    );
}

export default Education;
