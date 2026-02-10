import React from "react";
import Offer from "../stores/Offer";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-8 m-0"
    >
      <div
        style={{ backgroundColor: "var(--secondary-blue)" }}
        className="w-full flex flex-col items-center p-4 md:p-10 "
      >
        <div className="w-content mt-20 mb-10 ">
          <button
            style={{ backgroundColor: "var(--tertiary-blue)" }}
            className="w-30 h-10 flex justify-center items-center mb-5 text-blue-700 font-bold md:text-2xl rounded-xl"
          >
            About Me
          </button>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base">
            <li>Software Engineering student at Bahir Dar University.</li>
            <li>
              Frontend-focused with React, component-based UI, and routing
            </li>
            <li>Hackathon experience building MVPs under tight deadlines</li>
            <li>Continuous learner (ALX, FreeCodeCamp, self-study)</li>
          </ul>
        </div>
        <div className="mt-10 mb-10 justify-center items-center text-center">
          <p>
            I’m a frontend developer focused on building clean, responsive web
            interfaces using React.
          </p>
          <p>
            I enjoy turning designs into functional websites and improving
            existing UIs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10   mt-5 p-5">
          <ul className="flex flex-col lg:flex-row gap-8  justify-center items-center">
            {Offer.map((offer, index) => (
              <li
                key={index}
                className="flex flex-col items-center bg-white gap-4   md:w-120 md:h-65 lg:w-90 lg:65 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-5 pb-20"
              >
                <img
                  src={offer.icon}
                  alt={offer.title}
                  style={{ backgroundColor: "var(--tertiary-blue)" }}
                  className="w-12 h-12 mb-1 rounded-full mt-4"
                />
                <h3 className="font-bold text-lg text-center">{offer.title}</h3>
                <p className="text-sm md:text-md text-center mb-6">
                  {offer.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
