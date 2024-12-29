/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import CoolMode from "../ui/CoolMode"
import { HyperText } from "../ui/HyperText"
const Education = ({isHyperTextVisible, hyperTextRef}) => {
  return (
    <div className="mt-20 space-y-16 w-[80%] mx-auto select-none">
      <CoolMode>

      <h3 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 text-center">
        Education
      </h3>
      </CoolMode>
      {/* College Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <img
            src="/img/college.jpeg"
            alt="College"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300  w-full"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <CoolMode>

          <h3 className="inline text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">College</h3>
          </CoolMode>
          <p className="text-lg leading-relaxed">
            I am currently pursuing my <span className="font-semibold text-blue-300">Bachelor's in Computer Science</span>  at FET Agra College. I am focused on gaining
            deep knowledge of computer science principles, algorithms, and software development.
          </p>
          {isHyperTextVisible && (
            <p className="text-lg font-semibold">
              Current CGPA:{" "}
              <HyperText className={"text-cyan-300 text-xl inline"}>7.325</HyperText>
            </p>
          )}
        </div>
      </div>

      {/* School Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12" ref={hyperTextRef}>
        <div className="w-full md:w-2/3 space-y-4 select-none">
          <CoolMode>
            <h3 className="inline text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">School</h3>
          </CoolMode>
          <p className="text-lg leading-relaxed">
            I completed my schooling at St. Queen Mary's Public School, where I pursued the <span className="font-semibold text-blue-300">PCM stream</span>. I was actively involved in extracurricular activities and developed a passion for technology and programming during this time.
          </p>
          {isHyperTextVisible && (
            <>
              <p className="text-lg font-semibold">
                12th Grade (PCM): {" "}
                <HyperText className={"text-cyan-300 text-xl inline"}>85%</HyperText>
              </p>
              <p className="text-lg font-semibold">
                10th Grade:{" "}
                <HyperText className={"text-cyan-300 text-xl inline"}>72.3%</HyperText>
              </p>
              
            </>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="/img/school.jpg"
            alt="School"
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300  w-full"
          />
        </div>
      </div>

    </div>
  )
}

export default Education
