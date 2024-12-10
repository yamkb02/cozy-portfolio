import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h2>Get in Touch</h2>
        <p>
          Whether you have a question, a project in mind, or just want to say hello, I'd love to hear from you.
        </p>
      </div>
      {/* Contact Card Section */}
      <div className="contact-cards">
        <div className="contact-card">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <h3>GitHub</h3>
          <p>Explore my projects and repositories.</p>
          <a href="https://github.com/yamkb02" target="_blank" rel="noopener noreferrer">
            Visit GitHub
          </a>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>Connect with me professionally on LinkedIn.</p>
          <a href="https://linkedin.com/in/markkennethbadilla" target="_blank" rel="noopener noreferrer">
            Visit LinkedIn
          </a>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h3>Email</h3>
          <p>Send me an email for inquiries or collaborations.</p>
          <a href="mailto:markkennethbadilla@gmail.com">Send Email</a>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faFileAlt} className="contact-icon" />
          <h3>Resume</h3>
          <p>Check out my professional background and skills.</p>
          <a href="/Badilla_Resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
