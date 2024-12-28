import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
});

export const Todo = mongoose.model("Todo", TodoSchema);
