import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="BMI Calculator"
          main="This is a blogging website created in React.js using component Tailwind CSS."
        />
        <ProjectCard
          title="My Profile"
          main="This is a portfolio built using react.js with styled components."
        />
        <ProjectCard
          title="Amazon Clone"
          main="A Amazon clone created using HTML and CSS."
        />
      </div>
    </div>
  );
};

export default Project;
