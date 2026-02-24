import React from "react";
import Stacks from "../stores/Stacks";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ backgroundColor: "var(--secondary-blue)" }}
      className="w-full py-24 flex flex-col items-center"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <div className="text-center mb-14 px-4">
        <h1 className="font-bold text-2xl md:text-3xl"itemProp="name">Tech Stack</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-4"itemProp="description">
          Tools and technologies I use to build modern, responsive web
          applications.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {Stacks.map((stack, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 h-auto"
          itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ItemList">
          
            <h2 className="text-lg font-semibold mb-6"itemProp="name">{stack.title}</h2>

          
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              {stack.stacks.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[40px_1fr] items-center gap-3 justify-center"
                itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/Thing">
                 
                  {item.icon && (
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                      <img
                      itemProp="image"
                      loading="lazy"
                        src={item.icon}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  )}

                  
                  <p className="text-sm font-medium text-gray-700 text-left"itemProp="name">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

           
            {stack.note && (
              <p className="text-xs text-gray-500 mt-4 italic"itemProp="description">{stack.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
