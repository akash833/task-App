import React from "react";
import LoginForm from "./login-form";
import LoginLeftSection from "./login-left-section";
import ThemeToggler from "../layout/Theme-toggler";

const LoginPage = () => {
  return (
    <div className="relative">
      {/* Theme Selector on top */}
      <ThemeToggler/>

      <div className="flex items-center justify-center">
        {/* left section */}
        <LoginLeftSection />

        {/* Main Login form - right Section */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
