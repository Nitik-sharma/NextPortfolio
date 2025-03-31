"use client"
import React from 'react'
import Image from "next/image";
import { assets,infoList, toolsData } from './../../public/assets/assets.js';
import { motion } from "motion/react";
function About({darkMode,setDarkMode}) {
    
 
  return (
    <div id="about" className="  w-full px-[12%] py-10 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center mb-2  text-lg "
      >
        Introduction
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" text-center text-5xl "
      >
        About me
      </motion.h1>

      <div className="  flex  w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className=" w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.nitik_Image}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className=" flex-1">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" mb-10 max-w-2xl font-stretch-50%"
          >
            I am a passionate MERN Stack Developer specializing in building
            high-performance, user-centric web applications. With expertise in
            MongoDB, Express.js, React.js, and Node.js, I create seamless,
            responsive, and scalable digital experiences.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <li
                  key={index}
                  className={`border-[4px] border-gray-500 rounded p-6 cursor-pointer  hover:translate-y-2 duration-500 shadow-lg ${
                    darkMode
                      ? "border-white hover:bg-[#604577]"
                      : "hover:bg-[#656466c4]"
                  }`}
                >
                  <Image
                    src={darkMode ? iconDark : icon}
                    alt={title}
                    className=" w-7 mt-3"
                  />
                  <h3
                    className={` my-4 font-semibold  ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm  ${
                      darkMode ? "text-white" : "text-gray-700"
                    } `}
                  >
                    {description}
                  </p>
                </li>
              );
            })}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`my-6  ${darkMode ? "tetx-white" : "text-gray-700"}`}
          >
            Tools I use{" "}
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className=" flex items-center gap-3 sm:flex-row sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className=" flex items-center justify-center  w-12 sm:w-14  aspect-square border border-gray-500  rounded-lg cursor-pointer  hover:translate-y-2 duration-500"
              >
                <Image src={tool} alt="tool" className=" w-7" />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default About
