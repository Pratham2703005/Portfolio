import { useEffect } from "react"
import Achievement from "./achievement"

const Achievements = () => {
  useEffect(() => {
    document.title = "Pratham's Portfolio - Achievements"
  }, [])

  const achievements = [
    {
      title: "SIH 2024 Finalist",
      description: `Being a part of <span class="font-semibold text-blue-300">Smart India Hackathon 2024</span> as one of the top 48 teams out of 1200+ teams was a rewarding experience. Our team worked on <span class="font-semibold text-blue-300">ISRO's problem statement</span>, focusing on semantic segmentation of satellite imagery to identify features like urban areas and forests.<br><br>Though we didn't win, the journey provided immense learning, growth, and collaboration with talented individuals and mentors. It strengthened my technical abilities and taught me the value of <span class="font-semibold text-blue-300">teamwork</span> and <span class="font-semibold text-blue-300">perseverance</span>.`,
      image: "/img/sih.jpg",
      links: ["https://www.linkedin.com/feed/update/urn:li:activity:7278911940347752448/"],
      linktexts: ["View Journey"],
      galleryImages: [
        "/img/sih.jpg",
        "/img/sih1.jpg",
      ]
    },
    {
      title: "War of Codes Technical Fest - Gold Medalist",
      description: `Achieved the <span class="font-semibold text-blue-300">Gold Medal</span> at the prestigious <span class="font-semibold text-blue-300">War of Codes</span> technical fest hosted by FET Agra College. This competition provided an incredible platform to showcase my coding skills and compete with some of the brightest minds in the tech community.<br><br>The experience enriched my problem-solving abilities, enhanced my competitive edge, and motivated me to push my boundaries further. Grateful to the organizers, mentors, and participants for making this event an unforgettable milestone in my tech journey.`,
      image: "/img/codewars.jpg",
      links: ["https://www.linkedin.com/posts/pratham-israni-a6b672275_warofcodes-codingcompetition-goldmedalist-activity-7201857357700554752-JWrB?utm_source=social_share_send&utm_medium=member_desktop_web"],
      linktexts: ["View Linkedin Post"],
      reverse: true,
      galleryImages: [
        "/img/codewars.jpg"
      ]
    },
    {
      title: "HackerRank Certifications",
      description: `I'm thrilled to have earned certifications in <span class="font-semibold text-blue-300">JavaScript (Basic)</span>, <span class="font-semibold text-blue-300">Problem Solving</span>, and <span class="font-semibold text-blue-300">Frontend Development with React</span> from HackerRank. These certifications highlight my solid grasp of JavaScript fundamentals, problem-solving abilities, and expertise in creating interactive front-end applications with React. They not only validate my technical skills but also emphasize my dedication to continuous growth and learning in the field of programming.`,
      image: "/img/rc.png",
      links: ["https://www.hackerrank.com/certificates/iframe/13148a670d27","https://www.hackerrank.com/certificates/iframe/9e4584e46e53","https://www.hackerrank.com/certificates/iframe/b9157c3f6d35"],
      linktexts: ["Problem Solving Certification","JavaScript Certification","React Certification"],
      galleryImages: [
        "/img/rc.png",
        "/img/ps.png",
        "/img/js.png",
      ]
    },
    {
      title: "LeetCode Achievements",
      description: `With a commitment to problem-solving, I've completed over 600 questions and maintained a <span class="font-semibold text-blue-300">250+ day streak</span> on LeetCode. My consistent performance earned me a top rank of <span class="font-semibold text-blue-300">1783 / 38868</span> in <span class="font-semibold text-blue-300">Biweekly Contest 134</span> and a solid standing of <span class="font-semibold text-blue-300">2007 / 33382</span> in <span class="font-semibold text-blue-300">Weekly Contest 413</span>. This journey has strengthened my grasp of algorithms, data structures, and competitive coding.`,
      image: "/img/200days.gif",
      links: ["https://leetcode.com/u/Pratham012/"],
      linktexts: ["View Profile"],
      reverse: true,
      galleryImages: []
    }
  ]

  return (
    <section className="text-white md:px-20 w-full md:w-[90%] md:mx-auto py-32 md:py-40 z-20 select-none">
      <h2 className="uppercase block md:hidden text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        Achievements and Certificates
      </h2>

      {achievements.map((achievement, index) => (
        <Achievement key={index} {...achievement} />
      ))}
    </section>
  )
}

export default Achievements

