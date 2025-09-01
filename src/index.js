import AOS from "aos";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "aos/dist/aos.css";
import "@n8n/chat/style.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

AOS.init({
  offset: 0,
});
