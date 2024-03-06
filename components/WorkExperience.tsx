import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
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
      className="flex flex-col relative overflow-hidden h-screen text-center md:text-left 
    md:flex-row mx-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute lg:top-20 md:top-18 sm:top-10 uppercase text-gray-300 md:tracking-[20px] sm:tracking-[15px] md:text-2xl sm:text-xl ">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-500 mt-16"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
