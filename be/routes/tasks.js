import { Router } from "express";
import {
  createTaskHandler,
  getTasksHandler,
  getTaskDetailHandler,
  updateTaskHandler,
  deleteTaskHandler,
} from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.post("/", createTaskHandler); // create task
taskRouter.get("/", getTasksHandler); // get all tasks
taskRouter.get("/:id", getTaskDetailHandler); // get task by id
taskRouter.put("/:id", updateTaskHandler); //
taskRouter.delete("/:id", deleteTaskHandler);

export default taskRouter;
