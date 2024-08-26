"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormDatePicker from "./form-date-picker";
import FormSelect from "./form-select";
import FormInput from "./form-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

// form zod schema
const formSchema = z.object({
  title: z.string().min(4, {
    message: "title must be at least 4 characters.",
  }),
  description: z.string().min(10, {
    message: "title must be at least 10 characters.",
  }),
  dueDate: z.any(),
  priority: z.string().min(1, {
    message: "Priority is required",
  }),
  location_reminder: z.string().min(1, {
    message: "Location reminder is required.",
  }),
});

// static select options for selecting task priority
const selectOptions = [
  {
    value: "Low",
    label: "Low",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "High",
    label: "High",
  },
];

export function TaskForm({ defaultValue, taskAction }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue || {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      location_reminder: "",
    },
  });

  // Function to add a new task
  const addTask = async (taskData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks`,
        taskData
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  // Function to edit an existing task
  const editTask = async (taskId, taskData) => {
    try {
      console.log(taskData, "taskData");
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskId}`,
        taskData
      );
      return response.data;
    } catch (error) {
      console.error("Failed to edit task:", error);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    const formattedValues = {
      ...values,
      dueDate: format(values.dueDate, "yyyy-MM-dd"),
    };

    console.log("on submitting");

    if (taskAction === "add") {
      // API call to add a new task
      await addTask(formattedValues);
    } else {
      console.log("edit action");

      // API call to edit an existing task
      await editTask(defaultValue?._id, formattedValues);
    }

    // successfully redirecting it to home
    setIsSubmitting(false);
    router.push("/home");
  };

  const errors = form?.formState?.errors;

  return (
    <div className="h-[calc(100vh-10rem)] rounded-md p-5 mb-20 mt-3 bg-white dark:bg-gray-700">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-3">
            {/* Title  */}
            <FormInput
              name={"title"}
              placeholder={"Enter title"}
              control={form.control}
              label={"Title"}
              type={"text"}
              error={errors?.title?.message}
              value={defaultValue.title}
            />

            {/* Description */}
            <FormInput
              name={"description"}
              placeholder={"Enter description"}
              control={form.control}
              label={"Description"}
              type={"text"}
              error={errors?.description?.message}
              value={defaultValue.description}
            />

            {/* Location Reminder */}
            <FormInput
              name={"location_reminder"}
              placeholder={"Enter Location"}
              control={form.control}
              label={"Location Reminder"}
              type={"text"}
              error={errors?.location_reminder?.message}
              value={defaultValue.location_reminder}
            />

            {/* Priority */}
            <FormSelect
              name={"priority"}
              placeholder={"Enter Priority"}
              control={form.control}
              label={"Priority"}
              error={errors?.priority?.message}
              options={selectOptions}
              value={defaultValue.priority}
            />

            {/* Due Date */}
            <FormDatePicker
              name={"dueDate"}
              placeholder={"Enter Due Date"}
              control={form.control}
              label={"Due Date"}
              error={errors?.dueDate?.message}
              setDate={form.setValue}
              value={defaultValue.dueDate}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
