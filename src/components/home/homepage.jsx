import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Popup from "../Popup";
import AnimatedShinyText from "../ui/AnimatedShinyText";
import CoolMode from "../ui/CoolMode";
import GlitchButton from "../ui/GlitchButton";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Pratham's Portfolio - Home";
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setShow(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {show && <Popup show={show} setShow={setShow} />}
      <div className="w-full min-h-screen flex items-center overflow-hidden h-100vh z-10 select-none">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl w-full mx-auto sm:mx-0 space-y-8 sm:space-y-10">
            {/* Hero section */}
            <CoolMode>
              <div className="space-y-3 text-center sm:text-left">
                <h1 className="text-4xl sm:text-6xl md:text-5xl font-extrabold text-white tracking-tight 
                            animate-fade-in-up [text-wrap:balance]">
                  Pratham Israni
                </h1>
                
                {/* Type animation with fixed height to prevent layout shift */}
                <div className="h-16 sm:h-14 flex items-center justify-center sm:justify-start">
                  <TypeAnimation
                    sequence={[
                      "Programmer.",
                      2000,
                      "Frontend Developer.",
                      2000,
                      "Competitive Programmer.",
                      2000,
                      "Problem Solver.",
                      2000,
                      "UI/UX Designer.",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light"
                    repeat={Infinity}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 
                            animate-fade-in-up animation-delay-300 leading-relaxed">
                  Explore my journey through code and creativity. 
                  Building experiences that make a difference.
                </p>

                {/* CTA Button */}
                
                <GlitchButton 

                      className="max-w-full inline-flex items-center whitespace-nowrap px-auto md:px-4 py-3 text-sm sm:text-base
                                  bg-white/10 hover:bg-white/15 backdrop-blur-sm 
                                  text-white rounded-lg border border-white/10
                                  transition-all duration-300 group
                                  mx-auto sm:mx-0 animate-fade-in-up animation-delay-600
                                  hover:shadow-lg hover:shadow-purple-500/10 z-10"
                      onClick={() => setShow(true)}
                      >
                      <AnimatedShinyText>
                          <div className="flex items-center space-x-2 text-white/70">
                          <span>Press</span>
                          <kbd className="px-2 py-1 bg-white/70 rounded text-sm">Ctrl</kbd>
                          <span>+</span>
                          <kbd className="px-2 py-1 bg-white/70 rounded text-sm">K</kbd>
                          <span>to Start</span>
                          <svg 
                              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                          >
                              <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" 
                              />
                          </svg>
                          </div>
                      </AnimatedShinyText>
                  </GlitchButton>
              </div>
            </CoolMode>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;