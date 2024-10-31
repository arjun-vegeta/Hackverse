import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "08:30 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Participants Check-In & LHCC
          </p>
        </div>
      ),
    },
    {
      title: "09:00 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
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
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Introduction to ONDC for developers (Open Network for Digital Commerce) - Anup Pai (45 mins)
          </p>
        </div>
      ),
    },
    {
      title: "11:45 AM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Introduction to Zolve & LHC C
          </p>
        </div>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Coding Begins 2 CIDS
          </p>
        </div>
      ),
    },
    {
      title: "03:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Talk: Impact of AI and creativity challenges next generation developers face - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "05:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Networking Session - Rakesh Ravuri
          </p>
        </div>
      ),
    },
    {
      title: "06:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Devfolio Talk: What makes a winning hackathon project? - Aniket Raj, Denver D'souza, and Anish Dhaman
          </p>
        </div>
      ),
    },
    {
      title: "07:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Talk: How to build on Solana 101 - Ujjwal Gupta (online)
          </p>
        </div>
      ),
    },
    {
      title: "11:00 PM",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Midnight Evaluation (1 Hour) & CIDS
          </p>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
