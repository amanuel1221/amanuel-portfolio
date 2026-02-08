import React from "react";
import Services from "../stores/Services";

const Service = () => {
  return (
    <section
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="w-full py-24 flex flex-col items-center"
    >
   
      <div className="text-center mb-14 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          What I Can Help With
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Turn your ideas into reality with clean, modern, and scalable frontend
          solutions.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-6">
        {Services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 h-full"
          >
            
            <div
              style={{ backgroundColor: "var(--primary-blue)" }}
              className="w-10 h-10 flex items-center justify-center rounded-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              <img src={service.icon} alt={service.title} className="w-8 h-8" />
            </div>

           
            <h2 className="text-lg font-semibold mb-3">{service.title}</h2>

           
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
