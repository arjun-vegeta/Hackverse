"use client";
import React, { useRef } from "react";
import { LampDemo } from "./ui/lamp";
import { motion, useInView } from "framer-motion";

export default function About() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { triggerOnce: false });

  const textRef1 = useRef(null);
  const isText1InView = useInView(textRef1, { triggerOnce: false });

  const textRef2 = useRef(null);
  const isText2InView = useInView(textRef2, { triggerOnce: false });

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { triggerOnce: false });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-12 overflow-hidden">
      {/* Left Section */}
      <div className="relative z-10 w-full md:w-3/5 flex flex-col justify-center space-y-20 text-white mb-8 md:mb-0">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center md:text-left text-[#9B1B21]"
        >
          Unleash the power of innovation in the vaults of HackVerse, where the heist meets technology
        </motion.h1>
        <motion.p
          ref={textRef1}
          initial="hidden"
          animate={isText1InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left px-2 sm:px-6 md:px-0"
        >
Join us at HackVerse, a platform that celebrates the power of enthusiastic minds to ideate innovative solutions for complex issues across India. It all started with a vision to bring together like-minded hackers to our alma mater in NITK Surathkal, and we're thrilled to be the pioneers of this unique initiative.
        </motion.p>
        <motion.p
          ref={textRef2}
          initial="hidden"
          animate={isText2InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          className="text-base pt-4 sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left px-2 sm:px-6 md:px-0"
        >
Be a part of an experience that celebrates innovation and provides developers with the opportunity to showcase their potential to the fullest. Get inspired by industry leaders through engaging keynotes and workshops.
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-2/5 flex items-center justify-center mt-8 md:mt-0">
        {/* Bottom Layer: Lamp */}
        <div className="absolute inset-0 flex items-center justify-center z-0" style={{ transform: 'translateY(-44px)' }}>
          <LampDemo />
        </div>

        {/* Top Layer: Image */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="relative flex items-center justify-center z-10"
          style={{ transform: 'translateY(40px)' }}
        >
          <img
            src="hackverse-img.png" // Replace with the correct image path
            alt="Lamp Demo"
            className="w-32 sm:w-48 md:w-auto h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
