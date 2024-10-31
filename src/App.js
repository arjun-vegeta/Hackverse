// src/App.js
import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
<<<<<<< HEAD
import { SpeakersJudges } from "./components/SpeakersJudges";
=======
import StickyScrollSection from "./components/Prizes";
import { TimelineDemo } from "./components/Timeline";
import { CanvasRevealEffectDemo } from "./components/Tracks";
>>>>>>> 6fa74577d599ed6c4d6a18c93e958510f6cb25f0

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <StatsSection />
<<<<<<< HEAD
      <SpeakersJudges />
=======
      <StickyScrollSection />
      <TimelineDemo />
      <CanvasRevealEffectDemo />

>>>>>>> 6fa74577d599ed6c4d6a18c93e958510f6cb25f0
      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
