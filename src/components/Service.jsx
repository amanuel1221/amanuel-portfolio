
import React from "react";
import Services from "../stores/Services";

const Service = () => {
  return (
    <section
      id="services"
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="w-full flex flex-col items-center py-16 sm:py-20 md:py-24"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Section heading */}
      <div className="mb-12 sm:mb-16 px-5 text-center">
        <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
          My Services
        </span>

        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          itemProp="name"
        >
          What I Can Help With
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base"
          itemProp="description"
        >
          I build modern web applications and digital experiences using
          React, MERN stack technologies, and clean development practices.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-4">
        {Services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title || index}
              className="
                group
                rounded-2xl
                border border-gray-200/80
                bg-white
                p-6 sm:p-7
                text-left
                shadow-sm
                transition-colors duration-200
                hover:border-blue-200
                hover:shadow-md
              "
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Icon */}
              <div
                className="
                  mb-5 flex h-12 w-12 items-center justify-center
                  rounded-xl bg-blue-50 text-blue-600
                  transition-colors duration-200
                  group-hover:bg-blue-100
                "
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="mb-3 text-lg font-semibold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-blue-700"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-7 text-gray-600"
                  itemProp="description"
                >
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 sm:mt-14">
        <a
          href="#contact"
          className="
            inline-flex items-center gap-2
            rounded-lg bg-blue-600 px-6 py-3
            font-semibold text-white
            transition-colors duration-200
            hover:bg-blue-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
          "
        >
          Let's Work Together
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Service;
