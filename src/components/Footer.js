import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} radovanrasha</p>
      <div>
        <a href="mailto:ivanovicradovan18@gmail.com" target="_blank" rel="noreferrer">
          <img className="footerIcon" src={gmail} alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/radovanrasha/" target="_blank" rel="noreferrer">
          <img className="footerIcon" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.github.com/radovanrasha/" target="_blank" rel="noreferrer">
          <img className="footerIcon" src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
