import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function UnitSkill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={urlFor(skill?.image).url()}
        className=" rounded-full border border-gray-500 object-cover w-28 h-28 2xl:w-24 2xl:h-24 sm:w-20 sm:h-20 md:w-20 md:h-20 xl:w-20 xl:h-20
      filter group-hover:grayscale duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-60 group-active:opacity-60 transition duration-100 ease-in-out
      group-hover:bg-white w-28 h-28 2xl:w-24 2xl:h-24 sm:w-20 sm:h-20 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl xl:text-2xl md:text-xl sm:text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnitSkill;
