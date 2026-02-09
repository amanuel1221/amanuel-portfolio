import React, { useState } from "react";
import ProjectsInfo from "../stores/ProjectsInfo";

const Projects = () => {
  const count = 4;
  const countadd = 2;

  const [visibleCount, setVisibleCount] = useState(count);

  const handleNext = () => {
    setVisibleCount((prev) =>
      Math.min(prev + countadd, ProjectsInfo.length)
    );
  };

  const handlePrev = () => {
    setVisibleCount((prev) =>
      Math.max(count, prev - countadd)
    );
  };

  const visibleProjects = ProjectsInfo.slice(0, visibleCount);

  return (
    <section
      id="projects"
      style={{ backgroundColor: "var(--secondary-blue)" }}
      className="py-20 px-6 md:px-16 lg:px-24"
    >
      {/* Header */}
      <div className="text-center mb-14 relative">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Featured Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and experience
        </p>

        {visibleCount < ProjectsInfo.length && (
  <button
    onClick={handleNext}
    className="
    hidden
    md:block
      mt-4
      md:mt-0
      md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
      text-sm font-medium text-blue-600 hover:underline hover:cursor-pointer
    "
  >
    View More
  </button>
)}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:transition-all ease-in-out duration-300 "
            />

            <div className="p-6 flex flex-col flex-1 text-center">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {project.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-center gap-3 md:gap-8 w-full">
                <button className="md:w-35">
                <a
                  href={project.livedemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 md:gap-4 text-sm bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
                >
                  🔗 Live Demo
                </a>
                </button>
<button className="md:w-35">
                <a
                  href={project.githubdemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-gray-100 transition hover:cursor-pointer"
                >
                  🐙 GitHub
                </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center gap-4 mt-14">
        <button
          onClick={handlePrev}
          disabled={visibleCount === count}
          className="px-4 py-2 text-sm rounded-md border disabled:opacity-40"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={visibleCount >= ProjectsInfo.length}
          className="px-4 py-2 text-sm rounded-md border disabled:opacity-40"
        >
          Next
        </button>
      </div>
      <div className="justify-center items-center text-center" >
        {visibleCount < ProjectsInfo.length && (
  <button
    onClick={handleNext}
    className="
    
    md:hidden
      mt-4
      md:mt-0
      text-center justify-center align-center hover:cursor-pointer
      
    
    "
  >
    View More
  </button>
)}
      </div>
    </section>
  );
};

export default Projects;
