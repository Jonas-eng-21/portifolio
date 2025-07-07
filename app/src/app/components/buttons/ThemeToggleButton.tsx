"use client";

import { useEffect, useState } from "react";

export const ThemeToggleButton = () => {
    const [theme, setTheme] = useState<"dark" | "light" | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!theme) {
        return <div className="h-[34px] w-[60px]" />; 
    }

    const isChecked = theme === "dark";

  return (
    <label
      htmlFor="theme-toggle"
      className="relative inline-block h-[34px] w-[60px]"
    >
      <input
        id="theme-toggle"
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <span
        className={`
          absolute inset-0 cursor-pointer rounded-full transition-all duration-500
          bg-[#202E59] 
          
         
          peer-checked:bg-white

         
          before:absolute before:content-['']
          before:h-[24px] before:w-[24px] before:rounded-full
          before:left-[5px] before:bottom-[5px]
          before:transition-all before:duration-500
          
          
          before:shadow-[inset_8px_-4px_0_0_#A3BAFF] 
          
         
          peer-checked:before:translate-x-[25px]
          peer-checked:before:shadow-[inset_15px_-4px_0_15px_#A3BAFF]
          
         
        `}
      ></span>
    </label>
  );
};
