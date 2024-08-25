"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ placeholder, field, setDateForm }) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[340px] justify-start text-left font-normal dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "yyyy-MM-dd")
          ) : field?.value ? (
            format(field?.value, "yyyy-MM-dd")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={new Date(field?.value) || date}
          onSelect={(date) => {
            setDate(date);
            setDateForm("due_date", date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
