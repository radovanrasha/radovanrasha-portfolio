import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Competitions from "./pages/Competitions";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar></NavBar>
        <div>
          <Routes>
            <Route path="/" element={<Experience></Experience>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route
              path="/experience"
              element={<Experience></Experience>}
            ></Route>
            <Route
              path="/competitions"
              element={<Competitions></Competitions>}
            ></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/*" element={<Skills></Skills>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
