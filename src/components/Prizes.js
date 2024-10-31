import React, { useState, useEffect, useRef } from 'react';

const StickyScrollSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (sectionRef.current && containerRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const isWithinSection = sectionRect.top <= 0 && sectionRect.bottom >= viewportHeight;
        setIsSticky(isWithinSection);

        if (isWithinSection && !ticking) {
          window.requestAnimationFrame(() => {
            const scrollProgress = 1 - (sectionRect.bottom / sectionRect.height);
            const newRotation = Math.min(Math.max(scrollProgress * 360, 0), 360);
            setRotation(newRotation);
            ticking = false;
          });
          ticking = true;
        } else if (!isWithinSection) {
          setRotation(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex h-[320vh] bg-black text-white relative">
      <div ref={containerRef} className={`w-1/3 flex items-center justify-center h-screen ${isSticky ? 'fixed top-1/2 -translate-y-1/2 left-0' : 'absolute top-0 left-0'} transition-all duration-300 ease-out`}>
        {/* Bottom layer: Rotating SVG */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[95%] h-[95%] transition-transform duration-100 ease-linear" style={{ transform: `rotate(${rotation}deg)` }}>
            <circle cx="602" cy="602" r="448" stroke="white" strokeWidth="8"/>
            <circle cx="601.5" cy="602.5" r="370.5" stroke="white" strokeWidth="8"/>
            <circle cx="601.5" cy="602.5" r="343.5" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="293" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="274" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="151" stroke="white" strokeWidth="4"/>
            <circle cx="601.5" cy="602.5" r="126.5" stroke="white" strokeWidth="4"/>
            <circle cx="601.5" cy="602.5" r="114.5" stroke="white" strokeWidth="4"/>
            <circle cx="601.5" cy="602.5" r="50.5" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="58" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="26" stroke="white" strokeWidth="4"/>
            <circle cx="602" cy="602" r="18" stroke="white" strokeWidth="4"/>
            <rect x="609" y="591" width="441" height="24" fill="black" stroke="white" strokeWidth="6"/>
            <path d="M587.598 603.015L367.098 221.098L387.883 209.098L608.383 591.015L587.598 603.015Z" fill="black" stroke="white" strokeWidth="6"/>
            <path d="M610.383 615.098L389.883 997.015L369.098 985.015L589.598 603.098L610.383 615.098Z" fill="black" stroke="white" strokeWidth="6"/>
          </svg>
        </div>
        
        {/* Top layer: Static SVG */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[95%] h-[95%]">
            <rect x="0.5" y="0.5" width="1199" height="1199"/>
            <path d="M413.267 600V696C413.267 771.5 342.206 767 342.206 767H103V866.5H119.014H259.635C259.635 866.5 259.635 958 363.724 958C467.814 958 684 958 684 958V804.5H607.434C530.868 804.5 530.868 728 530.868 728V600H413.267Z" fill="black" stroke="white" strokeWidth="7"/>
            <path d="M413.5 599V503C413.5 427.5 342.5 432 342.5 432H103.5V332.5H119.5H260C260 332.5 260 241 364 241C468 241 684 241 684 241V394.5H607.5C531 394.5 531 471 531 471V599H413.5Z" fill="black" stroke="white" strokeWidth="7"/>
            <rect x="30" y="122" width="86" height="955" fill="black" stroke="white" strokeWidth="8"/>
            <rect x="16" y="122" width="116" height="210" fill="black" stroke="white" strokeWidth="8"/>
            <rect x="16" y="867" width="116" height="210" fill="black" stroke="white" strokeWidth="8"/>
            <path d="M664 278.5C664 286.018 658.118 292 651 292C643.882 292 638 286.018 638 278.5C638 270.982 643.882 265 651 265C658.118 265 664 270.982 664 278.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="651" cy="279" r="2" stroke="white" strokeWidth="4"/>
            <path d="M584 278.5C584 286.018 578.118 292 571 292C563.882 292 558 286.018 558 278.5C558 270.982 563.882 265 571 265C578.118 265 584 270.982 584 278.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="571" cy="279" r="2" stroke="white" strokeWidth="4"/>
            <path d="M664 360.5C664 368.018 658.118 374 651 374C643.882 374 638 368.018 638 360.5C638 352.982 643.882 347 651 347C658.118 347 664 352.982 664 360.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="651" cy="361" r="2" stroke="white" strokeWidth="4"/>
            <path d="M584 360.5C584 368.018 578.118 374 571 374C563.882 374 558 368.018 558 360.5C558 352.982 563.882 347 571 347C578.118 347 584 352.982 584 360.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="571" cy="361" r="2" stroke="white" strokeWidth="4"/>
            <path d="M664 836.5C664 844.018 658.118 850 651 850C643.882 850 638 844.018 638 836.5C638 828.982 643.882 823 651 823C658.118 823 664 828.982 664 836.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="651" cy="837" r="2" stroke="white" strokeWidth="4"/>
            <path d="M584 836.5C584 844.018 578.118 850 571 850C563.882 850 558 844.018 558 836.5C558 828.982 563.882 823 571 823C578.118 823 584 828.982 584 836.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="571" cy="837" r="2" stroke="white" strokeWidth="4"/>
            <path d="M664 774.5C664 782.018 658.118 788 651 788C643.882 788 638 782.018 638 774.5C638 767.018 643.882 762 651 762C658.118 762 664 767.018 664 774.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="651" cy="775" r="2" stroke="white" strokeWidth="4"/>
            <path d="M584 774.5C584 782.018 578.118 788 571 788C563.882 788 558 782.018 558 774.5C558 767.018 563.882 762 571 762C578.118 762 584 767.018 584 774.5Z" stroke="white" strokeWidth="4"/>
            <circle cx="571" cy="775" r="2" stroke="white" strokeWidth="4"/>
          </svg>
        </div>
      </div>

      <div className="w-2/3 ml-auto px-8 py-16">
  <div className="h-screen flex flex-col justify-center space-y-4 pr-20 text-right">
    <h2 className="text-5xl font-bold">Prizes</h2>
    <p className="text-xl">
      FIRST<br />
      RUNNER UP<br />
      SECOND RUNNER UP
    </p>
  </div>
  <div className="h-screen flex flex-col justify-center space-y-4 pr-20 text-right">
    <h2 className="text-5xl font-bold">Special Prizes</h2>
    <p className="text-xl">
      This is the description for the second section. More content to scroll through.
    </p>
  </div>
  <div className="h-screen flex flex-col justify-center space-y-4 pr-20  text-right">
    <h2 className="text-5xl font-bold">Participation Prize</h2>
    <p className="text-xl">
      This is the description for the third section. Keep adding as much text as needed.
    </p>
  </div>
</div>
    </div>
  );
};

export default StickyScrollSection;
