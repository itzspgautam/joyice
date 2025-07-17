import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  centerContent: React.ReactNode;
  strokeColor?: string;
  width?: number;
  height?: number;
  pathStroke?: number;
  fillStroke?: number;
}

export default function CircularProgress({
  percentage,
  centerContent,
  strokeColor = "text-violet-500",
  width = 100, // Default width
  height = 100, // Default height
  pathStroke = 7,
  fillStroke = 5,
}: CircularProgressProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      // style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg className="absolute w-full h-full z-1" viewBox="0 0 100 100">
        {/* Static White Background Path */}
        <circle
          className="text-white stroke-current "
          strokeWidth={pathStroke}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />

        {/* Animated Progress Path */}
        <motion.circle
          className={`${strokeColor} stroke-current`}
          strokeWidth={fillStroke}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex items-center justify-center w-full h-full  rounded-full border-10 shadow-2xl border-purple-5 ">
        {centerContent}
      </div>
    </div>
  );
}
