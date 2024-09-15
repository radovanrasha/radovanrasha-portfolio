import React from "react";
import "../styles/Skills.css";
import nodejsskill from "../assets/nodejs.png";
import expressskill from "../assets/expressskill.png";
import gitskill from "../assets/gitskill.png";
import antskill from "../assets/antskill.svg";
import sqlskill from "../assets/sqlskill.png";
import mongodbskill from "../assets/mongoskill.png";
import reactskill from "../assets/reactskill.png";
import jsskill from "../assets/jsskill.png";
import cssskill from "../assets/cssskill.png";
import htmlskill from "../assets/htmlskill.png";
import psskill from "../assets/psskill.png";
import vpsskill from "../assets/vpsskill.png";

const Skills = () => {
  const skills = [
    {
      name: "Node.js",
      logo: nodejsskill,
    },
    {
      name: "Express.js",
      logo: expressskill,
    },
    {
      name: "MongoDB",
      logo: mongodbskill,
    },
    {
      name: "React",
      logo: reactskill,
    },
    {
      name: "VPS Linux servers",
      logo: vpsskill,
    },
    {
      name: "ANT Design",
      logo: antskill,
    },
    {
      name: "HTML",
      logo: htmlskill,
    },
    {
      name: "CSS",
      logo: cssskill,
    },
    {
      name: "JavaScript",
      logo: jsskill,
    },
    {
      name: "SQL",
      logo: sqlskill,
    },
    {
      name: "GitHub & Bitbucket",
      logo: gitskill,
    },

    {
      name: "Adobe Photoshop",
      logo: psskill,
    },
  ];

  return (
    <div>
      <p className="header-div"> &lt;Skills/&gt;</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={skill.logo} alt={skill.name} className="skill-image" />
            <div className="skill-label">
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
