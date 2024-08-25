"use client";
import Searchbar from "@/components/home/Searchbar";
import TaskCard from "@/components/home/TaskCard";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { useSelector } from "react-redux";
const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Task Manager",
  },
];

const page = () => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Manager"} />
      <div className="search-container my-1">
        <Searchbar />
      </div>

      <div className="mt-3">
        <ScrollArea className="h-[calc(100vh-10rem)] rounded-md px-3 mb-20">
          {Array.isArray(tasks) && tasks?.length > 0 ? (
            tasks?.map((task) => <TaskCard task={task} key={task?.id} />)
          ) : (
            <div>No Tasks Found</div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
