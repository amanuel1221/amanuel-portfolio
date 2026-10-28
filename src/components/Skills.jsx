import React from "react";
import Stacks from "../stores/Stacks";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ backgroundColor: "var(--secondary-blue)" }}
      className="flex w-full flex-col items-center py-20 sm:py-24"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="mb-12 max-w-2xl px-5 text-center sm:mb-14">
        <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
          My Technologies
        </span>

        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          itemProp="name"
        >
          Tech Stack
        </h2>

        <p
          className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base"
          itemProp="description"
        >
          Technologies and tools I use to build responsive, reliable, and
          maintainable web applications with a focus on performance and user
          experience.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-5 md:grid-cols-2 md:gap-7">
        {Stacks.map((stack) => (
          <article
            key={stack.title}
            className="
              rounded-2xl border border-gray-200/80 bg-white
              p-5 shadow-sm
              transition-colors duration-200
              hover:border-blue-200 hover:shadow-md
              sm:p-7
            "
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <h3
                className="text-lg font-bold text-gray-900 sm:text-xl"
                itemProp="name"
              >
                {stack.title}
              </h3>

              <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {stack.stacks.length} Skills
              </span>
            </div>

            <div className="space-y-2">
              {stack.stacks.map((item) => (
                <div
                  key={item.name}
                  className="
                    flex items-center gap-3 rounded-xl
                    px-3 py-3
                    transition-colors duration-200
                    hover:bg-blue-50/60
                  "
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Thing"
                >
                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-lg bg-gray-100 text-gray-700
                      transition-colors duration-200
                      group-hover:bg-blue-50
                    "
                  >
                    {item.icon && (
                      <item.icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-sm font-semibold leading-6 text-gray-800 sm:text-base"
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

            {stack.note && (
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p
                  className="text-sm leading-6 text-gray-600"
                  itemProp="description"
                >
                  {stack.note}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 px-5 sm:mt-14">
        <a
          href="#projects"
          className="
            inline-flex items-center justify-center gap-2
            rounded-full bg-blue-600 px-6 py-3
            text-sm font-semibold text-white
            shadow-sm transition-colors duration-200
            hover:bg-blue-700
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-600 focus-visible:ring-offset-2
          "
        >
          View My Projects
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Skills;