"use client";
import Header from "@/components/layout/Header";
import TaskDetailsCard from "@/components/task-details/task-details-card";
import React from "react";
import { useSelector } from "react-redux";

const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Task Details",
  },
];

const page = ({ params }) => {
  const { tasks } = useSelector((state) => state.tasks);
  // Getting details of current selected task, we can also call an api with SWR in case of dynamic data
  const selectedTask = tasks?.find(
    (task) => params?.taskId === task?.id?.toString()
  );

  return (
    <div className="w-[40rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Details"} />
      <TaskDetailsCard selectedTask={selectedTask} />
    </div>
  );
};

export default page;
