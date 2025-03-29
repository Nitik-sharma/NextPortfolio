"use client"
import { assets, serviceData } from '../../public/assets/assets.js';
import React from 'react'
import Image from 'next/image';

function Service() {
  return (
    <div id="service" className="  w-full px-[12%] py-10 scroll-mt-20">
      <h3 className=" text-center mb-2  text-lg ">What I offer </h3>
      <h1 className=" text-center text-5xl ">My Services</h1>
      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I am a passionate MERN Stack Developer with a strong foundation in
        MongoDB, Express.js, React.js, and Node.js. Over the past year, I have
        worked on multiple personal projects, gaining hands-on experience in
        building dynamic, scalable, and user-friendly web applications.
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <div
              key={index}
              className=" border border-gray-500 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-gray-200 hover:translate-y-2 duration-700"
            >
              <Image src={icon} alt="" className=" w-10" />
              <h3 className=" text-lg my-4 text-gray-600">{title}</h3>
              <p className=" text-sm text-gray-700 leading-5">{description}</p>
              <a className=" flex items-center gap-3 text-sm mt-5" href={link}>
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className=" w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service
