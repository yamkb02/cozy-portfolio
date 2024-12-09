import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project One</h3>
          <p>A brief description of Project One.</p>
        </div>
        <div className="project-item">
          <h3>Project Two</h3>
          <p>A brief description of Project Two.</p>
        </div>
        <div className="project-item">
          <h3>Project Three</h3>
          <p>A brief description of Project Three.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
