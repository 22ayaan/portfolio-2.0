/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import React from "react";
import { keyframes } from "styled-components";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div
      className="relative flex flex-col overflow-hidden text-left md:flex-row max-w-full 
    mx-auto justify-evenly items-center z-0 h-screen"
    >
      <h3 className="absolute top-16 uppercase text-gray-300 tracking-[20px] text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x bottom-2
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-500"
      >
        {projects?.map((project, i) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          justify-center items-center p-20 md:pd-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project?.image).url()}
              alt="project image"
              className="w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] mt-14"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <motion.h4
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
                className="lg:text-3xl md:text-xl sm:text-xl font-semibold text-center"
              >
                <span className="underline decoration-slate-100/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </motion.h4>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
                className="flex items-center space-x-6 justify-center"
              >
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 200,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
                className="xl:text-lg md:text-xl text-center md:text-left"
              >
                {project?.summary}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] left-0 h-[600px] bg-slate-400/15 -skew-y-12" />
    </div>
  );
}

export default Projects;
