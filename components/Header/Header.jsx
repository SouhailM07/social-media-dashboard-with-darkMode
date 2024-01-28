"use client";
import { useThemeContext } from "@/app/contexts/ThemeContextProvider";
import "./header.css";
//
export default function Header() {
  let { darkMode, setDarkMode } = useThemeContext();
  return (
    <>
      <header>
        <div id="Header-s1" className="md:h-auto h-[5rem]">
          <h1 id="Header-s1-h1">Social Media Dashboard</h1>
          <h2 className="Followers-title">Total Followers: 23,004</h2>
        </div>
        <div className="h-[0.5px] md:hidden dark:bg-d_text bg-black"></div>
        {/*  */}
        <div id="Header-s2">
          <span>Dark Mode</span>
          <button
            aria-label="switch theme button"
            id="Header-s2-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div></div>
          </button>
        </div>
      </header>
    </>
  );
}
