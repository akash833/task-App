import React from "react";
import { TaskActionCard } from "./Task-action-card";
import { ScrollArea } from "../ui/scroll-area";

const TaskDetailsCard = ({ selectedTask, setTask }) => {
  return (
    <div className="h-[calc(100vh-10rem)] rounded-md ml-8 mt-2 mb-20 bg-white dark:bg-gray-700 w-full p-5">
      {/* task actions here */}
      <TaskActionCard
        selectedTask={selectedTask}
        className={"dark:bg-gray-800 dark:border-gray-700"}
        setTask={setTask}
      />

      {/* Task description */}
      <ScrollArea className="h-[calc(100vh-36rem)] p-3 m-2">
        <p className="text-neutral-500 dark:text-neutral-300">
          {selectedTask?.description || ""}
        </p>
      </ScrollArea>
    </div>
  );
};

export default TaskDetailsCard;
