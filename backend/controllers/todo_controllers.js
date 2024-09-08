import { todoModel } from "../models/todoModel.js";

const todoController = {

  // Get all todos
    async getTodos(req, res) {
    const { email } = req.body;
    // return all the object from the database which consists same email.
    const todos = await todoModel.find({ email });
    res.send(todos);
  },

  // Save todos
  saveTodo(req, res){
    const {todo, email} = req.body;
    todoModel.create({todo, email}).then((data)=> {
      console.log("Saved...");
      res.status(201).send(data)
    }).catch((err)=> {
      console.log(err)
      res.send({error: err, msg: "Something went wrong!"})
    })
  },

  // Delete todo
  deleteTodo(req, res) {
    const {id} = req.params
    todoModel.findByIdAndDelete(id)
    .then((data)=> {
      console.log("Deleted...");
      res.send({msg: "Deleted..."})
    }).catch((err)=> {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    })
  }
}

export default todoController;