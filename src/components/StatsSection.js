import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function StatsSection() {
  const testimonials = Array.from({ length: 6 }).map((_, index) => ({
    image: `/testimonials/testimonial-${index + 1}.webp`,
  }));

  // Refs and inView hooks for each section
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef);

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-black text-white">
{/* Repeating Background Text */}
<motion.div
  className="absolute inset-0 w-full h-full overflow-hidden flex flex-col text-transparent opacity-75"
  initial="hidden"
  animate="visible"
  transition={{ staggerChildren: 0.05 }}
>
  {Array.from({ length: 15 }).map((_, index) => (
    <motion.div
      key={index}
      className="text-[96px] whitespace-nowrap font-bold tracking-widest stroke-red-500"
      style={{ WebkitTextStroke: "1px red" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 0.6,
        y: 0,
        x: index % 4 === 0 ? -100 : index % 4 === 1 ? -40 : index % 4 === 2 ? 60 : 140, 
      }}
      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
    >
      highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights&nbsp;&nbsp;highlights
    </motion.div>
  ))}
</motion.div>

      {/* Title */}
      <motion.h1
        ref={titleRef}
        className="text-center text-4xl md:text-5xl font-extrabold py-5 z-10 mt-10"
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <span>HackVerse 4.0 </span>
        <span className="text-red-500">Highlights</span>
      </motion.h1>

      {/* Infinite Moving Cards */}
      <motion.div
        ref={cardsRef}
        className="flex-grow flex items-center justify-center w-full z-10"
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <InfiniteMovingCards items={testimonials} />
      </motion.div>

      {/* Stats */}
      <motion.div
        ref={statsRef}
        className="w-full flex flex-col md:flex-row justify-around py-8 text-center space-y-8 md:space-y-0 md:space-x-10 z-10 mb-10"
        initial="hidden"
        animate={isStatsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {[
          { number: "1500+", label: "Total Registrations" },
          { number: "400+", label: "Hackers Hosted" },
          { number: "140+", label: "Engineering Institutes" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.1 + index * 0.2, duration: 0.5, ease: "easeOut" } },
            }}
          >
            <h1 className="text-4xl font-bold">{stat.number}</h1>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
