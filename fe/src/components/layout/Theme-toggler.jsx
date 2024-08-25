"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import MyThemeContext from "@/context/theme-context";

const ThemeToggler = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);

  return (
    <div className="absolute top-10 right-10">
      <Button
        size="sm"
        className="p-2 rounded-lg focus:outline-none bg-gray-200 hover:bg-gray-300 border border-gray-200"
        onClick={toggleThemeHandler}
      >
        {isDarkTheme ? (
          <Sun className="text-neutral-700" />
        ) : (
          <Moon className="text-neutral-700" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggler;
