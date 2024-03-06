import { motion } from "framer-motion";
import React from "react";
import UnitSkill from "./UnitSkill";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
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
    xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute lg:top-[4rem] md:top-18 sm:top-10 uppercase text-gray-300 tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className="absolute lg:top-[6.5rem] md:top-20 sm:top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <UnitSkill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <UnitSkill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
