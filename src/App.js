// src/App.js
import React from "react";
import Landing from "./components/Landing";
import "./index.css";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <StatsSection />
      {/* Add other sections like PRIZES, TRACKS, etc. */}
    </div>
  );
}

export default App;
