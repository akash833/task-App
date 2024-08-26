"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeftRight,
  BookmarkMinus,
  CalendarCheck2,
  MapPin,
  Pencil,
  Trash2,
} from "lucide-react";
import PriorityBadge from "./priority-badge";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import moment from "moment";

export function TaskActionCard({ className, selectedTask, setTask }) {
  const router = useRouter();

  const handleCheckedChange = async (id, status) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
        status: !status,
      });
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`
      );
      setTask(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleDeleteButton = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`);
      router.push("/tasks"); // Redirect to tasks list page after deletion
    } catch (err) {
      console.error("Failed to delete the task");
    }
  };

  const momentDate = (date) => {
    return moment(date).format("MM/DD/YYYY");
  };

  return (
    <Card
      className={`${className} p-6 shadow-lg border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800`}
    >
      {/* Header: Title and Action Buttons */}
      <CardHeader className="flex items-center justify-between mb-4">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
          {selectedTask?.title || "Untitled Task"}
        </CardTitle>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            className="text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 p-2 rounded-full"
            size="icon"
            onClick={() => router.push(`/task/${selectedTask?.id}`)}
          >
            <Pencil size={18} />
          </Button>
          <Button
            variant="ghost"
            className="text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800 p-2 rounded-full"
            size="icon"
            onClick={() => handleDeleteButton(selectedTask?.id)}
          >
            <Trash2 size={18} />
          </Button>
        </div>
      </CardHeader>

      {/* Content: Task Details */}
      <CardContent className="space-y-6">
        {/* Task Status Toggle */}
        <div className="flex items-center justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-md">
          <div className="flex items-center space-x-3">
            <ArrowLeftRight className="text-blue-500 dark:text-blue-300" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Mark as Completed
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                You can revert this action anytime.
              </span>
            </div>
          </div>
          <Switch
            checked={selectedTask?.status}
            onCheckedChange={() =>
              handleCheckedChange(selectedTask.id, selectedTask.status)
            }
            className="ml-auto"
          />
        </div>

        {/* Due Date */}
        <div className="flex items-center space-x-3">
          <CalendarCheck2 className="text-yellow-500 dark:text-yellow-300" />
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700 dark:text-gray-300">
              {momentDate(selectedTask?.dueDate)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Due Date
            </span>
          </div>
        </div>

        {/* Task Priority */}
        <div className="flex items-center space-x-3">
          <BookmarkMinus className="text-green-500 dark:text-green-300" />
          <div className="flex flex-col">
            <PriorityBadge priority={selectedTask?.priority || "Low"} />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Priority
            </span>
          </div>
        </div>

        {/* Location Reminder */}
        <div className="flex items-center space-x-3">
          <MapPin className="text-red-500 dark:text-red-300" />
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-700 dark:text-gray-300">
              {selectedTask?.location_reminder || "No location set"}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Location Reminder
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
