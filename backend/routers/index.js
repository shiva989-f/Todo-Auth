import express from "express";
import todoControllers from "../controllers/todo_controllers.js";

const router = express.Router()

router.post("/get", todoControllers.getTodos)
router.post("/save", todoControllers.saveTodo)

// :id is variable parameter which is present in the link of the site like http://localhost:3000/api/delete/66c984e4d9c9cab2de146168, here 66c984e4d9c9cab2de146168 is the id which is parameter and we can access this using destructuring const {id} = req.param
router.delete("/delete/:id", todoControllers.deleteTodo)

export default router