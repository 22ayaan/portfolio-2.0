/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity durattion-200 overflow-hidden xl:max-h-[60vh] xl:max-w-[50%] 
    sm:max-h-[55vh] sm:min-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-inherit scrollbar-thumb-slate-500"
    >
      <motion.img
        initial={{
          y: -100,
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
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="h-32 w-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
      />

      <div className="px-0">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2 sm:justify-center md:justify-start">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h=10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="techimage"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
