// src/App.js
import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
import StickyScrollSection from "./components/Prizes";
import { TimelineDemo } from "./components/Timeline";
import { CanvasRevealEffectDemo } from "./components/Tracks";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <StatsSection />
      <StickyScrollSection />
      <TimelineDemo />
      <CanvasRevealEffectDemo />

      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
