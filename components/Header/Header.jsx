"use client";
import { useThemeContext } from "@/app/contexts/ThemeContextProvider";
import "./header.css";
//
export default function Header() {
  let { darkMode, setDarkMode } = useThemeContext();
  let toggleBtn = "pl-1 bg-gradient-to-r from-red-500 to-blue-500";
  if (darkMode) toggleBtn = "pl-8";
  return (
    <>
      <header className="flex justify-between my-[3rem]">
        <div>
          <h1 className="text-[2.3rem] font-bold dark:text-whiteText">
            Social Media Dashboard
          </h1>
          <p className="dark:text-white text-[1.15rem] font-bold">
            Total Followers: 23,004
          </p>
        </div>
        {/*  */}
        <div className="flex justify-between w-[10.5rem] items-center">
          <span className="dark:text-d_text">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-[4rem] h-[2rem] rounded-full dark:pl-1 pl-9 bg-[#aeb3cb] bg-gradient-to-r dark:from-[#378fe6] dark:to-[#3eda82] outline-none"
          >
            <div className="h-[1.3rem] w-[1.3rem] bg-white dark:bg-black rounded-full"></div>
          </button>
        </div>
      </header>
    </>
  );
}
