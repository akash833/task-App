import Header from "@/components/layout/Header";
import { TaskForm } from "@/components/task-form/TaskForm";
import { TasksArray } from "@/lib/data";
import React from "react";

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

  const currentTask = TasksArray?.find(
    (task) => task?.id == params?.taskAction
  );

  return (
    <div className="w-[48rem] text-left p-3">
      <Header
        breadcrumbArray={breadcrumbArray || []}
        pageTitle={params?.taskAction === "add" ? "Add Task" : "Edit Task"}
      />

      <TaskForm defaultValue={currentTask} taskAction={params?.taskAction}/>
    </div>
  );
};

export default page;
