import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className="flex flex-col relative overflow-hidden h-screen text-center md:text-left 
    md:flex-row mx-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-gray-300 tracking-[20px] text-2xl">
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-500'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
};

export default WorkExperience;