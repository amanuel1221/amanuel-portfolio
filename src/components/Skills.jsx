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
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
          My Technologies
        </span>

        <h1
          className="font-extrabold text-3xl md:text-4xl text-gray-900"
          itemProp="name"
        >
          Tech Stack
        </h1>

        <p
          className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed"
          itemProp="description"
        >
          Technologies and tools I use to build scalable, responsive, and
          modern web applications with clean code and great user experience.
        </p>
      </div>


      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-5">

        {Stacks.map((stack, index) => (
          <article
            key={index}
            className="
              group
              bg-white
              rounded-3xl
              p-8
              border
              border-gray-100
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ItemList"
          >

            {/* Card Title */}
            <div className="flex items-center justify-between mb-8">

              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                  group-hover:text-blue-600
                  transition-colors
                "
                itemProp="name"
              >
                {stack.title}
              </h2>


              <span
                className="
                  text-xs
                  font-semibold
                  px-3
                  py-1
                  rounded-full
                  bg-gray-100
                  text-gray-500
                "
              >
                {stack.stacks.length} Skills
              </span>

            </div>


            {/* Skills List */}
            <div className="space-y-4">

              {stack.stacks.map((item, i) => (

                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                    hover:bg-gray-50
                    transition-all
                    duration-300
                  "
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Thing"
                >


                  {/* Icon */}
                  <div
                    className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-gray-100
                      group-hover:bg-blue-50
                      transition-all
                      duration-300
                      shadow-sm
                    "
                  >

                    {item.icon && (
                      <item.icon
                        className="
                          w-6
                          h-6
                          text-gray-700
                          group-hover:text-blue-600
                          group-hover:scale-125
                          transition-all
                          duration-300
                        "
                      />
                    )}

                  </div>


                  {/* Skill Name */}
                  <div>

                    <p
                      className="
                        text-sm
                        md:text-base
                        font-semibold
                        text-gray-800
                      "
                      itemProp="name"
                    >
                      {item.name}
                    </p>

                    <span className="text-xs text-gray-500">
                      Technology
                    </span>

                  </div>


                </div>

              ))}

            </div>


            {/* Description */}
            {stack.note && (

              <div
                className="
                  mt-8
                  pt-5
                  border-t
                  border-gray-100
                "
              >

                <p
                  className="
                    text-sm
                    text-gray-500
                    italic
                    leading-relaxed
                  "
                  itemProp="description"
                >
                  {stack.note}
                </p>

              </div>

            )}


          </article>
        ))}

      </div>


      {/* Bottom CTA */}
      <div className="mt-14">

        <a
          href="#projects"
          className="
            inline-flex
            items-center
            gap-2
            px-7
            py-3
            rounded-full
            bg-blue-600
            text-white
            font-semibold
            shadow-lg
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
          "
        >
          View My Projects →
        </a>

      </div>


    </section>
  );
};

export default Skills;