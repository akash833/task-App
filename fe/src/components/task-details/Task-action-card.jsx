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
import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "@/redux/slices/task-slice";

export function TaskActionCard({ className, selectedTask }) {
  const router = useRouter();
  const dispatch = useDispatch();

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
            defaultChecked={selectedTask?.isCompleted}
            onCheckedChange={() =>
              dispatch(toggleTaskCompletion(selectedTask.id))
            }
          />
        </div>

        {/* Due Date, Task Priority & Location Reminder part */}
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <CalendarCheck2 size={18} className="text-yellow-600" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {selectedTask?.due_date}
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
