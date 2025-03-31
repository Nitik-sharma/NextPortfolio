"use client"
import { assets, serviceData } from '../../public/assets/assets.js';
import React from 'react'
import Image from 'next/image';
import {motion} from 'motion/react'

function Service({darkMode ,setDarkMode}) {
  return (
    <div id="service" className="  w-full px-[12%] py-10 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center mb-2  text-lg "
      >
        What I offer{" "}
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center text-5xl "
      >
        My Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0,y:-30 }}
        whileInView={{ opacity: 1 ,y:0}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        I am a passionate MERN Stack Developer with a strong foundation in
        MongoDB, Express.js, React.js, and Node.js. Over the past year, I have
        worked on multiple personal projects, gaining hands-on experience in
        building dynamic, scalable, and user-friendly web applications.
      </motion.p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              key={index}
              className={`border rounded-lg px-8 py-12  cursor-pointer  hover:translate-y-2 duration-700 ${
                darkMode
                  ? "border-white hover:bg-[#ac79d8]"
                  : "hover:bg-gray-200 border-gray-500 "
              }
              }`}
            >
              <Image src={icon} alt="" className=" w-10" />
              <h3
                className={`text-lg my-4  ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm = leading-5  ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {description}
              </p>
              <a
                className={`flex items-center gap-3 text-sm mt-5 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
                href={link}
              >
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className=" w-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Service
