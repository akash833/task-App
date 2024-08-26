"use client";
import { SiListmonk } from "react-icons/si";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CustomDropdownMenu from "./dropdown-menu";
import Link from "next/link";
import PriorityBadge from "../task-details/priority-badge";
import moment from "moment";
import axios from "axios";

const TaskCard = ({ task, setTasks }) => {
  const handleCheckedChange = async (id, status) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
        status: !status,
      });
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  return (
    <div className="p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600">
      <div className="flex items-start justify-between mb-4">
        {/* Task title and icon */}
        <div className="flex items-center gap-x-2">
          <SiListmonk size={20} className="text-blue-600 dark:text-blue-300" />
          <h5 className="text-lg font-bold tracking-tight text-gray-800 dark:text-white">
            {task?.title}
          </h5>
        </div>

        {/* Dropdown menu for actions */}
        <CustomDropdownMenu task={task} setTasks={setTasks} />
      </div>

      {/* Task description with tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="mb-2 text-sm font-normal text-gray-600 dark:text-gray-300 text-ellipsis line-clamp-2">
              {task?.description || "No description available"}
            </p>
          </TooltipTrigger>
          <TooltipContent className="w-64">
            {task?.description || "No description available"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Due date and priority badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Due Date: {moment(task?.dueDate).format("MM/DD/YYYY")}
        </div>
        <PriorityBadge priority={task?.priority || "Low"} />
      </div>

      {/* Task completion checkbox and view details link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`task-complete-${task.id}`}
            defaultChecked={task?.status || false}
            onCheckedChange={() => handleCheckedChange(task.id, task?.status)}
          />
          <label
            htmlFor={`task-complete-${task.id}`}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Mark as completed
          </label>
        </div>
        <Link
          href={`/home/${task?.id}`}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Click to view Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
