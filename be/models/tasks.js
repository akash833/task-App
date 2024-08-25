import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priorityLevel: {
    type: String,
    required: true,
    enum: ["high", "medium", "low"],
  },
  createdAt: { type: Date, default: Date.now },
});

const TasksModel = model("tasks", TaskSchema);
export default TasksModel;
