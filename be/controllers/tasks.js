import mongoose from "mongoose";
import {
  createTask,
  getTasks,
  getTaskDetailById,
  updateTask,
  deleteTask,
} from "../services/tasks.js";

const ObjectId = mongoose.Types.ObjectId;
export const createTaskHandler = async (req, res) => {
  try {
    const { id } = await createTask(req.body);
    return res.status(201).json({
      id,
      message: "Task created successfully",
    });
  } catch (err) {
    console.error("Error while creating task:", err.message);
    res.status(500).json({ message: "Error while creating task" });
  }
};

export const getTasksHandler = async (req, res) => {
  try {
    const tasks = await getTasks();
    return res.status(200).json(tasks);
  } catch (err) {
    console.error("Error while fetching tasks:", err.message);
    res.status(500).json({ message: "Error while fetching tasks" });
  }
};

export const getTaskDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const task = await getTaskDetailById(id);
    return res.status(200).json(task);
  } catch (err) {
    console.error("Error while fetching task details:", err.message);
    if (err.message === "Task not found") {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error while fetching task details" });
  }
};

export const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const updatedTask = await updateTask(id, req.body);
    return res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (err) {
    console.error("Error while updating task:", err.message);
    if (err.message === "Task not found") {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error while updating task" });
  }
};

export const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    await deleteTask(id);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error while deleting task:", err.message);
    if (err.message === "Task not found") {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error while deleting task" });
  }
};
