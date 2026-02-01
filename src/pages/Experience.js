import "../styles/Experience.css";
import concordlogo from "../assets/concordlogo.png";

const Experience = () => {
  return (
    <div className="container animate-in">
      <div className="onecard-profile-wrapper">
        <div className="experience-card">
          <div className="experience-logo-container">
            <img src={concordlogo} alt="Concordsoft Solutions Logo" />
          </div>
          <div className="experience-info">
            <h2>Concordsoft Solutions</h2>
            <span className="experience-date">July 2022 - Present</span>
            <div className="experience-description">
              At my first company, I gained deep expertise in the JavaScript ecosystem, 
              focusing on Node.js, React, and MongoDB. I successfully managed and 
              delivered 7 real-world projects, honing my skills in project planning, 
              team collaboration (Trello/Jira), and infrastructure management including 
              SQL and Linux VPS servers.
            </div>
            <a
              href="https://www.helloworld.rs/kompanija/ConcordSoft-Solutions/1822"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              Learn more about Concordsoft
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
