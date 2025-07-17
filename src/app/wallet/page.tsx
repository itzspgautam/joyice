"use client";
import { useTheme } from "next-themes";
import React from "react";

const Wallet = () => {
  const { theme } = useTheme();

  return (
    <div>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden bg-radial-gradient(#653bd5 0.8px, #f4f4fb 0.8px)">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark"
              ? "bg-gradient-to-b from-black to-dark"
              : "bg-gradient-to-b from-[#ffffff] via-[#f0f0f0] to-light"
          }`}
        />
        <div className="absolute top-[10%] left-1/10 transform -translate-x-1/2 w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-[100px] pointer-events-none" />
        <div className="absolute top-[-20%] left-[100%] transform -translate-x-1/2 w-[40vw] h-[40vh] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-20 blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
};

export default Wallet;
