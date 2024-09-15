import weather from "../assets/weatherapp.png";
import notes from "../assets/notesapp.png";
import playgroundproject from "../assets/playgroundproject.png";

const Projects = () => {
  return (
    <div className="container">
      <p className="header-div"> &lt;Projects/&gt;</p>
      <div class="container">
        <div class="profile-wrapper">
          <div class="profile">
            <div class="profile-image">
              <img src={weather} alt="Profile" />
            </div>
            <ul class="social-icons">
              <li>
                <a href="https://weather.radovanrasha.com" title="WeatherApp">
                  <svg
                    style={{ color: "black" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="12" y1="2" x2="12" y2="5"></line>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                    <line x1="2" y1="12" x2="5" y2="12"></line>
                    <line x1="19" y1="12" x2="22" y2="12"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  </svg>
                </a>
              </li>
            </ul>
            <div class="profile-name">
              <h2 class="profile-bio">Weather website</h2>
              <div class="profile-bio">
                This is website that I made using React and two free APIs.
              </div>
            </div>
          </div>
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
                  This is fullstack project that I made using Node.js,
                  Express.js, MongoDB, React, ANT Design and SocketIO. It is
                  play for offline and online games.
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
