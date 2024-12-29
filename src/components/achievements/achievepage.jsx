/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Modal from "./modal";
import CrazyButton from "../ui/CrazyButton";
import CoolMode from "../ui/CoolMode";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(()=>{
    document.title = "Pratham's Portfolio - Achievements";
  },[])

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="text-white px-6 md:px-20 w-full md:w-[90%] md:mx-auto py-32 md:py-40 z-20 select-none">
      <h2 className="uppercase block md:hidden text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        Achievements and Certificates
      </h2>

      <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg mb-12 hover:shadow-2xl transition-shadow">
  <img
    src="/img/sih.jpg"
    alt="SIH 2024 Finalist"
    className="w-full md:w-1/3 h-[18rem] object-cover rounded-lg mb-6 md:mb-0 md:mr-6 cursor-pointer transform hover:scale-105 transition-transform"
    onClick={() => setSelectedImage("/img/sih.jpg")}
  />
  <div className="md:w-2/3">
   <CoolMode>

    <h3 className="text-3xl font-semibold text-cyan-400 mb-3 hover:text-cyan-500 transition-colors">
      SIH 2024 Finalist
    </h3>
   </CoolMode>
    <p className="text-gray-200 text-lg mb-6">
      Being a part of <span className="font-semibold text-blue-300">Smart India Hackathon 2024</span> as one of the top 48 teams out of 1200+ teams was a rewarding experience. Our team worked on <span className="font-semibold text-blue-300">ISRO’s problem statement</span>, focusing on semantic segmentation of satellite imagery to identify features like urban areas and forests.
    </p>
    <p className="text-gray-200 text-lg mb-6">
      Though we didn’t win, the journey provided immense learning, growth, and collaboration with talented individuals and mentors. It strengthened my technical abilities and taught me the value of <span className="font-semibold text-blue-300">teamwork</span> and <span className="font-semibold text-blue-300">perseverance</span>.
    </p>
      <CrazyButton href="https://www.linkedin.com/feed/update/urn:li:activity:7278911940347752448/">
      View Journey
      </CrazyButton>
  </div>
</div>


      {/* Achievement 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center p-6 rounded-lg shadow-lg mb-12 hover:shadow-2xl transition-shadow"
      >
        <img
          src="/img/codewars.jpg"
          alt="Code Wars Winner"
          className="w-full md:w-1/3 h-[18rem] object-cover rounded-lg mb-6 md:mb-0 md:ml-6 cursor-pointer transform hover:scale-105 transition-transform"
          onClick={() => setSelectedImage("/img/codewars.jpg")}
        />
        <div className="md:w-2/3">
          <CoolMode>

          <h3 className="text-3xl font-semibold text-cyan-400 mb-3 hover:text-cyan-500 transition-colors">
          War of Codes Technical Fest - Gold Medalist
          </h3>
          </CoolMode>
          <p className="text-gray-200 text-lg mb-6">
            Achieved the <span className="font-semibold text-blue-300">Gold Medal</span> at the prestigious <span className="font-semibold text-blue-300">War of Codes</span> technical fest hosted by FET Agra College. This competition provided an incredible platform to showcase my coding skills and compete with some of the brightest minds in the tech community.
          </p>
          <p className="text-gray-200 text-lg mb-6">
            The experience enriched my problem-solving abilities, enhanced my competitive edge, and motivated me to push my boundaries further. Grateful to the organizers, mentors, and participants for making this event an unforgettable milestone in my tech journey.
          </p>

            <CrazyButton href="https://www.linkedin.com/posts/pratham-israni-a6b672275_warofcodes-codingcompetition-goldmedalist-activity-7201857357700554752-JWrB?utm_source=social_share_send&utm_medium=member_desktop_web">
            
            View Linkedin Post
            </CrazyButton>
        </div>
      </div>

      {/* Achievement 3 */}
      <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg mb-12 hover:shadow-2xl transition-shadow"
      >
        <img
          src="/img/hacker.png"
          alt="HackerRank Certifications"
          className="w-full md:w-1/3 h-[18rem] object-cover rounded-lg mb-6 md:mb-0 md:mr-6 cursor-pointer transform hover:scale-105 transition-transform"
          onClick={() => setSelectedImage("/img/hacker.png")}
        />
        <div className="md:w-2/3">
          <CoolMode>

          <h3 className="text-3xl font-semibold text-cyan-400 mb-3 hover:text-cyan-500 transition-colors">
            HackerRank Certifications
          </h3>
          </CoolMode>
          <p className="text-gray-200 text-lg mb-6">
            I’m thrilled to have earned certifications in <span className="font-semibold text-blue-300">JavaScript (Basic)</span>, <span className="font-semibold text-blue-300">Problem Solving</span>, and <span className="font-semibold text-blue-300">Frontend Development with React</span> from HackerRank. These certifications highlight my solid grasp of JavaScript fundamentals, problem-solving abilities, and expertise in creating interactive front-end applications with React. They not only validate my technical skills but also emphasize my dedication to continuous growth and learning in the field of programming.
          </p>
          <div className="flex flex-wrap gap-2 ">
            <CrazyButton 
              href="https://www.hackerrank.com/certificates/iframe/13148a670d27" 
              className="!w-full md:!w-auto"
            >
              JavaScript Certification
            </CrazyButton>

            <CrazyButton 
              href="https://www.hackerrank.com/certificates/iframe/9e4584e46e53" 
              className="!w-full md:!w-auto"
            >
              Problem Solving Certification
            </CrazyButton>

            <CrazyButton 
              href="https://www.hackerrank.com/certificates/iframe/b9157c3f6d35" 
              className="!w-full md:!w-auto"
            >
              Frontend Developer - React Certification
            </CrazyButton>
          </div>

        </div>
      </div>

      {/* Achievement 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center p-6 rounded-lg mb-12 ">
        <div className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:ml-6">
          <img
            src="/img/200days.gif"
            alt="LeetCode Achievements"
            className="cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => setSelectedImage("/img/200days.gif")}
          />
        </div>
        <div className="md:w-2/3">
          <CoolMode>

          <h3 className="inline text-3xl font-semibold text-cyan-400 mb-3 hover:text-cyan-500 transition-colors">
            LeetCode Achievements
          </h3>
          </CoolMode>
          <p className="text-gray-200 text-lg mb-6">
            With a commitment to problem-solving, I’ve completed over 600 questions and maintained a <span className="font-semibold text-blue-300">250+ day streak</span> on LeetCode. My consistent performance earned me a top rank of <span className="font-semibold text-blue-300">1783 / 38868</span> in <span className="font-semibold text-blue-300">Biweekly Contest 134</span> and a solid standing of <span className="font-semibold text-blue-300">2007 / 33382</span> in <span className="font-semibold text-blue-300">Weekly Contest 413</span>. This journey has strengthened my grasp of algorithms, data structures, and competitive coding.
          </p>
          <CrazyButton href="https://leetcode.com/u/Pratham012/">
          
            View Profile
          </CrazyButton>
        </div>
      </div>


      {/* Modal */}
      {selectedImage && (
       <Modal selectedImage ={selectedImage} closeModal={closeModal}/>
      )}
    </section>
  );
};

export default Achievements;