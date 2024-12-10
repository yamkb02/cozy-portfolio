// Filename: D:\Repositories\cozy-portfolio\src\pages\Projects.jsx

import React from 'react';
import '../styles/Projects.css';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const projects = [
  {
    title: "SyncUp",
    description: "SyncUp is a modern platform for managing memberships, events, communication, and payments, built with React, Node.js, and Supabase.",
    image: Project1,
    link: "https://syncup-org.vercel.app/",
  },
  {
    title: "Progenetor",
    description: "AI ChatBot Prompt Generator is a tool that helps create engaging prompts to improve AI conversations and enhance chatbot performance, built with React and Node.js",
    image: Project2,
    link: "https://progenetor.vercel.app/",
  },
  {
    title: "MovieLens 20M Apriori Analysis",
    description: "MovieLens 20M Apriori Analysis is a Python-powered data analytics project that uncovers insights from movie data to improve recommendations and enhance user experiences.",
    image: Project3,
    link: "https://g1-group-nime-final-project.streamlit.app/",
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
