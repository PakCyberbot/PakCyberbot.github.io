import React from 'react';
import "./projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Project data - you can easily add more projects here
const projectsData = [
  {
    id: 1,
    title: "YT Evidence Collector",
    description: "A powerful tool for gathering evidence from YouTube, featuring video downloads, Wayback Machine snapshots, and automatic documentation generation. Supports bulk downloads and generates an HTML webpage for easy navigation of collected content.",
    tags: ["Python", "YouTube API", "Web Scraping", "HTML"],
    image: "https://pakcyberbot.com/static/media/yt-evidence.cbff29de353181b3835f.jpg",
    github: "https://github.com/PakCyberbot/YouTube-Evidence-Collector",
    demo: "#"
  },
  {
    id: 2,
    title: "AI-Powered Threat Detector",
    description: "An advanced security tool that uses machine learning to detect and mitigate potential cyber threats in real-time. Features include network traffic analysis, anomaly detection, and automated incident response.",
    tags: ["Python", "TensorFlow", "Cybersecurity", "Flask"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "#",
    demo: "#"
  },
  // Template for adding new projects:
  // {
  //   id: 3, // Increment this number
  //   title: "Project Name",
  //   description: "Detailed description of the project and its features.",
  //   tags: ["Technology 1", "Technology 2", "Technology 3"],
  //   image: "path/to/image.png",
  //   github: "https://github.com/yourusername/project",
  //   demo: "https://project-demo.com" // Optional
  // },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="github-link">
              <FiGithub />
              <span className="link-text">View on GitHub</span>
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="demo-link">
              <FiExternalLink />
              <span className="link-text">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Featured</span> Projects
          </h2>
          <p className="section-subtitle">A showcase of my technical expertise and problem-solving skills</p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
