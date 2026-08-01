import React from "react";
import Services from "../stores/Services";

const Service = () => {
  return (
    <section
      id="services"
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="
        w-full 
        py-16 sm:py-20 md:py-24 
        flex 
        flex-col 
        items-center
      "
      itemScope
      itemType="https://schema.org/ItemList"
    >

      <div className="text-center mb-16 px-5">

        <span
          className="
            inline-block
            mb-4
            px-4
            py-1.5
            rounded-full
            bg-blue-100
            text-blue-600
            text-sm
            font-semibold
          "
        >
          My Services
        </span>


        <h1
          className="
            text-3xl
            md:text-4xl
            font-extrabold
            text-gray-900
          "
          itemProp="name"
        >
          What I Can Help With
        </h1>


        <p
          className="
            mt-4
            text-sm
            md:text-base
            text-gray-600
            max-w-2xl
            mx-auto
            leading-relaxed
          "
          itemProp="description"
        >
          I build modern web applications and digital experiences using
          React, MERN stack technologies, and clean development practices.
        </p>

      </div>



      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4 sm:gap-6 lg:gap-8
          w-full
          max-w-7xl
          px-4 sm:px-6
        "
      >

        {Services.map((service, index) => {

          const Icon = service.icon;

          return (

            <article
              key={index}
              className="
                group
                relative
                bg-white
                rounded-3xl
                p-8
                text-center
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                overflow-hidden
              "
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />


              <div
                className="
                  relative
                  mx-auto
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  text-white
                  mb-7
                  shadow-lg
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-500
                "
              >

                <Icon
                  className="
                    w-8
                    h-8
                  "
                />

              </div>



              <div className="relative">


                <h2
                  className="
                    text-lg
                    font-bold
                    text-gray-900
                    mb-4
                    group-hover:text-blue-600
                    transition-colors
                  "
                  itemProp="name"
                >
                  {service.title}
                </h2>


                <p
                  className="
                    text-sm
                    text-gray-600
                    leading-relaxed
                  "
                  itemProp="description"
                >
                  {service.description}
                </p>


              </div>


            </article>

          );

        })}

      </div>


      <div className="mt-14">

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            px-8
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
          Let's Work Together →
        </a>

      </div>


    </section>
  );
};

export default Service;