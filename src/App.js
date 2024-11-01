// src/App.js
import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
import StickyScrollSection from "./components/Prizes";
import { TimelineDemo } from "./components/Timeline";
import { CanvasRevealEffectDemo } from "./components/Tracks";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <StatsSection />
      <StickyScrollSection />
      <CanvasRevealEffectDemo />
      <TimelineDemo />
      <Sponsor />

      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
