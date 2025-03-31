"use client";
import React from "react";
import { motion } from "motion/react";
import { assets } from "./../../public/assets/assets.js";
import Image from "next/image";
import { LampDemo } from "../../components/ui/lamp.jsx";
import { TextGenerateEffect } from './../../components/ui/text-generate-effect';
import { TypewriterEffect, TypewriterEffectSmooth } from "./../../components/ui/typewriter-effect.jsx";
import Link from "next/link.js";

function Header({ darkMode, setDarkMode }) {
  return (
    <div
      className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
     justify-center gap-4  "
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.nitik_logo}
          className=" w-28 cursor-pointer mr-14 mt-6"
          alt=""
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" flex items-end text-xl md:text-2xl mb-3 gap-2"
      >
        Hi ! I'm Nitik <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className=" text-3xl sm:text-6xl lg:text[66px]"
      >
        MERN DEVELOPER
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" max-w-2xl  mx-auto"
      >
        I’m a MERN Stack Developer, building dynamic, scalable, and
        user-friendly web applications with MongoDB, Express.js, React, and
        Node.js. 🚀
      </motion.p>
      <div className=" flex items-center gap-4 sm:flex-row mt-4 ">
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#contact"
          className={`flex gap-3 items-center px-10 py-3 border border-gray-500 text-gray-200 rounded-full ${
            darkMode ? "bg-[#270344] rounded-3xl" : "bg-black"
          }`}
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className=" w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          href="/assets/public/Nitik Resume 1.pdf"
          download
          className=" flex gap-3 items-center px-10 py-3 border border-gray-500  rounded-full  "
        >
          My Resume{" "}
          <Image src={darkMode?assets.right_arrow_bold_dark:assets.download_icon} alt="" className=" w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
