"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { assets } from '../../public/assets/assets.js';
import { motion } from "motion/react";

function Contact({darkMode,setDarkMode}) {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "296df025-4ac2-4798-8bd1-01ca45723c1a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id="contact" className="  w-full px-[12%] py-10 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center mb-2  text-lg "
      >
        {" "}
        Contact with me{" "}
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center text-5xl "
      >
        Get in touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        Looking for a reliable freelance developer? Let’s collaborate to bring
        your ideas to life. Reach out for project inquiries or freelance
        opportunities!" Let me know if you'd like a more tailored version! 🚀
      </motion.p>
      <form onSubmit={onSubmit} action="" className=" max-w-2xl mx-auto">
        <div className=" flex flex-col lg:flex-row md:flex-row gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
    ${darkMode ? "bg-[#11001F] text-white" : ""}`}
          />
          <motion.input
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
    ${darkMode ? "bg-[#11001F] text-white" : ""}`}
          />
        </div>

        <motion.textarea
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          name="message"
          id=""
          placeholder="Enter your message"
          rows={6}
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 
    ${darkMode ? "bg-[#11001F] text-white" : ""}`}
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          type="submit"
          className={`py-3 px-6 w-max flex items-center justify-between gap-2  text-white rounded-full mx-auto  duration-500 ${
            darkMode
              ? "bg-[#11001F] hover:bg-[#a877d1] duration-700"
              : "bg-black/80 hover:bg-black"
          }`}
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-5" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0,x:-10 }}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4"
        >
          {result}
        </motion.p>
      </form>
    </div>
  );
}

export default Contact
