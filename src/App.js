import { ToastContainer } from "react-toastify";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ScrollToTopButton from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
