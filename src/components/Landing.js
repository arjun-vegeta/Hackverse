// src/components/Landing.js
import React from 'react';

const Landing = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen w-screen bg-[#360E10] text-white flex overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 relative">
        {/* SVG positioned on the left */}
        <svg
          className="absolute left-0 top-0 h-full"
          width="858"
          height="526"
          viewBox="0 0 858 526"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        {/* Main Heading and Subheading */}
        <div className="p-20">
          <h1 className="text-9xl font-extrabold">NITK</h1>
          <p className="mt-6 text-3xl font-light tracking-wide">
            24 HOUR LONG HACKATHON
          </p>
          <p className="mt-4 text-5xl font-bold">HACKERVERSE 5.0</p>
          <p className="mt-8 text-lg">HEIST COMING SOON . . .</p>

          {/* Vertical Menu with Red Line */}
          <div className="absolute bottom-10 left-10 flex items-start space-x-4">
            <div className="w-1 h-full bg-red-600"></div>
            <div className="flex flex-col space-y-6 text-xl font-semibold">
              {['HOME', 'ABOUT', 'PRIZES', 'JUDGES & SPEAKERS', 'TRACKS', 'TIMELINE', 'SPONSORS'].map((item) => (
                <button
                  key={item}
                  className="hover:underline cursor-pointer"
                  onClick={() => handleScroll(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="h-full w-full">
          <img
            src="/landingimage.png"
            alt="Landing"
            className="h-full object-cover"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
            <button className="px-6 py-2 bg-[#360E10] text-white rounded-md">
              DEVFOLIO POST
            </button>
            <button className="px-6 py-2 border border-[#360E10] text-[#360E10] rounded-md">
              NITK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
