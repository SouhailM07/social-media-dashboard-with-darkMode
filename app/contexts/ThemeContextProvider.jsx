"use client";

import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

let ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  let [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    let toggleMode = document.documentElement;
    toggleMode.className = darkMode ? "light" : "dark";
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
