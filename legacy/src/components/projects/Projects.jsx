import React from 'react';
import "./projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import img1 from '../props/yt-evidence.jpg';
import img2 from '../props/fuzzy-httpserver.png';  

// Project data - you can easily add more projects here
const projectsData = [
  {
    id: 1,
    title: "YT Evidence Collector",
    description: "A powerful tool for gathering evidence from YouTube, featuring video downloads, Wayback Machine snapshots, and automatic documentation generation. Supports bulk downloads and generates an HTML webpage for easy navigation of collected content.",
    tags: ["Python", "YouTube API", "Web Scraping", "HTML"],
    image: img1,
    github: "https://github.com/PakCyberbot/YouTube-Evidence-Collector",
    demo: "#"
  },
  { 
    "title": "fuzzy-httpserver",
  "description": "A lightweight, zero-dependency Python 3 HTTP file server that implements fuzzy and prefix-based filename matching, automatic fallback directory listing, colorized CLI output, POST data support, integrity checks via MD5, and interface awareness—ideal for red teaming, CTFs, and quick file sharing during engagements.",
  "tags": ["Python 3", "HTTP server", "Fuzzy matching", "CTF/red team tools", "Zero dependencies"],
  "image": img2,
  "github": "https://github.com/PakCyberbot/fuzzy-httpserver",
  "demo": "" 
},

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
