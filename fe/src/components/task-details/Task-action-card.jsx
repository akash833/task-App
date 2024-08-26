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
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`
      );
      setTask(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleDeleteButton = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`);
    } catch (err) {
      console.error("Failed to delete the task");
    }
  };

  const momentDate = (date) => {
    return moment(date).format("MM/DD/YYYY");
  };

  return (
    <Card className={className}>
      {/* Edit and Delete action buttons */}
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle>{selectedTask?.title || ""}</CardTitle>
        <div>
          <Button
            variant="ghost"
            className="text-blue-400 hover:text-blue-400"
            size="sm"
            onClick={() => router.push(`/task/${selectedTask?.id}`)}
          >
            <Pencil size={20} />
          </Button>
          <Button
            variant="ghost"
            className="text-red-400 hover:text-red-400"
            size="sm"
            onClick={() => handleDeleteButton(selectedTask?.id)}
          >
            <Trash2 size={20} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* Task Status Mark Part */}
        <div className=" flex items-center space-x-4 rounded-md border p-4 dark:border-gray-600">
          <ArrowLeftRight />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Mark the status as completed
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              you can revert your action as well.
            </p>
          </div>
          <Switch
            defaultChecked={selectedTask?.status}
            onCheckedChange={() =>
              handleCheckedChange(selectedTask.id, selectedTask.status)
            }
          />
        </div>

        {/* Due Date, Task Priority & Location Reminder part */}
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <CalendarCheck2 size={18} className="text-yellow-600" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {momentDate(selectedTask?.dueDate)}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Due Date
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <BookmarkMinus size={18} className="text-green-500" />
            <div className="space-y-1">
              <PriorityBadge priority={selectedTask?.priority || ""} />
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Task Priority
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <MapPin size={18} className="text-red-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {selectedTask?.location_reminder || ""}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Location Reminder
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
