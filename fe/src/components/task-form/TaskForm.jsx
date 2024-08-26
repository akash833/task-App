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
import { useEffect, useState } from "react";
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
  const setValue = form.setValue;

  useEffect(() => {
    if (taskAction !== "add") {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskAction}`)
        .then((response) => {
          const { title, description, dueDate, priority, location_reminder } =
            response.data;
          setValue("title", title);
          setValue("description", description);
          setValue("dueDate", format(dueDate, "yyyy-MM-dd"));
          setValue("priority", priority);
          setValue("location_reminder", location_reminder);
        })
        .catch((error) => {
          console.error("Failed to fetch task:", error);
        });
    }
  }, [taskAction, setValue]);

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

    if (taskAction === "add") {
      // API call to add a new task
      await addTask(formattedValues);
    } else {
      await editTask(taskAction, formattedValues);
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
            {/* title  */}
            <FormInput
              name="title"
              placeholder={"Enter title"}
              control={form.control}
              label={"Title"}
              type={"text"}
              error={errors?.title?.message}
            />

            {/* description */}
            <FormInput
              name={"description"}
              placeholder={"Enter description"}
              control={form.control}
              label={"Description"}
              type={"text"}
              error={errors?.description?.message}
            />

            {/* Location Reminder */}
            <FormInput
              name={"location_reminder"}
              placeholder={"Enter Location"}
              control={form.control}
              label={"Location Reminder"}
              type={"text"}
              error={errors?.location_reminder?.message}
            />

            {/* Priority */}
            <FormSelect
              name={"priority"}
              placeholder={"Enter Priority"}
              control={form.control}
              label={"Priority"}
              error={errors?.priority?.message}
              options={selectOptions}
            />

            {/* Due Date */}
            <FormDatePicker
              name={"dueDate"}
              placeholder={"Enter Due Date"}
              control={form.control}
              label={"Due Date"}
              error={errors?.due_date?.message}
              setDate={form.setValue}
            />
          </div>
          <Button
            type="submit"
            disabled={form.isSubmitting}
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
