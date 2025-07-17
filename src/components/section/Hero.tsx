"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import GradientText from "../mine/GradientText";
import { Plus } from "lucide-react";
import { SiTether } from "react-icons/si";
import { Badge } from "../ui/badge";
import { ButtonShimmer } from "../mine/ButtonSimmer";
export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className=" w-full min-h-[75vh] flex flex-col items-center  text-center px-6 md:px-12 py-16  mx-auto">
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

      <motion.h1
        className="relative text-5xl md:text-6xl font-extrabold text-light dark:text-gray-100 max-w-6xl mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-base border-1  border-purple-300 dark:border-gray-800 rounded-full px-5 font-extralight mb-5 bg-purple-100  dark:bg-gradient-to-br  from-black via-gray-900 to-gray-950">
          Next-Gen Web3 and AI Crypto Rewards
        </div>
      </motion.h1>

      <motion.h1
        className="relative text-5xl md:text-6xl font-extrabold text-light dark:text-gray-100 max-w-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Turn Your{" "}
        <GradientText className="">
          Smile
          <br />
        </GradientText>{" "}
        into <GradientText className="">Crypto</GradientText> Rewards!
      </motion.h1>

      <motion.p
        className="relative mt-4 text-2xl md:text-xl max-w-2xl text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Unlock effortless crypto rewards—smile, and let our AI turn your joy
        into crypto. No mining, no complexity—just pure, instant earnings!
      </motion.p>

      {/* Avatar Group */}

      {/* Call to Action Buttons */}
      <motion.div
        className="relative mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className=" flex items-center">
          <div className="inline-flex -space-x-4 overflow-hidden rounded-lg">
            <img
              className="h-12 w-12 rounded-full border-2 border-white"
              src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"
              alt="Avatar 1"
            />
            <img
              className="h-12 w-12 rounded-full border-2 border-white"
              src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"
              alt="Avatar 2"
            />
            <img
              className="h-12 w-12 rounded-full border-2 border-white"
              src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"
              alt="Avatar 3"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-medium">
              <GradientText> +10M </GradientText>
            </span>
          </div>
        </div>
        <>
          <ButtonShimmer
            className="h-12 bg-gradient-to-r from-purple-500 to-pink-500 transition "
            variant={"default"}
          >
            <Plus /> Join Now
          </ButtonShimmer>
          <Button className="h-12 rounded-full" variant={"outline"}>
            <SiTether /> Claim Rewards
          </Button>
        </>
      </motion.div>

      <motion.div
        className="relative mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img src="/smile.svg" alt="Smile Icon" className="h-14 mt-10 " />
      </motion.div>
    </section>
  );
}
