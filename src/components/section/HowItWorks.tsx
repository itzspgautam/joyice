"use client";

import { motion } from "framer-motion";
import RotatingBorder from "../mine/RotatingBorder";
import { FaSmile, FaCoins, FaChartLine, FaUserFriends } from "react-icons/fa";
import GradientText from "../mine/GradientText";

import { SmilePlus, HandCoins, ChartLine, Users } from "lucide-react";
import ContainerSection from "../mine/ContainerSection";

const features = [
  {
    title: "Smile to Earn",
    description:
      "Earn cryptocurrency rewards just by smiling for a few seconds every day.",
    icon: <SmilePlus className="text-pink-500 " size={50} />,
  },
  {
    title: "Tiered Rewards",
    description:
      "Stake more to unlock higher daily rewards, from 0.01 USDT to 7 USDT per day.",
    icon: <HandCoins className="text-yellow-400 " size={50} />,
  },
  {
    title: "Track Progress",
    description:
      "Monitor your earnings, streaks, and achievements in a beautiful dashboard.",
    icon: <ChartLine className="text-blue-400 " size={50} />,
  },
  {
    title: "Refer Friends",
    description:
      "Earn 5% of your friends' rewards when they join using your referral code.",
    icon: <Users className="text-green-400" size={50} />,
  },
];

export default function HowItWorks() {
  return (
    <ContainerSection className="bg-violet-100 dark:bg-transparent py-20">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Earn Crypto <GradientText>Effortlessly</GradientText>
      </motion.h2>
      <motion.p
        className="mt-2 text-gray-400 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Discover how you can earn daily crypto rewards through simple actions.
      </motion.p>
      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <RotatingBorder>
              <div className="bg-violet-50  dark:bg-gradient-to-b rounded-xl  from-purple-950 via-gray-950 to-black  p-6 h-66 flex flex-col items-center justify-center space-y-2">
                {feature.icon}
                <h3 className="text-xl font-bold text-dark">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>

                <div className="h-1 bg-violet-200 dark:bg-gray-800 w-[40%] rounded-full mt-5"></div>
              </div>
            </RotatingBorder>
          </motion.div>
        ))}
      </div>
    </ContainerSection>
  );
}
