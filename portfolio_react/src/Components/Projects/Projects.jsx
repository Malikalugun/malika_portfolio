import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard
          title="Blogging Website"
          main="A blogging website built with Next.js, featuring a modern UI and component libraries for enhanced user experience."
        />
        <ProjectCard
          title="YouTube Clone"
          main="A YouTube-like platform built using Next.js, providing video playback, user authentication, and search functionality."
        />
        <ProjectCard
          title="Netflix Clone"
          main="A Netflix-inspired streaming platform, utilizing Next.js for UI components and seamless content browsing."
        />
      </div>
    </div>
  );
};

export default Projects;
