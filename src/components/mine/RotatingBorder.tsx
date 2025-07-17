"use client";

import React, { ReactNode } from "react";
import "@/app/globals.css"; // Ensure global styles with keyframes are imported

interface RotatingBorderProps {
  children: ReactNode; // Accepts div or any other content as children
  rotateOnHover?: boolean; // Whether the border should rotate only on hover
}

// RotatingBorder component that applies a rotating border to the child div
const RotatingBorder: React.FC<RotatingBorderProps> = ({
  children,
  rotateOnHover = false,
}) => {
  return (
    <div className="h-full">
      <div
        className={`relative z-10  cursor-pointer items-center overflow-hidden rounded-xl  p-[1.5px] h-full`}
      >
        {/* Rotating border with custom animation */}
        <div
          className={`${
            rotateOnHover
              ? "group-hover:animate-rotate" // Rotate on hover
              : "animate-rotate" // Rotate continuously
          } absolute inset-0 rounded-2xl  bg-[conic-gradient(#7f00ff_20deg,transparent_600deg)] h-full`}
        ></div>

        {/* Inner content */}
        <div className="relative z-20  h-full w-full">
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default RotatingBorder;
