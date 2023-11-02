"use client";
import { useThemeContext } from "@/app/contexts/ThemeContextProvider";
import "./header.css";
//
export default function Header() {
  let { darkMode, setDarkMode } = useThemeContext();
  return (
    <>
      <header>
        <div id="Header-s1">
          <h1 id="Header-s1-h1">Social Media Dashboard</h1>
        </div>
        {/*  */}
        <div id="Header-s2">
          <span>Dark Mode</span>
          <button id="Header-s2-button" onClick={() => setDarkMode(!darkMode)}>
            <div></div>
          </button>
        </div>
      </header>
    </>
  );
}
