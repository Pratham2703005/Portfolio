/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CoolMode from '../ui/CoolMode';
import MagicCard from '../ui/MagicCard'; // Assuming MagicCard is in the same folder as CoolMode

const ProjectCard = ({ image, title, description, liveLink, repoLink, techStack }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screens are 768px or less
    };
    
    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Add event listener to resize window
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const charLimit = isMobile ? 150 : 300; // Adjust char limit based on screen size

  return (
    <MagicCard
      gradientSize={250}  // Customize the gradient size if needed
      gradientColor="#262626"
      gradientOpacity={0.8}
      gradientFrom="#3b82f6"
      gradientTo="#3b82f6"
      className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-[1.01] relative"
    >
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Black tint at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-5 left-4 flex gap-2">
          {techStack.map((tech, index) => (
            <div key={index}>
              <CoolMode>
                <img
                  src={tech}
                  alt={`tech-${index}`}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain mr-2 sm:mr-4 hover:scale-110 transition-all"
                />
              </CoolMode>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack and Links */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{title}</h3>
        
        {/* Description with Read More/Read Less */}
        <p className="text-gray-300 mb-4">
          {isExpanded ? description : `${description.substring(0, charLimit)}...`}
          <span
            onClick={handleToggleDescription}
            className="text-blue-500  hover:text-blue-400 ml-2"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
        </p>
        
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectCard;
