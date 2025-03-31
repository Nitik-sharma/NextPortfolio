"use client";
import { assets, workData } from '../../public/assets/assets.js';
import React from 'react';
import Image from "next/image";
import { motion } from 'motion/react';


function Work() {
  return (
    <div id="work" className="  w-full px-[12%] py-10 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center mb-2  text-lg "
      >
        My Portfolio{" "}
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center text-5xl "
      >
        My Latest Work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        Welcome to my portfolio! Dive in and explore my journey through code and
        creativity.My portfolio is a reflection of my passion and skills—explore
        and enjoy. Each project here represents my commitment to building
        intuitive and impactful experiences.you’ll find a showcase of my work,
        skills, and creativity in action 🚀.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2  my-10 gap-5"
      >
        {workData.map((project, index) => (
          <div
            key={index}
            className="  aspect-square  bg-no-repeat bg-cover bg-center  rounded-lg  relative  cursor-pointer  group "
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className=" bg-white w-10/12 rounded-md absolute bottom-5  left-1/2 -translate-x-1/2 py-3 px-5  flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <div>
                <h3 className=" font-semibold">{project.title}</h3>
                <p className="  text-sm text-gray-700">{project.description}</p>
              </div>
              <div className=" border border-gray-500  rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-y-2 duration-500">
                <a href={project.liveLink}>
                  {" "}
                  <Image src={assets.send_icon} alt="" className="w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        href=""
        className=" w-max flex items-center justify-center gap-2  text-gray-700  border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-200 duration-500 "
      >
        Show More <Image src={assets.right_arrow_bold} alt="" className="w-4" />
      </motion.a>
    </div>
  );
}

export default Work
