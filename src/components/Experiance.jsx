import React, { useState } from "react";
import EduExperiance from "../stores/EduExperiance";
import ProjectExperiance from "../stores/ProjectExperiance";

const EducationalExperience = () => {
  const [activeCert, setActiveCert] = useState(null);

  const toggleCertificate = (index) => {
    setActiveCert(activeCert === index ? null : index);
  };

  return (
    <section id="experiance" className="py-16 bg-gray-100 w-full">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Educational Experience
        </h1>
        <p className="text-center text-gray-600">
          My educational journey and certifications
        </p>
      </div>

     
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Educational Experience</h2>

        <div className="flex flex-col gap-6">
          {EduExperiance.map((edu, index) => {
            const hasCertificate = edu.image !== "none";
            const isOpen = activeCert === index;

            return (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 overflow-hidden"
              >
               
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{edu.title}</h3>
                    <p className="text-sm text-gray-500">{edu.note}</p>
                  </div>

                  {hasCertificate && (
                    <button
                      onClick={() => toggleCertificate(index)}
                      className="text-xs font-medium text-blue-500 hover:text-blue-700 transition hover:cursor-pointer"
                    >
                      {isOpen ? "Back to details" : edu.status}
                    </button>
                  )}
                </div>

              
                <div
                  className={`transition-all duration-500 ease-in-out  ${
                    isOpen
                      ? "opacity-0 scale-95 max-h-0 overflow-hidden"
                      : "opacity-100 scale-100 max-h-[500px] mt-4"
                  }`}
                >
                  <p className="text-sm text-gray-500">{edu.date}</p>
                  <p className="text-sm text-blue-500">{edu.place}</p>

                  <ul className="list-disc list-inside mt-3 text-sm text-gray-700">
                    {edu.descriptions.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              
                {hasCertificate && (
                  <div
                    className={`transition-all duration-500 ease-in-out flex justify-center ${
                      isOpen
                        ? "opacity-100 scale-100 max-h-96 mt-6"
                        : "opacity-0 scale-95 max-h-0 overflow-hidden"
                    }`}
                  >
                    <img
                      src={edu.image}
                      alt={edu.title}
                      className="max-w-full max-h-64 rounded-md shadow-lg border"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>


      <div className="px-6 md:px-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Project Experience</h2>

        <div className="flex flex-col gap-6">
          {ProjectExperiance.map((project, index) => {
            const hasCertificate = project.image !== "none";
            const isOpen = activeCert === index;

            return (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 overflow-hidden"
              >
               
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  {hasCertificate && (
                    <button
                      onClick={() => toggleCertificate(index)}
                      className="text-xs font-medium text-blue-500 hover:text-blue-700 transition hover:cursor-pointer"
                    >
                      {isOpen ? "Back to details" : project.status}
                    </button>
                  )}
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "opacity-0 scale-95 max-h-0 overflow-hidden"
                      : "opacity-100 scale-100 max-h-[500px] mt-4"
                  }`}
                >
                  <p className="text-sm text-gray-500">{project.date}</p>
                  <p className="text-sm text-blue-500">{project.place}</p>

                  <ul className="list-disc list-inside mt-3 text-sm text-gray-700">
                    {project.descriptions.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {hasCertificate && (
                  <div
                    className={`transition-all duration-500 ease-in-out flex justify-center ${
                      isOpen
                        ? "opacity-100 scale-100 max-h-96 mt-6"
                        : "opacity-0 scale-95 max-h-0 overflow-hidden"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-64 rounded-md shadow-lg border"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationalExperience;
