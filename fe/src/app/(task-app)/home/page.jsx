"use client";
import FilterDropdown from "@/components/home/filter";
import Searchbar from "@/components/home/Searchbar";
import TaskCard from "@/components/home/TaskCard";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

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
  const [sort, setSort] = useState("dec");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async (search = "", sort = "dec", filter = "All") => {
    setLoading(true);
    try {
      const url = search
        ? `${process.env.NEXT_PUBLIC_API_URL}/tasks?search=${encodeURIComponent(
            search
          )}&sort=${sort}&filter=${filter}`
        : `${process.env.NEXT_PUBLIC_API_URL}/tasks?sort=${sort}&filter=${filter}`;

      const res = await axios.get(url);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
      setError("Failed to fetch tasks. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(); // Initial fetch with no search query
  }, []);

  const handleSearch = (searchQuery) => {
    fetchTasks(searchQuery); // Fetch tasks with the search query
  };

  const sortTasks = () => {
    setSort(sort === "asc" ? "dec" : "asc");
    fetchTasks("", sort);
  };

  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Manager"} />
      <div>
        <div className="flex justify-between gap-2">
          <div className="search-container flex justify-between">
            <Searchbar onSearch={handleSearch} />
          </div>
          <div className="flex gap-2">
            <Button
              variant="icon"
              size="lg"
              className="bg-blue-400 hover:text-white h-full dark:text-white dark:hover:bg-blue-400"
              onClick={sortTasks}
            >
              {sort === "dec" ? (
                <FaSortAlphaDownAlt size={18} className="dark:text-white" />
              ) : (
                <FaSortAlphaDown size={18} className="dark:text-white" />
              )}
            </Button>
            <FilterDropdown fetchTasks={fetchTasks} />
          </div>
        </div>

        <div className="mt-3">
          <ScrollArea className="h-[calc(100vh-10rem)] rounded-md px-3 mb-20">
            {loading ? (
              <div>Loading...</div> // Display loading indicator
            ) : error ? (
              <div>{error}</div> // Display error message
            ) : Array.isArray(tasks) && tasks.length > 0 ? (
              tasks.map((task) => <TaskCard task={task} key={task.id} />)
            ) : (
              <div>No Tasks Found</div> // Display when there are no tasks
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Page;
