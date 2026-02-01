import "../styles/About.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  return (
    <div className="container animate-in">
      <div className="about-container">
        <div className="about-row">
          <img
            className="leftslide"
            src={about2}
            alt="Working on code"
          />
          <div className="text-content rightslide">
            <p>
              I am a full-stack JavaScript developer with over two years of
              professional experience, based in Serbia. My journey began with a
              solid foundation in economics and commerce, followed by specialized
              studies in Business Informatics at the University of Economics in Subotica.
            </p>
          </div>
        </div>

        <div className="about-row">
          <div className="text-content leftslide">
            <p>
              My expertise is primarily in backend development using Node.js,
              Express, and MongoDB, along with frontend proficiency in React and Ant Design.
              I also work with NestJS, VPS Linux Servers, Nginx, and TypeScript.
            </p>
          </div>
          <img
            className="rightslide"
            src={about1}
            alt="Profile portrait"
          />
        </div>

        <div className="about-row">
          <img
            className="leftslide"
            src={about3}
            alt="Project collaboration"
          />
          <div className="text-content rightslide">
            <p>
              Throughout my career, I have continually enhanced my skills through
              advanced courses, coding competitions, and a diverse range of
              personal and professional projects.
            </p>
          </div>
        </div>

        <div className="about-row">
          <div className="text-content leftslide">
            <p>
              I am passionate about building efficient, scalable solutions and
              expanding my expertise through constant learning and hands-on
              challenges.
            </p>
          </div>
          <img
            className="rightslide"
            src={about4}
            alt="Learning new technologies"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
