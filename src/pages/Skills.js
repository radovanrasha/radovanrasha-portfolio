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

const Skills = () => {
  const skills = [
    {
      name: "Node.js",
      logo: nodejsskill,
      percentage: 85,
    },
    {
      name: "Express.js",
      logo: expressskill,
      percentage: 90,
    },
    {
      name: "MongoDB",
      logo: mongodbskill,
      percentage: 90,
    },
    {
      name: "React",
      logo: reactskill,
      percentage: 70,
    },
    {
      name: "ANT Design",
      logo: antskill,
      percentage: 90,
    },
    {
      name: "HTML",
      logo: htmlskill,
      percentage: 100,
    },
    {
      name: "CSS",
      logo: cssskill,
      percentage: 100,
    },
    {
      name: "JavaScript",
      logo: jsskill,
      percentage: 90,
    },
    {
      name: "SQL",
      logo: sqlskill,
      percentage: 50,
    },
    {
      name: "GitHub & Bitbucket",
      logo: gitskill,
      percentage: 80,
    },
    {
      name: "Adobe Photoshop",
      logo: psskill,
      percentage: 60,
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
              <div
                className="percentage-bar"
                style={{
                  background: `linear-gradient(to right, rgb(7, 9, 114) 0%, rgb(7, 9, 114) ${skill.percentage}%, #e0e0e0 ${skill.percentage}%, #e0e0e0 100%)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
