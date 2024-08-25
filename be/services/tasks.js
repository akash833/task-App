import mongoose from "mongoose";
import TasksModel from "../models/tasks.js";

const ObjectId = mongoose.Types.ObjectId;

export const createTask = async (taskBody) => {
  const { title, description, dueDate, priorityLevel } = taskBody;

  const task = await TasksModel.create({
    title,
    description,
    dueDate,
    priorityLevel,
  });
  return { id: task._id };
};

export const getTasks = async () => {
  try {
    const tasks = await TasksModel.find().sort({ dueDate: 1 });
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
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid task ID");
  }

  const deletedTask = await TasksModel.findByIdAndDelete(id);
  if (!deletedTask) {
    throw new Error("Task not found");
  }

  return { message: "Task deleted successfully" };
};
