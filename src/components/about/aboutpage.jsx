/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import TypingEffect from 'react-typing-effect';
import Education from './educationSection';
import CrazyButton from '../ui/CrazyButton'; // Import your CrazyButton component
import CoolMode from '../ui/CoolMode';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHyperTextVisible, setIsHyperTextVisible] = useState(false);
  const hyperTextRef = useRef(null);
  

  useEffect(() => {
    setIsVisible(true);
    document.title = "Pratham's Portfolio - About";

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHyperTextVisible(entry.isIntersecting);
      },
      { threshold: 0.00001 }
    );

    if (hyperTextRef.current) {
      observer.observe(hyperTextRef.current);
    }

    return () => {
      if (hyperTextRef.current) {
        observer.unobserve(hyperTextRef.current);
      }
    };
  }, []);

  return (
    <section className="py-32 md:py-32 text-white h-full w-full overflow-hidden relative select-none">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            className={`w-full md:w-1/3 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="relative aspect-square rounded-full overflow-hidden">
              <img
                src="/profile1.jpg?height=400&width=400"
                alt="Pratham Israni"
                className="rounded-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-transparent opacity-20"></div>
            </div>
          </div>
          <div
            className={`w-full md:w-2/3 space-y-6 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <CoolMode>

            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              <TypingEffect
                text="Hello, I'm Pratham Israni"
                speed={50}
                eraseSpeed={1000}
                typingDelay={500}
                eraseDelay={20000000}
                />
            </h2>
                </CoolMode>
            <p className="text-lg leading-relaxed">
              As a passionate <span className="font-semibold text-cyan-300">Software Developer</span> and{' '}
              <span className="font-semibold text-blue-300">Competitive Programmer</span>, I thrive on solving
              challenging problems and building innovative solutions. With a strong focus on clean, efficient code, I
              love diving into new technologies and improving my skills through continuous learning.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it's tackling algorithmic challenges, developing dynamic web applications, or exploring new tech
              stacks, I'm always eager to take on new projects. I believe in pushing boundaries and constantly evolving,
              both as a programmer and as an individual.
            </p>
            <p className="text-lg font-semibold italic">
              Take a look at my portfolio to explore my projects and the skills I've acquired along the way. 🚀
            </p>

            {/* Resume Buttons */}
            <div className="mt-8">
              <CrazyButton href="/resume.pdf" width="auto" download>
                View My Resume
              </CrazyButton>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <Education isHyperTextVisible={isHyperTextVisible} hyperTextRef={hyperTextRef} />
      </div>
    </section>
  );
};

export default About;
