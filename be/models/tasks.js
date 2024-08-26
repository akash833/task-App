import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  location_reminder: String,
  priority: {
    type: String,
    required: true,
    enum: ["High", "Medium", "Low"],
  },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const TasksModel = model("tasks", TaskSchema);
export default TasksModel;
