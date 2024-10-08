"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sun from "./sun.png";
import Moon from "./moon.png";
export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        root.classList.add("dark");
        setDarkMode(true);
    }
  },[]);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className=" hover:bg-neutral-400 p-2 rounded focus:outline-none focus:shadow-outline dark:hover:bg-neutral-900"
    >
        {darkMode ? <Image src={Sun} alt="sun" width={20} height={20} /> : <Image src={Moon} alt="moon" width={20} height={20} />}
    </button>
  )
}
