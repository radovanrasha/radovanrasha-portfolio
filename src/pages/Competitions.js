import "../styles/Competitions.css";
import bizkod1 from "../assets/bizkod1.png";

const Competitions = () => {
  return (
    <div className="container animate-in">
      <div className="onecard-profile-wrapper">
        <div className="competition-card">
          <div className="competition-logo-container">
            <img src={bizkod1} alt="BizKod Hackathon Logo" />
          </div>
          <div className="competition-info">
            <h2>BizKod v7.0 Hackathon - Third Place</h2>
            <span className="competition-date">March 18, 2023 - March 19, 2023</span>
            <div className="competition-description">
              In this intensive 24-hour student competition hosted by Inspira Grupa, 
              our team developed a high-impact mobile application. Using React Native, 
              Node.js, and MongoDB, I spearheaded the backend development. We were 
              thrilled to secure third place among a field of talented innovators.
            </div>
            <a
              href="https://bizkod.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="competition-link"
            >
              <svg
                className="trophy-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              Learn about BizKod
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
