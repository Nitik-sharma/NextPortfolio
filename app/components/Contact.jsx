"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { assets } from '../../public/assets/assets.js';

function Contact() {
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
      <h3 className=" text-center mb-2  text-lg "> Contact with me </h3>
      <h1 className=" text-center text-5xl ">Get in touch</h1>
      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Looking for a reliable freelance developer? Let’s collaborate to bring
        your ideas to life. Reach out for project inquiries or freelance
        opportunities!" Let me know if you'd like a more tailored version! 🚀
      </p>
      <form onSubmit={onSubmit} action="" className=" max-w-2xl mx-auto">
        <div className=" flex flex-col lg:flex-row md:flex-row gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
            className="  flex-1 p-3 outline-none border-[0.5px] border-gray-400  rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
            className="  flex-1 p-3 outline-none border-[0.5px] border-gray-400  rounded-md  bg-white"
          />
        </div>

        <textarea
          name="message"
          id=""
          placeholder="Enter your message"
          rows={6}
          className=" w-full p-4  outline-none border-[0.5px] border-gray-400 rounded-md mb-6  bg-white"
        ></textarea>
        <button
          type="submit"
          className=" py-3 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-5" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
}

export default Contact
