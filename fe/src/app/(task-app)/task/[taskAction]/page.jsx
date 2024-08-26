"use client";
import Header from "@/components/layout/Header";
import { TaskForm } from "@/components/task-form/TaskForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const breadcrumbArray = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: params?.taskAction === "add" ? "Add Task" : "Edit Task",
    },
  ];
  const [currentTask, setCurrentTask] = useState({});

  const getTaskDetails = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`
      );
      const data = res.data;
      setCurrentTask({
        title: data.title,
        description: data.description,
        dueDate: new Date(data.dueDate),
        priority: data.priority,
        location_reminder: data.location_reminder,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (params?.taskAction !== "add") {
      getTaskDetails(params.taskAction);
    }
  }, []);

  return (
    <div className="w-[48rem] text-left p-3">
      <Header
        breadcrumbArray={breadcrumbArray || []}
        pageTitle={params?.taskAction === "add" ? "Add Task" : "Edit Task"}
      />

      <TaskForm defaultValue={currentTask} taskAction={params?.taskAction} />
    </div>
  );
};

export default page;
