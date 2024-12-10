// Filename: D:\Repositories\cozy-portfolio\src\pages\Projects.jsx

import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Project One",
    description: "A cutting-edge web application that solves real-world challenges.",
    image: "https://via.placeholder.com/800x600?text=Project+One",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A creative mobile app with stunning design and functionality.",
    image: "https://via.placeholder.com/800x600?text=Project+Two",
    link: "#",
  },
  {
    title: "Project Three",
    description: "An AI-powered tool that revolutionizes productivity.",
    image: "https://via.placeholder.com/800x600?text=Project+Three",
    link: "#",
  },
];

function Projects() {
  return (
    <div id="projects" className="projects-page">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          Below are some of the projects I've worked on. Each one represents a unique challenge and showcases my skills in web development, design, and creativity.
        </p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
