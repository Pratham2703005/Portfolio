import { IconCloud } from "../ui/IconCloud"; // Adjust path as necessary
import { motion } from 'framer-motion';
import { HyperText } from "../ui/HyperText";
import { Link } from "react-router";
import { useEffect } from "react";
import CoolMode from "../ui/CoolMode";
import SkillsCard from "../ui/SkillsCard";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
    className: "border-cyan-300"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java"],
    className: "border-purple-200"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase"],
    className: "border-purple-200"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman"],
    className: "border-cyan-300"
  }
];

const Skills = () => {
  useEffect(()=>{
      document.title = "Pratham's Portfolio - skills";
    },[])
  return (
    <div className="min-h-screen text-white py-32  px-4 sm:px-6 lg:px-8 w-full z-[49] select-none">
      <h2 className="block md:hidden text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 uppercase">
        Tech Stack
      </h2>
      <div className="w-full flex flex-col lg:flex-row gap-10">
        
        {/* Left - Cloud Icon */}
        <div className="lg:w-2/5 mb-8 lg:mb-0 flex justify-center">
          <IconCloud maxSpeed={0.04} minSpeed={0.02 / 2} />
        </div>

        {/* Right - Skill Categories */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 px-4 md:px-8 lg:px-10">
          
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={`hover:scale-105 hover:shadow-2xl transition-all duration-300 transform ${category.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
            <SkillsCard>

              <HyperText className="text-[1.75rem] font-extrabold mb-4 text-blue-400 transition-all duration-300 hover:text-blue-500">
                {category.title}
              </HyperText>
              <div className="flex flex-wrap gap-2 ">
                {category.skills.map((skill, skillIndex) => (
                  <CoolMode key={skillIndex}>
                    <motion.span
                      className="px-4 py-2 bg-cyan-600 text-gray-100 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                      {skill}
                    </motion.span>
                  </CoolMode>
                ))}
              </div>
            </SkillsCard>
            </motion.div>



))}

          {/* Problem Solving Card - DSA (C++) */}
          <motion.div 
            className=" hover:scale-105 hover:shadow-2xl transition-all duration-300 col-span-1 md:col-span-2  transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SkillsCard>

            <HyperText className="text-[1.75rem] font-semibold mb-4 text-blue-400 transition-all duration-300 hover:text-blue-500">
              Problem Solving - DSA (C++)
            </HyperText>
            <p className="text-gray-300 text-lg mb-4" style={{ userSelect: "none" }}>
              Passionate about solving complex problems using C++ in Data Structures and Algorithms (DSA). Continuously enhancing my skills through competitive coding platforms and algorithmic challenges.
            </p>

            <div className="mt-6 flex gap-6 justify-start flex-wrap">
              <Link to="https://leetcode.com/u/Pratham012/" target="_blank">
                
                <motion.button 
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  >
                  Progress on LeetCode
                </motion.button>
              </Link>
              <Link to="https://www.geeksforgeeks.org/user/pk2732004/" target="_blank">
                <motion.button 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  >
                  Progress on GFG
                </motion.button>
              </Link>
            </div>

            </SkillsCard>
          </motion.div>


        </div>
      </div>
    </div>
  );
}

export default Skills;
