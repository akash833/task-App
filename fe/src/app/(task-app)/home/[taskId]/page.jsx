"use client";
import Header from "@/components/layout/Header";
import TaskDetailsCard from "@/components/task-details/task-details-card";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [task, setTask] = useState({});
  const { taskId } = params; // Destructure id from params
  const getTaskDetail = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`
      );

      setTask(res.data);
    } catch (error) {
      console.error("Error fetching task details:", error);
    }
  };

  useEffect(() => {
    if (taskId) {
      getTaskDetail();
    }
  }, [taskId]);

  return (
    <div className="w-[40rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Details"} />
      <TaskDetailsCard selectedTask={task} setTask={setTask} />
    </div>
  );
};

export default page;
