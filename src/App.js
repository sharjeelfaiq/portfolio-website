import { useEffect } from "react";
import { createChat } from "@n8n/chat";
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
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://sharjeelfaiq610.app.n8n.cloud/webhook/bbe0fa9b-0248-41e1-af88-d6fef9fc6162/chat",
      initialMessages: [
        "Hi there! 👋",
        "My name is Sharjeel Faiq. How can I assist you today?",
      ],
    });
  }, []);

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
