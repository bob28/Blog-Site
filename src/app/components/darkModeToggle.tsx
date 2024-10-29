"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("system");

  // set the theme based on the saved theme in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // apply the theme and set the document class list based on the theme
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  };

  const handleThemeChange = (newTheme: string) => {
    // set the theme state
    setTheme(newTheme);
    // save the theme in local storage
    localStorage.setItem("theme", newTheme);
    // apply the theme
    applyTheme(newTheme);
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 rounded  flex gap-x-2 items-center my-auto ${
          theme === "light"
            ? "bg-blue-500 text-white dark:bg-blue-800"
            : "bg-gray-100"
        }  dark:bg-gray-700 dark:text-gray-200`}
      >
        <FaSun />
        Light
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 rounded  flex gap-x-2 items-center ${
          theme === "dark"
            ? "bg-blue-500 text-white dark:bg-blue-800"
            : "bg-gray-100 dark:bg-gray-700"
        }   dark:text-gray-200`}
      >
        <FaMoon />
        Dark
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={`p-2 rounded  flex gap-x-2 items-center ${
          theme === "system"
            ? "bg-blue-500 text-white dark:bg-blue-800"
            : "bg-gray-100 dark:bg-gray-700"
        }   dark:text-gray-200`}
      >
        <FaDesktop />
        System
      </button>
    </div>
  );
}
