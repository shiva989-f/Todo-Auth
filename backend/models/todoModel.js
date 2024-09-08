import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: [true, "Todo is required"]
  },
  email: {
    type: String,
    required: true
  },
}, {timestamps: true});

export const todoModel =  mongoose.model("Todo", todoSchema)