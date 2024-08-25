import { TaskDistributionChart } from "@/components/dashboard/task-distrubution-chart";
import { TaskPriorityChart } from "@/components/dashboard/task-priority-chart";
import UpcomingTasks from "@/components/dashboard/upcoming-tasks";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Dashboard",
  },
];

const page = () => {
  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Dashboard"} />

      {/* Dashboard Charts starts here */}
      <div className="rounded-md mt-2 mb-10 bg-white dark:bg-gray-700 w-full p-5">
        <ScrollArea className="h-[calc(100vh-14rem)] rounded-md px-3">
          <div className="chart-container flex flex-col gap-3">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              {/* Chart for Task priority Distribution */}
              <TaskPriorityChart />

              {/* List of Upcoming Task with due date */}
              <UpcomingTasks />
            </div>

            {/* Chart for completed tasks, pending tasks, and task priority distribution -Pie Chart*/}
            <TaskDistributionChart />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
