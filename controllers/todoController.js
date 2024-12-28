import { Todo } from "../models/todo.js";

export const addTodo = async (req, res) => {
  const todo = req.body;
  const newTodo = new Todo(todo);

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.json(400).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    // Extract page and limit from query parameters
    const { page = 1, limit = 10 } = req.query;

    // Convert page and limit to numbers
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    // Validate pagination values
    if (pageNum <= 0 || limitNum <= 0) {
      return res
        .status(400)
        .json({ message: "Page and limit must be positive numbers." });
    }

    // Calculate skip for pagination
    const skip = (pageNum - 1) * limitNum;

    // Fetch to-do items from the database (for the authenticated user)
    const todos = await Todo.find().skip(skip).limit(limitNum);

    // Get the total count of to-do items for pagination
    const total = await Todo.countDocuments();

    // Send paginated response
    res.json({
      data: todos,
      page: pageNum,
      limit: limitNum,
      total,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    let todo = req.body;
    const { _id, ...updateData } = todo;
    await Todo.updateOne({ _id: req.params.id }, updateData);
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
