import "../styles/Projects.css";
import weather from "../assets/weatherapp.png";
import notes from "../assets/notesapp.png";
import playgroundproject from "../assets/playgroundproject.png";

const Projects = () => {
  const projectList = [
    {
      title: "Playground website",
      image: playgroundproject,
      description: "A full-stack gaming platform with real-time features. Built with Node.js, Express, MongoDB, and Socket.IO.",
      link: "https://playground.radovanrasha.com",
      tags: ["Node.js", "MongoDB", "Socket.IO", "React"]
    },
    {
      title: "Weather website",
      image: weather,
      description: "A clean, responsive weather application fetching real-time data from multiple external APIs.",
      link: "https://weather.radovanrasha.com",
      tags: ["React", "API Integration", "CSS3"]
    },
    {
      title: "Notes website",
      image: notes,
      description: "A secure personal note-taking application with full CRUD functionality and a modern interface.",
      link: "https://notes.radovanrasha.com",
      tags: ["Express", "MongoDB", "Ant Design", "React"]
    }
  ];

  return (
    <div className="container animate-in">
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            title={project.title}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
