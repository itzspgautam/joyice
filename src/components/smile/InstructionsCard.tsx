"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Sun,
  Smile,
  AlertCircle,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

interface InstructionCardProps {
  columnsPerRow?: number; // default = 1
}

export default function InstructionCard({
  columnsPerRow = 1,
}: InstructionCardProps) {
  const instructions = [
    {
      title: "Allow Camera Permission",
      description: "We need access to your camera for smile detection.",
      icon: <Camera className="text-violet-500" size={24} />,
    },
    {
      title: "Ensure Proper Lighting",
      description: "Make sure your face is well-lit and avoid backlighting.",
      icon: <Sun className="text-yellow-500" size={24} />,
    },

    {
      title: "Avoid Sunglasses & Masks",
      description: "Your full face must be visible for accurate detection.",
      icon: <AlertCircle className="text-red-500" size={24} />,
    },
    {
      title: "Keep Smiling",
      description:
        "Smile for 5 seconds to get your reward. If you stop smiling, it restarts.",
      icon: <Smile className="text-pink-500" size={24} />,
    },
    {
      title: "Secure Process",
      description:
        "Your camera data is used only for smile detection and stays private. we don't capture/store your camera data.",
      icon: <ShieldCheck className="text-green-500" size={24} />,
    },
  ];

  return (
    <Card className="w-full p-0 gap-0 h-full backdrop-blur-lg bg-gradient-to-br from-purple-200 to-white dark:from-gray-900 dark:to-transparent shadow-none border-1 border-purple-200 dark:border-gray-700 ">
      <CardHeader className="p-4">
        <CardTitle className="text-xl">Before You Start</CardTitle>
        <Badge className="bg-purple-500 text-white text-xsm ">
          <span className="text-white">INSTRUCTIONS</span>
        </Badge>
      </CardHeader>
      <CardContent
        className={`grid  gap-3 px-4 pt-2  pb-6 grid-cols-1 sm:grid-cols-${columnsPerRow}`}
      >
        {instructions.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-white dark:bg-black shadow-md">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h4>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
