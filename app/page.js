"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className={`scroll-smooth ${darkMode ? "dark" : ""}`}>
    <div
  className="min-h-screen transition-colors duration-300"
  style={{
    backgroundColor: darkMode ? "#11001F" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
        <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Service darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Work darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Contact darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
