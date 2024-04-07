import React from "react";
// import "../styles/Experience.css";
import concordlogo from "../assets/concordlogo.png";

const Experience = () => {
  return (
    <div className="container">
      <p className="header-div"> &lt;Experience/&gt;</p>
      <div class="container">
        <div class="onecard-profile-wrapper">
          <div class="profile">
            <div class="profile-image">
              <img src={concordlogo} alt="Profile" />
            </div>
            <ul class="social-icons">
              <li>
                <a
                  href="https://www.helloworld.rs/kompanija/ConcordSoft-Solutions/1822"
                  title="Concord"
                >
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
                    <rect
                      x="4"
                      y="8"
                      width="16"
                      height="12"
                      rx="2"
                      ry="2"
                    ></rect>

                    <path d="M4 8L12 4L20 8"></path>

                    <line x1="8" y1="12" x2="16" y2="12"></line>

                    <line x1="7" y1="10" x2="7" y2="8"></line>
                    <line x1="17" y1="10" x2="17" y2="8"></line>
                  </svg>
                </a>
              </li>
            </ul>
            <div class="profile-name">
              <h2>Concordsoft Solutions</h2>
              <h3 style={{ marginBottom: "5px" }}>15.07.2022. - Present</h3>
              <div class="profile-bio">
                At my first company, I gained valuable knowledge in Node.js,
                React, and MongoDB, and learned the basics of Redux, SQL, and
                servers. I managed 7 real projects, improved my skills in Trello
                and Jira, and acquired insights into project planning as a
                Project Manager.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
