// src/components/Landing.js
import React from 'react';

const Landing = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen relative flex">
      {/* Left Section */}
      <div className="w-[60%] flex items-center justify-end flex-col relative bg-[#481516]">
        {/* SVG positioned on the left */}
        <div className="absolute bottom-0 left-0 w-full -z-0">
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
              stroke-width="26"
            />
            <line
              x1="492.269"
              y1="546.109"
              x2="-88.731"
              y2="319.109"
              stroke="#DADADA"
              stroke-width="26"
            />
            <path d="M858 59L478 243V587H858V59Z" fill="#360E10" />
          </svg>
        </div>


        {/* Main Heading and Subheading */}
        {/* <div className=""> */}

          {/* Vertical Menu with Red Line */}
          {/* <div className="absolute bottom-0 right-10 flex items-start space-x-4">
            <div className="h-full bg-red-600"></div>
            <div className="flex flex-col text-xl font-semibold">
              {['HOME', 'ABOUT', 'PRIZES', 'JUDGES & SPEAKERS', 'TRACKS', 'TIMELINE', 'SPONSORS'].map((item) => (
                <button
                  key={item}
                  className="hover:underline text-right cursor-pointer mb-3"
                  // onClick={() => handleScroll(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div> */}
        {/* </div> */}

        <div className='absolute left-[100px] top-0 text-[#dadada] ml-0 mt-10'>
          <p className='font-bold'>HEIST COMING SOON...</p>
        </div>

        <div className='w-full absolute top-[20%] lg:top-[30%] z-0 flex justify-center'>
          <img src='svgs/text.svg' alt="" className='w-[75%] object-cover'/>
        </div>


        <div className="flex flex-col items-end text-xl font-bold w-full mr-20 relative">
          {['HOME', 'ABOUT', 'PRIZES', 'JUDGES & SPEAKERS', 'TRACKS', 'TIMELINE', 'SPONSORS'].map((item) => (
            <button
              key={item}
              className="hover:underline cursor-pointer mb-3 text-[#dadada]"
              // onClick={() => handleScroll(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="w-[40%] flex items-center justify-end bg-[#dadada]">
        <div className="w-[80%] mb-20">
          <img
            src="/landingimage.png"
            alt="Landing"
            className="h-full object-cover"
          />
          <div className="mt-5 space-x-5">
            <button className="px-8 py-2 rounded-md bg-[#360E10] font-bold text-[#dadada] tracking-widest uppercase transform hover:scale-105 transition-colors duration-200 border-2 border-[#360E10] border-solid">
              DEVFOLIO post
            </button>
            <button className="px-8 py-2 rounded-md bg-[#dadada] font-bold text-[#360E10] tracking-widest uppercase transform hover:scale-105 transition-colors duration-200 border-2 border-[#360E10] border-solid">
              NITK
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;