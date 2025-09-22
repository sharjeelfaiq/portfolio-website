import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import Loader from "./assets/animations/Loading Screen.json";

import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTop";
import "./App.css";

// Lazy load heavier sections
const Profile = lazy(() => import("./components/Profile"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Lottie animationData={Loader} loop={true} />
          </div>
        }
      >
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
