import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Landing = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const landingRef = useRef(null);
  const isLandingInView = useInView(landingRef, { triggerOnce: false });

  return (
    <motion.div
      ref={landingRef}
      initial="hidden"
      animate={isLandingInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="w-full h-screen relative flex"
    >
      {/* Left Section */}
      <motion.div
        className="w-[60%] flex items-center justify-end flex-col relative bg-[#481516]"
      >
        {/* SVG positioned on the left */}
        <motion.div
          className="absolute bottom-0 left-0 w-full -z-0"
          initial={{ opacity: 0 }}
          animate={isLandingInView ? { opacity: 1, transition: { delay: 0.5, duration: 1.2 } } : { opacity: 0 }}
        >
          <svg
            className="w-full h-auto"
            viewBox="0 0 768 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <path d="M0 0L478 243V587H0V0Z" fill="#2B0B0C" />
            <line
              x1="277.782"
              y1="567.036"
              x2="-94.2184"
              y2="94.0364"
              stroke="#DADADA"
              strokeWidth="26"
            />
            <line
              x1="492.269"
              y1="546.109"
              x2="-88.731"
              y2="319.109"
              stroke="#DADADA"
              strokeWidth="26"
            />
            <path d="M858 59L478 243V587H858V59Z" fill="#360E10" />
          </svg>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="absolute left-[100px] top-0 text-[#dadada] ml-0 mt-10"
          variants={fadeIn}
        >
          <p className="font-bold">HEIST COMING SOON...</p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="w-full absolute top-[20%] lg:top-[30%] z-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLandingInView ? { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 1 } } : { opacity: 0, scale: 0.9 }}
        >
          <img src="svgs/text.svg" alt="" className="w-[75%] object-cover" />
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          className="flex flex-col items-end text-xl font-bold w-full mr-20 relative"
          variants={fadeIn}
        >
          {['HOME', 'ABOUT', 'PRIZES', 'JUDGES & SPEAKERS', 'TRACKS', 'TIMELINE', 'SPONSORS'].map((item) => (
            <button
              key={item}
              className="hover:underline cursor-pointer mb-3 text-[#dadada]"
              onClick={() => handleScroll(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="w-[40%] flex items-center justify-end bg-black"
        variants={fadeIn}
      >
        <div className="w-[80%] mb-20">
          <motion.img
            src="/landingimage.png"
            alt="Landing"
            className="h-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLandingInView ? { opacity: 1, scale: 1, transition: { duration: 3 } } : { opacity: 0, scale: 0.95 }}
          />
          <motion.div className="mt-5 space-x-5" variants={fadeIn}>
            <button className="px-8 py-2 rounded-md bg-[#360E10] font-bold text-[#dadada] tracking-widest uppercase transform hover:scale-105 transition-colors duration-200 border-2 border-[#360E10] border-solid">
              DEVFOLIO post
            </button>
            <button className="px-8 py-2 rounded-md bg-[#dadada] font-bold text-[#360E10] tracking-widest uppercase transform hover:scale-105 transition-colors duration-200 border-2 border-[#360E10] border-solid">
              NITK
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;