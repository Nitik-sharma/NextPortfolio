"use client";

import { assets } from "../../public/assets/assets.js";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Navbar({darkMode,setDarkMode}) {
  const [isScroll,setIsScroll]=useState(false)
  const slideRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  },[])

  const openMenu = () => {
    slideRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    slideRef.current.style.transform = "translateX(16rem)";
  }
  return (
    <>
      {!darkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image src={assets.header_bg_color} alt="" className="w-full" />
        </div>
      )}
      {/* <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className=" w-full"/>
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between  z-50 ${
          isScroll ? "bbg-white bg-opacity-50 backdrop-blur-lg shadow-sm " : ""
        } ${darkMode?"text-gray-700":""}`}
      >
        <Link href={"#top"}>
          <Image
            src={assets.nitik}
            className=" w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </Link>

        <ul
          className={`hidden  md:flex items-center justify-between gap-6 lg:gap-8  rounded-full px-12 py-3  ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            {" "}
            <Link href={"#top"} className=" font-outfit ">
              Home
            </Link>
          </li>
          <li>
            <Link href={"#about"} className=" font-outfit">
              About me
            </Link>
          </li>
          <li>
            <Link href={"#service"} className="font-outfit">
              Service
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#work"}>My Work</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contect Me</Link>
          </li>
        </ul>

        <div className=" flex items-center gap-4">
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {" "}
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className=" w-6"
            />
          </button>
          <Link
            href={"/"}
            className=" hidden md:flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full ml-4"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="contact" className=" w-3" />
          </Link>

          <button>
            {" "}
            <Image
              src={assets.menu_black}
              alt="moon"
              className=" w-6 block md:hidden ml-3"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* Mobile ----------------------------------------------------- */}

        <ul
          ref={slideRef}
          className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64  bottom-0 w-64 z-50 h-screen bg-rose-300  transition duration-500 "
        >
          <div className=" absolute rigght-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=" "
              className=" cursor-pointer w-5"
            />
          </div>
          <li>
            {" "}
            <Link href={"#top"} className=" font-outfit " onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"#about"} className=" font-outfit" onClick={closeMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link href={"#service"} className="font-outfit" onClick={closeMenu}>
              Service
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#work"} onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={closeMenu}>
              Contect Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
