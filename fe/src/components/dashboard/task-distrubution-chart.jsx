"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", completed: 186, pending: 80 },
  { month: "February", completed: 305, pending: 200 },
  { month: "March", completed: 237, pending: 120 },
  { month: "April", completed: 73, pending: 190 },
  { month: "May", completed: 209, pending: 130 },
  { month: "June", completed: 214, pending: 140 },
];

const chartConfig = {
  completed: {
    label: "completed",
    color: "rgb(37 99 235)",
  },
  pending: {
    label: "pending",
    color: "#60a8fb",
  },
};

export function TaskDistributionChart() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle>Completed / Pending Tasks Monthly</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="completed" fill="rgb(37 99 235)" radius={4} />
            <Bar dataKey="pending" fill="#60a8fb" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-neutral-500">
          Task Completion Boosted up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Tasks for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
