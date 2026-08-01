import React from "react";
import Offer from "../stores/Offer";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-8 m-0 overflow-x-hidden"
    aria-labelledby="about-heading" >
      <div
        style={{ backgroundColor: "var(--secondary-blue)" }}
        className="w-full flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10"
      >
        <div className="w-content mt-20 mb-10 ">
          <button
            style={{ backgroundColor: "var(--tertiary-blue)" }}
            className="w-28 sm:w-30 h-10 flex justify-center items-center mb-5 text-blue-700 font-bold md:text-2xl rounded-xl"
          >
            About Me
          </button>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base max-w-2xl" itemProp="knowsAbout" >
            <li itemProp="knowsAbout" >Software Engineering student at Bahir Dar University.</li>
            <li itemProp="knowsAbout" >
              Frontend-focused with React, component-based UI, and routing
            </li>
            <li itemProp="knowsAbout" >Hackathon experience building MVPs under tight deadlines</li>
            <li itemProp="knowsAbout" >Continuous learner (ALX, FreeCodeCamp, self-study)</li>
          </ul>
        </div>
        <div className="mt-10 mb-10 justify-center items-center text-center px-4 sm:px-6">
          <p>
            I’m a frontend developer focused on building clean, responsive web
            interfaces using React.
          </p>
          <p>
            I enjoy turning designs into functional websites and improving
            existing UIs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-10 mt-5 p-2 sm:p-5 w-full"
          itemProp="hasOfferCatalog"
          itemScope 
          itemType="https://schema.org/OfferCatalog">
          <ul className="flex flex-col lg:flex-row gap-4 sm:gap-8 justify-center items-stretch w-full">
            {Offer.map((offer, index) => (
              <li
                key={index}
                className="flex flex-col items-center bg-white gap-3 w-full max-w-sm md:max-w-none rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-5 pb-12"
              itemProp="itemListElement"
              itemType="https://schema.org/Offer">
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
