"use client";
import {
  getLocalStorage,
  isLocalStorageEmpty,
  setLocalStorage,
} from "@/lib/utils";
import { createContext, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
  setThemeHandler: () => {},
});

export function MyThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => initialThemeHandler(), []);

  //   This function will handle theme initially when page loads or refresh
  const initialThemeHandler = () => {
    if (isLocalStorageEmpty("isDarkTheme")) {
      localStorage.setItem("isDarkTheme", `false`);
    } else {
      const isDarkTheme = getLocalStorage("isDarkTheme");

      if (isDarkTheme) {
        document?.querySelector("html")?.classList?.add("dark");
        setIsDarkTheme(isDarkTheme);
      }
    }
  };

  //   This will toggle theme accordingly if it's dark then turns light and vice versa
  const toggleThemeHandler = () => {
    const isDarkTheme = getLocalStorage("isDarkTheme");

    // Getting from local storage toggling and then modifying html , storing to local state and storage
    setIsDarkTheme(!isDarkTheme);
    document?.querySelector("html")?.classList?.toggle("dark");
    setLocalStorage("isDarkTheme", !isDarkTheme);
  };

  // Theme handler function for setting theme send in params --> used for Theme selector
  const setThemeHandler = (theme) => {
    const isDark = theme === "dark";
    setIsDarkTheme(isDark);
    if (isDark) document?.querySelector("html")?.classList?.add("dark");
    else document?.querySelector("html")?.classList?.remove("dark");
    setLocalStorage("isDarkTheme", isDark);
  };

  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme, toggleThemeHandler, setThemeHandler }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
