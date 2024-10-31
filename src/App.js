// src/App.js
import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
import { SpeakersJudges } from "./components/SpeakersJudges";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <StatsSection />
      <SpeakersJudges />
      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
