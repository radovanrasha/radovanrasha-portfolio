import weather from "../assets/weatherapp.png";
import notes from "../assets/notesapp.png";
import playgroundproject from "../assets/playgroundproject.png";

const Projects = () => {
  return (
    <div className="container">
      <p className="header-div"> &lt;Projects/&gt;</p>
      <div class="container">
        <div class="profile-wrapper">
          <a
            href="https://playground.radovanrasha.com"
            title="PlaygroundProject"
          >
            <div class="profile">
              <div class="profile-image">
                <img src={playgroundproject} alt="Profile" />
              </div>
              <div class="profile-name">
                <h2 class="profile-bio">Playground website</h2>
                <div class="profile-bio">
                  This is a full-stack project that I built using Node.js,
                  Express.js, MongoDB, React, Ant Design, and Socket.IO. It's a
                  website for both offline and online games.
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="profile-wrapper">
          <a href="https://weather.radovanrasha.com" title="WeatherApp">
            <div class="profile">
              <div class="profile-image">
                <img src={weather} alt="Profile" />
              </div>
              <div class="profile-name">
                <h2 class="profile-bio">Weather website</h2>
                <div class="profile-bio">
                  This is website that I made using React and two free APIs.
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="profile-wrapper">
          <a href="https://notes.radovanrasha.com" title="NotesApp">
            <div class="profile">
              <div class="profile-image">
                <img src={notes} alt="Profile" />
              </div>
              <div class="profile-name">
                <h2 class="profile-bio">Notes website</h2>
                <div class="profile-bio">
                  This is fullstack project that I made using Node.js,
                  Express.js, MongoDB, React and ANT Design.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
