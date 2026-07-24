import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">

        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>guravyogesh2003@gmail.com</p>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 8010694840</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Surat, Gujarat, India</p>
          </div>
        </div>

        <h3 className="connect-title">Connect With Me</h3>

        <div className="social-links">
          <a href="https://www.instagram.com/yogesh_gurav24?igsh=MWMwYWw0ZThpaG05eQ==" target="_blank" className="social-icon instagram">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/yogesh-deore24" target="_blank" className="social-icon linkedin">
            <FaLinkedin />
          </a>

          <a href="https://github.com/yogeshgurav24/" target="_blank" className="social-icon github">
            <FaGithub />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
