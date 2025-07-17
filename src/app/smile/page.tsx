"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ContainerSection from "@/components/mine/ContainerSection";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import RotatingBorder from "@/components/mine/RotatingBorder";
import CircularProgress from "@/components/mine/CircularProgress";
import { Button } from "@/components/ui/button";
import {
  Smile,
  Camera,
  CameraOff,
  CheckCircle,
  DollarSign,
  ChartArea,
} from "lucide-react";
import * as faceapi from "face-api.js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import InstructionCard from "@/components/smile/InstructionsCard";

const rewardsData = [
  { sr: 1, date: "2025-04-05", reward: "2.5 USDT" },
  { sr: 2, date: "2025-04-04", reward: "3.1 USDT" },
  { sr: 3, date: "2025-04-03", reward: "1.8 USDT" },
  { sr: 4, date: "2025-04-03", reward: "1.8 USDT" },
  { sr: 5, date: "2025-04-03", reward: "1.8 USDT" },
  { sr: 6, date: "2025-04-03", reward: "1.8 USDT" },
  { sr: 7, date: "2025-04-03", reward: "1.8 USDT" },
];

const Page = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [progress, setProgress] = useState<number>(0);
  const [cameraOn, setCameraOn] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Initialising services...");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [modelsLoaded, setModelsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL =
        "https://justadudewhohacks.github.io/face-api.js/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
      setMessage("Services initialised! You can now start the camera.");
    };
    loadModels();
  }, []);

  const startCamera = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: "camera" as PermissionName,
      });

      if (permission.state === "denied") {
        setMessage("Camera permission denied. Please enable it in settings.");
        return;
      }

      if (permission.state === "prompt") {
        setMessage("Requesting camera access...");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) videoRef.current.srcObject = stream;
      if (bgVideoRef.current) bgVideoRef.current.srcObject = stream;

      setCameraOn(true);
      setIsCompleted(false);
      setProgress(0);
      setMessage("Detecting your face...");
      detectSmile();
    } catch (err) {
      console.error("Camera error:", err);
      setMessage("Camera access denied. Please allow camera permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
    setCameraOn(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const detectSmile = () => {
    intervalRef.current = setInterval(async () => {
      if (!videoRef.current) return;

      const result = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceExpressions();

      if (!result) {
        setMessage("Face not found, place your face properly");
        setProgress(0);
        return;
      }

      const { happy = 0, sad = 0, neutral = 0 } = result.expressions;

      if (happy > 0.7) {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 20, 100);
          if (newProgress === 100) {
            setIsCompleted(true);
            stopCamera();
          }
          return newProgress;
        });

        setMessage(
          progress < 80
            ? "Keep smiling… you are doing great! 😄"
            : "Almost done! Keep it up! 🎉"
        );
      } else if (sad > 0.5) {
        setProgress(0);
        setMessage("You look a bit sad, cheer up 😊");
      } else {
        setProgress(0);
        setMessage(
          neutral > 0.5
            ? "You are not smiling, smile please!"
            : "Face detected, waiting for smile..."
        );
      }
    }, 1000);
  };

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

      <ContainerSection>
        <motion.div
          className="relative text-3xl md:text-3xl font-extrabold text-light dark:text-gray-100 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-4 flex-col sm:flex-row">
            <Card className="flex-1 p-0 bg-gradient-to-br from-purple-200 to-white dark:from-gray-900 dark:to-transparent shadow-none border-1 border-purple-200 dark:border-gray-700 gap-0">
              <CardHeader className="flex justify-between p-4">
                <div>
                  <h3 className="font-bold text-xl">Smile rewards</h3>
                  <p className="font-medium text-[14px] text-gray-500">
                    Daily earning records of last 7 days
                  </p>
                </div>
                <div className="h-10 w-10 flex justify-center items-center rounded-lg bg-purple-500">
                  <ChartArea className="text-white" />
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <Table className="overflow-hidden rounded-md">
                  <TableHeader className="bg-purple-200 dark:bg-purple-900 ">
                    <TableRow>
                      <TableHead className="w-[50px] text-purple-700 dark:text-purple-300">
                        Sr
                      </TableHead>
                      <TableHead className="text-purple-700 dark:text-purple-300">
                        Date
                      </TableHead>
                      <TableHead className="text-right text-purple-700 dark:text-purple-300">
                        Reward
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rewardsData.map((item, i) => (
                      <TableRow
                        key={i}
                        className="hover:bg-purple-50 dark:hover:bg-purple-900/30 transition"
                      >
                        <TableCell>
                          <div className="aspect-square bg-purple-200 dark:bg-purple-800 rounded-full items-center justify-center flex font-medium">
                            {item.sr}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.date}
                        </TableCell>
                        <TableCell className="text-right text-green-600 dark:text-green-400 font-semibold">
                          +{item.reward}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="flex-1">
              <RotatingBorder>
                <Card className="bg-violet-100 dark:bg-purple-950 border-0 items-center p-4 h-full justify-between">
                  <CardContent className="items-center w-full p-0">
                    <div className="relative flex flex-col w-full aspect-square justify-center items-center rounded-2xl overflow-hidden bg-purple-200 dark:bg-purple-900 p-4">
                      <video
                        ref={bgVideoRef}
                        autoPlay
                        playsInline
                        muted
                        loop
                        className={`absolute inset-0 w-full h-full object-cover rounded-2xl blur-2xl ${
                          isCompleted && "opacity-0"
                        }`}
                      />
                      <CircularProgress
                        percentage={progress}
                        pathStroke={5}
                        fillStroke={3}
                        centerContent={
                          <div className="relative w-full h-full flex justify-center items-center">
                            {isCompleted && (
                              <div className="absolute flex items-center justify-center aspect-square h-full z-10">
                                <CheckCircle
                                  size={50}
                                  className="text-green-500"
                                />
                              </div>
                            )}
                            {!cameraOn && !isCompleted && (
                              <div
                                className="absolute flex items-center justify-center aspect-square h-full z-1"
                                onClick={startCamera}
                              >
                                <CameraOff size={50} />
                              </div>
                            )}
                            <video
                              ref={videoRef}
                              autoPlay
                              playsInline
                              muted
                              className={`w-full h-full object-cover rounded-full z-0 ${
                                isCompleted && "opacity-0"
                              }`}
                              style={{
                                WebkitMaskImage:
                                  "radial-gradient(circle, white 60%, transparent 100%)",
                                maskImage:
                                  "radial-gradient(circle, white 60%, transparent 100%)",
                              }}
                            />
                          </div>
                        }
                      />
                    </div>
                    <p className="text-xl font-medium text-gray-700 dark:text-gray-200 text-center mt-2">
                      {message}
                    </p>
                  </CardContent>

                  <CardFooter className="w-full p-0">
                    <Button
                      onClick={cameraOn ? stopCamera : startCamera}
                      disabled={!modelsLoaded}
                      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-12 ${
                        !modelsLoaded ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {cameraOn ? (
                        <CameraOff className="mr-2" />
                      ) : (
                        <Camera className="mr-2" />
                      )}
                      {cameraOn ? "Stop Camera" : "Start Camera"}
                    </Button>
                  </CardFooter> 
                </Card>
              </RotatingBorder>
            </div>

            <div className="flex-1">
              <InstructionCard />
            </div>
          </div>
        </motion.div>
      </ContainerSection>
    </div>
  );
};

export default Page;
