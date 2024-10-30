// src/App.js
import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
