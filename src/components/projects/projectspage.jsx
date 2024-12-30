import { useEffect } from "react";
import ProjectCard from "./projectcard";

const Projects = () => {
    useEffect(()=>{
        document.title = "Pratham's Portfolio - projects";
      },[])
  const projects = [
    
    {
      image: "/project/prithview.png",
      title: "PrithView",
      description:
        "This project is a web application designed to perform semantic segmentation on satellite imagery. Using React and Tailwind CSS for the front-end, it integrates Google Earth Engine for image retrieval and Leaflet for mapping and displaying segmented features. I created API endpoints to process the segmentation and enable users to export results in GeoJSON and KML formats for further analysis. Additionally, I utilized React Joyride to build interactive guided tours, ensuring a smooth and responsive user experience across devices.",
      repoLink: "https://github.com/Pratham2703005/Semantic-Segmentation-SIH",
      liveLink: "https://semantic-segmentation-sih.vercel.app/",
      techStack: ["/skills/React.svg", "/skills/tail.svg", "/skills/python.svg", "/skills/mui.svg", "/skills/js.svg", "/skills/firebase.svg"],
    },
    {
      image: "/project/pklimate.png",
      title: "Weather App- Pklimate",
      description:
        "Developed a responsive weather forecast application that provides real-time data on temperature, humidity, and weather conditions using public APIs. Focused on delivering a modern UI/UX, optimizing performance, and ensuring a smooth user experience across devices. The app offers an intuitive interface with accurate and up-to-date weather information, making it easy for users to stay informed about the weather conditions.",
      liveLink: "https://p-klimate-app.vercel.app/",
      repoLink: "https://github.com/Pratham2703005/PKlimate-App",
      techStack: ["/skills/React.svg", "/skills/tail.svg", "/skills/TypeScript.svg","/skills/mui.svg"],
    },
    {
      image: "/project/mines.png",
      title: "Stakes- Mines Game",
      description:
        "Created an interactive Mines game inspired by Stake’s Mines game using modern web technologies like React.js, ensuring a smooth and engaging user experience. Developed dynamic game logic to uncover tiles, avoid bombs, and provide real-time feedback, promoting user interaction and strategic gameplay. Focused on optimizing performance and SEO by implementing metadata, Open Graph, and structured data for improved visibility and accessibility, ensuring the game is easily discoverable and accessible to a wider audience.",
      liveLink: "https://mines-game-9tcp.vercel.app/",
      repoLink: "https://github.com/Pratham2703005/Mines-Game",
      techStack: ["/skills/React.svg", "/skills/tail.svg", "/skills/mui.svg"],
    },
    {
        image: "/project/sudoku.png",
        title: "Sudoku",
        description:
          "Developed a dynamic Sudoku game using HTML, CSS, and JavaScript, featuring a light/dark mode toggle for improved user experience. Added a timer to track gameplay time and challenge users to beat previous records. Integrated a difficulty selection option, allowing users to customize the level of challenge before starting the game. Focused on delivering an engaging, user-friendly experience with a clean, responsive design.",
        liveLink: "https://pratham2703005.github.io/Sudoku/",
        repoLink: "https://github.com/Pratham2703005/Sudoku",
        techStack: ["/skills/html.svg", "/skills/css.svg", "/skills/js.svg"],
      },
      {
        image: "/project/snake.png",
        title: "Snake Game",
        description:
          "Created a responsive and interactive Snake game with a window frame effect, enhancing user engagement. The game tracks the best score and current score, offering a fun experience. Users can challenge themselves to beat previous records while enjoying a smooth and engaging gameplay interface.",
        liveLink: "https://pratham2703005.github.io/Snake-Game/",
        repoLink: "https://github.com/Pratham2703005/Snake-Game",
        techStack: ["/skills/html.svg", "/skills/css.svg", "/skills/js.svg"],
      },
      {
        image: "/project/memory.png",
        title: "Memory Game",
        description:
          "Developed a memory game using React and Tailwind CSS, offering an interactive and visually appealing experience. The game challenges users to match pairs of cards, enhancing cognitive skills and memory. The responsive design ensures a smooth gameplay experience across devices, while Tailwind's utility-first approach made the styling process efficient and customizable.",
        liveLink: "https://memory-game-three-jade.vercel.app/",
        repoLink: "https://github.com/Pratham2703005/Memory-Game",
        techStack: ["/skills/React.svg", "/skills/tail.svg"],
      },
  ];

  return (
    <section className="text-white px-6 md:px-20 py-40 z-10 select-none" id="projects">
      <h2 className="uppercase block md:hidden text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            techStack={project.techStack} // Pass tech stack here
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
