import React from 'react';
import LampDemo, { LampContainer } from './ui/lamp';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-visible">
      
      {/* Main content sections */}
      <div className="text-white p-10 text-xl z-20">
        <h2 className="font-bold bg-[#7B181D] uppercase inline-block p-1">
          Unleash the power of innovation in the icy depths of
        </h2>
        <br />
        <h2 className="font-bold bg-[#7B181D] uppercase inline-block mt-1 p-1">
          HackVerse, where the Arctic meets technology
        </h2>
      </div>

      <div className="text-white z-20 p-10 w-[60%]">
        <p className="text-lg font-semibold">
          Join us at HackVerse, a platform that celebrates the power of
          enthusiastic minds to ideate innovative solutions for complex issues across India.
          It all started with a vision to bring together like-minded hackers to our alma mater
          in NITK Surathkal, and we're thrilled to be the pioneers of this unique initiative.
        </p>
        <br />
        <p className="text-lg font-semibold">
          Be a part of an experience that celebrates innovation and provides developers with the
          opportunity to showcase their potential to the fullest. Get inspired by industry leaders
          through engaging keynotes and workshops.
        </p>
      </div>

      {/* LampContainer is positioned absolutely to cover both divs */}
      <div className="absolute top-0 right-0 w-full z-10 bg-slate-950 overflow-hidden">
        <LampContainer className="translate-x-[25%] relative" />
        
        <motion.h1
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className="absolute top-10 right-10 z-10"
        >
          <img
            src="/hackverse-img.png"
            alt="HackVerse"
            className="w-[531px] top-0 right-0 z-0"
          />
          <motion.div
          initial={{ scaleX: 0.2 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
          className="absolute -z-10 h-36 w-96 bottom-32 right-[15%] bg-red-400 blur-3xl opacity-50"
        />
        </motion.h1>
        

      </div>
    </div>
  );
}

export default About;
