import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const PriorityBadge = ({ priority }) => {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border p-2 rounded-md h-5",
        priority === "Low"
          ? "border-orange-300 dark:border-orange-500 text-orange-600 bg-orange-100 dark:bg-orange-500"
          : priority === "Medium"
          ? "border-red-400 dark:border-red-500 text-red-400 bg-red-100 dark:bg-red-500"
          : "border-red-700 dark:border-red-700 text-red-600 bg-red-100 dark:bg-red-600"
      )}
    >
      {priority || ""}
    </Badge>
  );
};

export default PriorityBadge;
