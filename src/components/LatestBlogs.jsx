import React from "react";
import Blogs from "../stores/Blogs";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";


const LatestBlogs = () => {
  return (
    <section
      id="blogs"
      className="
        w-full
        py-24
        bg-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6
        "
      >


        <div className="text-center mb-14">

          <span
            className="
              inline-block
              px-4
              py-1.5
              rounded-full
              bg-blue-100
              text-blue-600
              text-sm
              font-semibold
            "
          >
            Latest Articles
          </span>


          <h2
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
            "
          >
            From My Blog
          </h2>


          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-gray-600
              leading-relaxed
            "
          >
            Sharing my experiences building projects, learning modern
            technologies, and improving as a software engineer.
          </p>

        </div>




        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4 sm:gap-8
          "
        >

          {Blogs.map((blog, index) => (

            <article
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >



              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
              >

                <div
                  className="
                    h-52
                    overflow-hidden
                    bg-gray-100
                  "
                >

                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                </div>

              </a>




=
              <div className="p-6">


                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    line-clamp-2
                    group-hover:text-blue-600
                    transition-colors
                  "
                >
                  {blog.title}
                </h3>



                <p
                  className="
                    mt-3
                    text-sm
                    text-gray-600
                    leading-relaxed
                    line-clamp-3
                  "
                >
                  {blog.excerpt}
                </p>





                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-5
                    text-sm
                    text-gray-500
                  "
                >

                  <FaUserCircle
                    className="
                      text-gray-400
                    "
                  />

                  <span>{blog.author}</span>

                  <span>•</span>

                  <span>{blog.date}</span>

                  <span>•</span>

                  <span>{blog.readTime}</span>

                </div>





                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-blue-600
                    font-semibold
                    text-sm
                    hover:gap-3
                    transition-all
                  "
                >

                  Read Article

                  <FaArrowRight />

                </a>


              </div>


            </article>

          ))}


        </div>




        <div
          className="
            flex
            justify-center
            mt-14
          "
        >

          <a
            href="https://aman-blog-seven.vercel.app/blogs"
            target="_blank"
            rel="noopener noreferrer"

            className="
              inline-flex
              items-center
              gap-3
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

            View All Blogs

            <FaArrowRight />

          </a>

        </div>


      </div>

    </section>
  );
};


export default LatestBlogs;