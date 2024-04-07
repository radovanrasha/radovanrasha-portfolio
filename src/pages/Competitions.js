import React from "react";
// import "../styles/Competitions.css";
import bizkod1 from "../assets/bizkod1.png";

const Competitions = () => {
  return (
    <div className="container">
      <p className="header-div"> &lt;Competitions/&gt;</p>
      <div class="container">
        <div class="onecard-profile-wrapper">
          <div class="profile">
            <div class="profile-image">
              <img src={bizkod1} alt="Profile" />
            </div>
            <ul class="social-icons">
              <li>
                <a href="https://bizkod.rs" title="BizKod">
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
                    {/* <!-- Body of the trophy --> */}
                    <path d="M4,6 C4,2 7,2 12,2 C17,2 20,2 20,6 C20,9 18,12 12,12 C6,12 4,9 4,6Z"></path>

                    {/* <!-- Top extensions --> */}
                    <path d="M4,6 C2,8 2,10 4,12"></path>
                    <path d="M20,6 C22,8 22,10 20,12"></path>

                    {/* <!-- Base stem --> */}
                    <rect x="11" y="12" width="2" height="4"></rect>

                    {/* <!-- Base of the trophy --> */}
                    <rect x="6" y="16" width="12" height="2"></rect>

                    {/* <!-- Bottom base --> */}
                    <path d="M2,18 C2,19 6,20 12,20 C18,20 22,19 22,18"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div class="profile-name">
              <h2>BizKod v7.0 Hakaton - Third place</h2>
              <h3 style={{ marginBottom: "5px" }}>18.03.2023. - 19.03.2023.</h3>
              <div class="profile-bio">
                In Subotica, Inspira Grupa hosted an engaging student
                competition, challenging teams to innovate within 24 hours. With
                use of React Native, Node.js, and MongoDB, our team delivered a
                standout mobile app. I took charge of backend development and we
                managed to achieve third place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
