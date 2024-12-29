/* eslint-disable react/prop-types */
// import { motion } from "framer-motion";
import CoolMode from '../ui/CoolMode'
import  MagicCard  from '../ui/MagicCard' // Assuming MagicCard is in the same folder as CoolMode

const ProjectCard = ({ image, title, description, liveLink, repoLink, techStack }) => {
  return (
    <MagicCard
      gradientSize={250}  // Customize the gradient size if needed
      gradientColor="#262626"
      gradientOpacity={0.8}
      gradientFrom="#3b82f6"
      gradientTo=" #3b82f6"
      className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-[1.01] relative"
    >
      <div className="relative">
  <div className="aspect-w-16 aspect-h-9">
    <img
      src={image}
      alt={title} // Ensure `title` is defined as a string
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
            alt={`tech-${index}`} // Properly closed attribute
            className="w-8 h-8 object-contain mr-4 hover:scale-110 transition-all"
          />
        </CoolMode>
      </div>
    ))}
  </div>
</div>




      {/* Tech Stack and Links */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
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
