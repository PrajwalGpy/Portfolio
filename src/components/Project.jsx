import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-3xl border border-stone-50/30  "
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h3 className="mb-2 text-xl">{project.name}</h3>
                  <p className="mb-5 p-4">{project.description}</p>
                  <div className="hidden md:flex gap-3">
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                    >
                      <div className="flex items-center">
                        <span>Live Demo</span>
                        <MdArrowOutward />
                      </div>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                    >
                      <div className="flex items-center">
                        <span>View on GitHub</span>
                        <MdArrowOutward />
                      </div>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className=" md:hidden flex  gap-3  z-50  bottom-10 left-6 flex-col justify-center items-center ">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.5 }}
                  className="p-4"
                >
                  <h3 className="mb-2 text-xl">{project.name}</h3>
                  <p className="mb-2 ">{project.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.5 }}
                  className="flex gap-3"
                >
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span>Live Demo</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span>View on GitHub</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
