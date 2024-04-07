import logo from "../snowy.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useContext } from "react"; // Import useState
import { ThemeContext } from "../ThemeContext";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

export default function () {
  const [menuActive, setMenuActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="top-header">
      <nav className="nav">
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuActive ? "active" : ""}>
          <CustomLink setMenuActive={setMenuActive} to="/experience">
            {" "}
            &lt;experience/&gt;{" "}
          </CustomLink>
          <CustomLink setMenuActive={setMenuActive} to="/courses">
            {" "}
            &lt;courses/&gt;{" "}
          </CustomLink>
          <CustomLink setMenuActive={setMenuActive} to="/competitions">
            {" "}
            &lt;competitions/&gt;{" "}
          </CustomLink>
          <CustomLink setMenuActive={setMenuActive} to="/skills">
            {" "}
            &lt;skills/&gt;{" "}
          </CustomLink>
          <CustomLink setMenuActive={setMenuActive} to="/projects">
            {" "}
            &lt;projects/&gt;{" "}
          </CustomLink>
          <CustomLink setMenuActive={setMenuActive} to="/about">
            {" "}
            &lt;about me/&gt;{" "}
          </CustomLink>
        </ul>
      </nav>
      <button className="toggleThemeButton" onClick={toggleTheme}>
        {theme === "light" ? (
          <img className="toggleThemeIcon" src={moon} alt="Profile" />
        ) : (
          <img className="toggleThemeIcon" src={sun} alt="Profile" />
        )}
      </button>
    </div>
  );
}

function CustomLink({ to, children, setMenuActive }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({
    path: resolvedPath.pathname,
    end: true,
  });

  return (
    <li className={isActive ? "active" : ""}>
      <Link
        onClick={() => {
          setMenuActive(false);
        }}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
