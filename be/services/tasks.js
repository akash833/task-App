import mongoose from "mongoose";
import TasksModel from "../models/tasks.js";

const ObjectId = mongoose.Types.ObjectId;

export const createTask = async (taskBody) => {
  const { title, description, dueDate, priority, location_reminder } = taskBody;

  const task = await TasksModel.create({
    title,
    location_reminder,
    description,
    dueDate,
    priority,
  });
  return { id: task._id };
};

export const getTasks = async (sort, search, filter) => {
  try {
    const filterTask = {};
    if (filter === "Completed") {
      filterTask["status"] = true;
    } else if (filter === "Pending") {
      filterTask["status"] = false;
    }
    const tasks = await TasksModel.aggregate([
      {
        $match: {
          $or: [
            {
              title: {
                $regex: search ? search : "",
                $options: "i", // Case-insensitive search
              },
            },
            {
              description: {
                $regex: search ? search : "",
                $options: "i", // Case-insensitive search
              },
            },
          ],
          ...filterTask,
        },
      },
      {
        $project: {
          id: "$_id",
          _id: false,
          title: true,
          description: true,
          location_reminder: true,
          dueDate: true,
          priority: true,
          status: true,
          createdAt: true,
        },
      },
      {
        $sort: {
          createdAt: sort === "asc" ? 1 : -1,
        },
      },
    ]);
    return tasks;
  } catch (error) {
    throw new Error("Error fetching tasks");
  }
};

export const getTaskDetailById = async (id) => {
  const task = await TasksModel.findById(id);
  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

export const updateTask = async (id, updateBody) => {
  const updatedTask = await TasksModel.findByIdAndUpdate(id, updateBody, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    throw new Error("Task not found");
  }

  return updatedTask;
};

export const deleteTask = async (id) => {
  const deletedTask = await TasksModel.findByIdAndDelete(id);
  if (!deletedTask) {
    throw new Error("Task not found");
  }

  return { message: "Task deleted successfully" };
};
