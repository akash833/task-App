import Navbar from "@/components/layout/Navbar";
import ThemeToggler from "@/components/layout/Theme-toggler";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {/* Theme Selector on top */}
      <ThemeToggler />
      <div className="flex justify-center w-[full]">{children}</div>
      <Navbar />
    </div>
  );
};

export default layout;
