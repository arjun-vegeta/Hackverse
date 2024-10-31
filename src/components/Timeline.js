import React from "react";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";

// BackgroundText component as defined earlier
// const BackgroundText = React.memo(() => {
//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden flex flex-col text-transparent opacity-40">
//       {Array.from({ length: 15 }).map((_, index) => (
//         <motion.div
//           key={index}
//           className="text-[96px] whitespace-nowrap font-black tracking-widest"
//           style={{ 
//             WebkitTextStroke: "1px red",
//             // Randomized translateX for each line within the range of -150px to 150px
//             transform: `translateX(${Math.floor(Math.random() * 4000 - 1500)}px)`,
//           }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 0.6, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
//         >
//           timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
//         </motion.div>
//       ))}
//     </div>
//   );
// });

const BackgroundText = React.memo(() => {
    return (
      <div className="absolute inset-0 w-[150%] h-full overflow-hidden flex flex-col text-transparent opacity-40 -translate-x-36 ">
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
        >
          &nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          &nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          &nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
        >
          &nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          &nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.65 }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
        <motion.div
          className="text-[96px] whitespace-nowrap font-black tracking-widest"
          style={{ WebkitTextStroke: "1px red" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          &nbsp;&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline&nbsp;&nbsp;timeline
        </motion.div>
      </div>
    );
  });

BackgroundText.displayName = 'BackgroundText';

export function TimelineDemo() {
  const data = [
    {
      title: "08:30 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Participants Check-In & LHCC
          </p>
        </div>
      ),
    },
    {
      title: "09:00 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-sm md:text-xl font-normal mb-4">
            Opening Ceremony 2 LHCC
          </p>
          <ul className="list-disc text-white ml-5">
            <li>Introduction by MC followed by NITK anthem</li>
            <li>Shlok Bhosale & Meetali Srivastava, Student Organizers, Hackverse 4.0</li>
            <li>Welcome Address & HackVerse Report - Achintya Kumar, Lead Organizer, Hackverse 4.0</li>
            <li>About Hackverse - Suryansh Goyal, Lead Organizer, Hackverse 4.0</li>
            <li>Inaugural Address - Prof. SM Kulkarni, Director in-charge, NITK</li>
            <li>Inaugural Address by Chief Guest</li>
            <li>Presidential Address - Prof. Narendranath S, Dean of Student Welfare, NITK</li>
            <li>Vote of Thanks - Achintya Kumar, Lead Organizer, Hackverse 4.0</li>
          </ul>
        </div>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Introduction to ONDC for developers (Open Network for Digital Commerce) - Anup Pai (45 mins)
          </p>
        </div>
      ),
    },
    {
      title: "11:45 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Introduction to Zolve & LHC C
          </p>
        </div>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Coding Begins 2 CIDS
          </p>
        </div>
      ),
    },
    {
      title: "03:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Talk: Impact of AI and creativity challenges next generation developers face - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "05:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Networking Session - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "06:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Devfolio Talk: What makes a winning hackathon project? - Aniket Raj, Denver D'souza, and Anish Dhaman
          </p>
        </div>
      ),
    },
    {
      title: "07:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Talk: How to build on Solana 101 - Ujjwal Gupta (online)
          </p>
        </div>
      ),
    },
    {
      title: "11:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Midnight Evaluation (1 Hour) & CIDS
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* Add the BackgroundText component here */}
      <BackgroundText />
      
      <Timeline data={data} />
    </section>
  );
}

