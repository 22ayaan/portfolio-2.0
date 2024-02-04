import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='relative flex flex-col overflow-hidden text-left md:flex-row max-w-full 
    mx-auto justify-evenly items-center z-0 h-screen'>
      <h3 className="absolute top-24 uppercase text-gray-300 tracking-[20px] text-2xl">
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-500'>
        {projects.map((project, i) => (
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
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          justify-center items-center p-20 md:pd-44 h-screen'>
            <motion.img 
            initial={{
              y: -300,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
            viewport={{
              once: true
            }}
            src="https://cdn2.vectorstock.com/i/1000x1000/53/71/trade-dashboard-for-bitcoin-vector-23925371.jpg" 
            alt="project image" 
            className='w-[300px] md:w-[500px] xl:w-[600px]'/>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <motion.h4 
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              transition={{
                duration: 1.2
              }}
              viewport={{
                once: true
              }}
              className='text-4xl font-semibold text-center'>
                <span className='underline decoration-slate-100/50'>
                Project {i + 1} of { projects.length }:</span> Bitcoin Dashboard
              </motion.h4>
              <motion.p 
              initial={{
                opacity: 0,
                y: 200
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1.2
              }}
              viewport={{
                once: true
              }}
              className='text-lg md:text-xl text-center md:text-left'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full absolute top-[25%] left-0 h-[600px] bg-slate-400/15 -skew-y-12' />
    </div>
  )
};

export default Projects;