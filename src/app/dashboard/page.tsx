"use client";
import { useTheme } from "next-themes";

import ContainerSection from "@/components/mine/ContainerSection";
import EarningsCard from "@/components/dashboard/EarningCard";
import { motion } from "framer-motion";
import GradientText from "@/components/mine/GradientText";

export default function Dahboard() {
  const { theme } = useTheme();

  return (
    <div>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden bg-radial-gradient(#653bd5 0.8px, #f4f4fb 0.8px)">
        {/* Base Gradient with Dark Web3 Vibe */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark"
              ? "bg-gradient-to-b from-black to-dark"
              : "bg-gradient-to-b from-[#ffffff] via-[#f0f0f0] to-light"
          }`}
        />

        {/* Purple-Blue Subtle Glow */}
        <div
          className="absolute top-[10%] left-1/10 transform -translate-x-1/2 
               w-[50vw] h-[50vh] rounded-full 
               bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent 
               opacity-30 blur-[100px] pointer-events-none"
        />
        {/* Purple-Blue Subtle Glow */}
        <div
          className="absolute top-[-20%] left-[100%] transform -translate-x-1/2 
               w-[40vw] h-[40vh] rounded-full 
               bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent 
               opacity-20 blur-[100px] pointer-events-none"
        />
      </div>
      <ContainerSection>
        <motion.h1
          className="relative text-3xl md:text-3xl font-extrabold text-light dark:text-gray-100 max-w-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Good{" "}
          {new Date().getHours() < 12
            ? "morning"
            : new Date().getHours() < 18
            ? "afternoon"
            : "evening"}
          , <GradientText className="">Suraj Gautam</GradientText>!
        </motion.h1>

        <motion.p
          className="relative mt-1 text-base max-w-2xl text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your smile is worth more today. Keep going!
        </motion.p>
      </ContainerSection>
      <EarningsCard />
    </div>
  );
}
