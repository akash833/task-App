"use client";
import Searchbar from "@/components/home/Searchbar";
import TaskCard from "@/components/home/TaskCard";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import React, { useEffect, useState } from "react";

const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Task Manager",
  },
];

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch tasks from API
  const getAllTasks = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
      setError("Failed to fetch tasks. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading is set to false after fetch attempt
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Manager"} />
      <div className="search-container my-1">
        <Searchbar />
      </div>

      <div className="mt-3">
        <ScrollArea className="h-[calc(100vh-10rem)] rounded-md px-3 mb-20">
          {loading ? (
            <div>Loading...</div> // Display loading indicator
          ) : error ? (
            <div>{error}</div> // Display error message
          ) : Array.isArray(tasks) && tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard task={task} key={task.id} setTasks={setTasks} />
            ))
          ) : (
            <div>No Tasks Found</div> // Display when there are no tasks
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
