import { motion } from 'framer-motion';
import React from 'react';
import UnitSkill from './UnitSkill';

type Props = {};

function Skills({}: Props) {
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
    xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-300 tracking-[20px] text-2xl">
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
        <UnitSkill />
      </div>
    </motion.div>
  )
};

export default Skills;