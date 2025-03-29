"use client";
import React from "react";
import { assets } from "./../../public/assets/assets.js";
import Image from "next/image";
import { LampDemo } from "../../components/ui/lamp.jsx";
import { TextGenerateEffect } from './../../components/ui/text-generate-effect';
import { TypewriterEffect, TypewriterEffectSmooth } from "./../../components/ui/typewriter-effect.jsx";
import Link from "next/link.js";

function Header() {
  return (
    <div
      className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
     justify-center gap-4  "
    >
      <div>
        <Image
          src={assets.profile_img}
          className=" w-28 cursor-pointer mr-14"
          alt=""
        />
      </div>
      <h3 className=" flex items-end text-xl md:text-2xl mb-3 gap-2">
        Hi ! I'm Nitik <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className=" text-3xl sm:text-6xl lg:text[66px]">MERN DEVELOPER</h1>
      <p className=" max-w-2xl  mx-auto">
        I’m a MERN Stack Developer, building dynamic, scalable, and
        user-friendly web applications with MongoDB, Express.js, React, and
        Node.js. 🚀
      </p>
      <div className=" flex items-center gap-4 sm:flex-row mt-4 ">
        <a
          href="#contact"
          className=" flex gap-3 items-center px-10 py-3 border border-gray-500 text-gray-200 bg-black rounded-full  "
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className=" w-4" />
        </a>
        <a
          href="/public/assets/public/sample-resume.pdf" download
          className=" flex gap-3 items-center px-10 py-3 border border-gray-500  rounded-full  "
        >
        My   Resume {" "}
          <Image src={assets.right_arrow_white} alt="" className=" w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header;
