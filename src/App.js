import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import "./index.css";
import StatsSection from "./components/StatsSection";
import StickyScrollSection from "./components/Prizes";
import { TimelineDemo } from "./components/Timeline";
import { CanvasRevealEffectDemo } from "./components/Tracks";
import Sponsor from "./components/Sponsor";
import { SpeakersJudges } from "./components/SpeakersJudges";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="prizes">
        <StickyScrollSection />
      </div>
      <div id="speakers-judges">
        <SpeakersJudges />
      </div>
      <div id="tracks">
        <CanvasRevealEffectDemo />
      </div>
      <div id="timeline">
        <TimelineDemo />
      </div>
      <div id="sponsors">
        <Sponsor />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
