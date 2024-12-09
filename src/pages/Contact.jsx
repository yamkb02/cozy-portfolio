import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact"> {/* Corrected className */}
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Whether you have a project in mind or just want to say hi, feel free to reach out.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </div>
  );
}

export default Contact;