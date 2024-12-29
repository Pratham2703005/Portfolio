/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Cloud } from "react-icon-cloud";
import { cn } from "../ui/cn";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1, // Reduce this to make icons smaller
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const icons = [
  { name: "TypeScript", src: "/skills/TypeScript.svg" },
  { name: "JavaScript", src: "/skills/js.svg" },
  { name: "React", src: "/skills/React.svg" },
  { name: "C++", src: "/skills/cpp.svg" },
  { name: "Java", src: "/skills/Java.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "HTML", src: "/skills/html.svg" },
  { name: "MaterialUI", src: "/skills/mui.svg" },
  { name: "MongoDB", src: "/skills/mongo.svg" },
  { name: "Node", src: "/skills/Node.js.svg" },
  { name: "Postman", src: "/skills/Postman.svg" },
  { name: "Redux", src: "/skills/redux.svg" },
  { name: "Tailwind", src: "/skills/tail.svg" },
  { name: "Github", src: "/skills/github.svg" },
  { name: "VSCode", src: "/skills/vs.svg" },
  { name: "Git", src: "/skills/git.svg" },
  { name: "Firebase", src: "/skills/firebase.svg" },
];

export function IconCloud({ className, maxSpeed = 0.04, minSpeed = 0.02 }) {
  const renderedIcons = useMemo(
    () =>
      icons.map((icon, index) => (
        <a key={index}>
          <img
            src={icon.src}
            alt={icon.name}
            style={{ width: "50px", height: "50px" }} // Adjusted size for preview
          />
        </a>
      )),
    []
  );

  const customProps = {
    ...cloudProps,
    options: { ...cloudProps.options, maxSpeed, minSpeed },
  };

  return (
    <Cloud
      {...customProps}
      className={cn("custom-cloud-container", className)}
    >
      {renderedIcons}
    </Cloud>
  );
}
