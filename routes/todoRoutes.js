import express from "express";

import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";
import { signin, signup } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/addTodo", isAuth, addTodo);
router.get("/getTodos/todos", isAuth, getTodos);
router.post("/:id", isAuth, updateTodo);
router.delete("/:id", isAuth, deleteTodo);

export default router;
