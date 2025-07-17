"use client";

import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { day: "Mon", earnings: 50, fill: "#8B5CF6" }, // Indigo
  { day: "Tue", earnings: 80, fill: "#A855F7" }, // Purple
  { day: "Wed", earnings: 65, fill: "#D946EF" }, // Fuchsia
  { day: "Thu", earnings: 90, fill: "#EC4899" }, // Pink
  { day: "Fri", earnings: 120, fill: "#C084FC" }, // Soft Purple
  { day: "Sat", earnings: 75, fill: "#E879F9" }, // Light Pinkish Violet
  { day: "Sun", earnings: 110, fill: "#F472B6" }, // Soft Pink
];

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "#8A2BE2",
  },
} satisfies ChartConfig;

export default function WeeklyGraph() {
  return (
    <ChartContainer config={chartConfig} className="h-42">
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} margin={{ left: 0, right: 0 }}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 2"
            stroke="rgba(255,255,255,0.1)"
          />
          <XAxis dataKey="day" stroke="rgba(255,255,255,0.1)" />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dot"
                nameKey="earnings"
                hideLabel
              />
            }
          />
          <Bar
            dataKey="earnings"
            fill="#8A2BE2"
            barSize={20}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
