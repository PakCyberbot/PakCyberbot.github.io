import "./experience.css";
import { FaGithub } from "react-icons/fa";
import img1 from '../props/yt-evidence.jpg';
import { FaSquareGithub } from "react-icons/fa6";

const Experience = () => {
  const projects = [
    {
      name: 'YT Evidence Collector',
      image: img1,
      about:
      "This tool allows users to effortlessly gather evidence from YouTube, including: \n• video data and channel information. \n• With features like high-resolution video downloads \n• Wayback Machine snapshots \n• automatic documentation generation \n• Ability to download most of the age-restricted videos \n• Bulk video download during channel dump \n• Generates an HTML webpage for improved navigation of downloaded/dumped channel videos. \nit's never been easier to collect and organize YouTube data.",
      repolink: "https://github.com/PakCyberbot/YouTube-Evidence-Collector"
    }
  ];

  const experienceComponents = [];
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    experienceComponents.push(
      <div key={i} className={`member member-${i + 1}`}>
        <img className="member-img" src={project.image}></img>
        <div className="member-info">
          <h1 className="name">{project.name}</h1>
          <h4 className="about">{project.about}</h4>
          <a href={project.repolink} className="contact-member">
            <span><FaGithub/> GitHub Repo</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="members" className="container members-container">

      <h1 className="member-txt">My Selected Projects</h1>
      {experienceComponents}
      <a className="button" href="https://github.com/PakCyberbot?tab=repositories">More Projects</a>
    </div>
  );
};

export default Experience;
