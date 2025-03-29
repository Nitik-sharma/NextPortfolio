"use client"
import React from 'react'
import Image from "next/image";
import { assets,infoList, toolsData } from './../../public/assets/assets.js';

function About() {
    
 
  return (
    <div id="about" className="  w-full px-[12%] py-10 scroll-mt-20">
      <h3 className=" text-center mb-2  text-lg ">Introduction</h3>
      <h1 className=" text-center text-5xl ">About me</h1>

      <div className="  flex  w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className=" flex-1">
          <p className=" mb-10 max-w-2xl font-stretch-50%">
            I am a passionate MERN Stack Developer specializing in building
            high-performance, user-centric web applications. With expertise in
            MongoDB, Express.js, React.js, and Node.js, I create seamless,
            responsive, and scalable digital experiences.
            <Image src={assets.edu_icon_dark} alt="" />
          </p>
          <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <li
                  key={index}
                  className=" border-[6px] border-gray-500 rounded p-6 cursor-pointer hover:bg-[#fcf4ff] hover:translate-y-2 duration-500  box-shadow-black "
                >
                  <Image src={icon} alt={title} className=" w-7 mt-3" />
                  <h3 className=" my-4 font-semibold text-gray-700">{title}</h3>
                  <p className=" text-sm text-gray-800">{description}</p>
                </li>
              );
            })}
          </ul>
          <h4 className=" my-6 text-gray-700 ">Tools I use </h4>

          <ul className=" flex items-center gap-3 sm:flex-row sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className=" flex items-center justify-center  w-12 sm:w-14  aspect-square border border-gray-500  rounded-lg cursor-pointer  hover:translate-y-2 duration-500"
              >
                <Image src={tool} alt="tool" className=" w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
