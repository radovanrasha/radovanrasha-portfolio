import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useContext } from "react"; // Import useState
import { ThemeContext } from "../ThemeContext";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="top-header">
      <div className="nav-container">
        <nav className="nav">
          <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuActive ? "active" : ""}>
            <CustomLink setMenuActive={setMenuActive} to="/projects">projects</CustomLink>
            <CustomLink setMenuActive={setMenuActive} to="/experience">experience</CustomLink>
            <CustomLink setMenuActive={setMenuActive} to="/courses">courses</CustomLink>
            <CustomLink setMenuActive={setMenuActive} to="/competitions">competitions</CustomLink>
            <CustomLink setMenuActive={setMenuActive} to="/skills">skills</CustomLink>
            <CustomLink setMenuActive={setMenuActive} to="/about">about me</CustomLink>
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="toggleThemeButton" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? (
              <img className="toggleThemeIcon" src={moon} alt="Moon icon" />
            ) : (
              <img className="toggleThemeIcon" src={sun} alt="Sun icon" />
            )}
          </button>
        </div>
      </div>
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
