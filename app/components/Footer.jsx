"use client";
import { assets } from '../../public/assets/assets.js';
import Image from 'next/image';
import React from 'react'


function Footer() {
  return (
    <div className=" mt-20">
      <div className=" text-center">
        <Image src={assets.nitik} alt="" className=" w-36 mx-auto mb-2" />
        <div className=" w-max flex items-center  gap-3 mx-auto">
          <Image src={assets.mail_icon} alt="" className=" w-6" />
          nitiksharma445@gmail.com
        </div>
      </div>
      <div className=" text-center sm:flex items-center justify-between  border-t border-gray-500 mx-[10%] mt-12 py-6">
        © [2025] Nitik. All rights reserved. 
        <ul className=' flex items-center gap-10 justify-center mt-4 sm:mt-10'>
          <li>
            <a target="_blank" href="https://github.com/Nitik-sharma">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nitik-sharma-774b6922a/"
            >
              LinkedIn
            </a>
          </li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
