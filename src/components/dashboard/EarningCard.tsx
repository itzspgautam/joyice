import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";
import ContainerSection from "../mine/ContainerSection";
import CircularProgress from "../mine/CircularProgress";
import { Button } from "../ui/button";
import { Smile, DollarSign } from "lucide-react";
import WeeklyGraph from "./WeeklyGraph";
import RotatingBorder from "../mine/RotatingBorder";
import { Counter } from "../mine/Counter";

function EarningCard() {
  return (
    <ContainerSection>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 grid-rows-5 gap-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Smile Task Card */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-3">
          <RotatingBorder>
            <Card className="bg-violet-100 dark:bg-purple-950 border-0 items-center p-4 h-full">
              <CardContent className="items-center flex flex-col p-0 pt-2 h-full">
                <div className="aspect-square w-full ">
                  <CircularProgress
                    percentage={60}
                    pathStroke={4}
                    fillStroke={3}
                    centerContent={
                      <div className="bg-violet-50 dark:bg-violet-950 rounded-full overflow-hidden pt-10 h-full w-full">
                        <img
                          src="/smile-avatar.svg"
                          alt="Avatar"
                          className="h-full w-full"
                        />
                      </div>
                    }
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="font-bold text-lg text-green-600 dark:text-green-500">
                    Today's reward is ready.
                  </h3>
                  <p className="font-regular text-sm">
                    Complete your task to claim your reward.
                  </p>
                </div>
              </CardContent>

              <Button className="rounded-full cursor-pointer w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <Smile />
                Complete Task
              </Button>
            </Card>
          </RotatingBorder>
        </div>

        {/* 3 Cards in the Same Row */}
        {[
          {
            title: "Today's Earning",
            sub: "2% Hike from yesterday",
            amount: 10.58,
          },
          {
            title: "Total Earnings",
            sub: "$897.69 earned this month",
            amount: 1090.24,
          },
          {
            title: "Wallet Balance",
            sub: "Compound reward",
            amount: 10076.58,
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="col-span-1 sm:col-span-2 lg:col-span-2 backdrop-blur-lg p-4 bg-gradient-to-bl from-violet-50 to-white dark:from-purple-900 dark:to-transparent flex flex-row justify-between shadow-none border-1 border-purple-200 dark:border-purple-900 gap-0"
          >
            <div className="flex flex-col justify-between flex-1">
              <div className="">
                <h3 className="font-bold text-2sm">{item.title}</h3>
                <p className="font-medium text-[12px] text-gray-500">
                  {item.sub}
                </p>
              </div>
              <span className="font-bold text-3xl mt-[-20px]">
                $
                <Counter
                  from={0}
                  to={item.amount}
                  animationOptions={{ duration: 0.3 }}
                />
              </span>
            </div>
            <div className="h-8 w-8 flex justify-center items-center rounded-lg bg-purple-500">
              <DollarSign className="text-white" />
            </div>
          </Card>
        ))}

        {/* Weekly Stats Graph (Now in 5th Position) */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-2 backdrop-blur-lg p-4 bg-gradient-to-bl from-violet-50 to-white dark:from-purple-950 dark:to-transparent shadow-none border-1 border-purple-200 dark:border-purple-900">
          <div>
            <h3 className="font-bold text-2sm">Weekly Stats</h3>
            <p className="font-medium text-[12px] text-gray-500">
              Earned $50 in past 7 days
            </p>
          </div>
          <WeeklyGraph />
        </Card>

        {/* Placeholder Card */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
          9
        </Card>
      </motion.div>
    </ContainerSection>
  );
}

export default EarningCard;
