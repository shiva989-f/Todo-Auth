"use client"
import axios from "axios"
import Login from "../components/Login"
import Navbar from "../components/Navbar"
import Todo from "../components/Todo"
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import baseURL from '../utils/constant'

const page = () => {
  const { data: session } = useSession()

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [updateUI, setUpdateUI] = useState(false)

  // This effect execute when user already exist and fetch all the todos of the user. 
  // axios.post(url, data) url of the api endpoint, and data which we have to send in req body. When you make a POST request with Axios. The data object is sent as the request body by default. If the API expects the data to be in a specific format (like JSON), Axios automatically sets the Content-Type: application/json header for you unless you specify otherwise. 'then' function gets the data sended back by server in response
  useEffect(() => {
    axios.post(`${baseURL}/get`, {email: session?.user?.email}).then(res => {
      console.log(res.data);
      setTodos(res.data)
    })
  }, [session?.user, updateUI])

  // if user is not login show login page
  if (!session?.user) {
    return <Login />;
  }

  const addTodo = ()=> {
        axios.post(`${baseURL}/save`, {
        todo: input,
        email: session?.user?.email,
      }).then(res => {
        console.log(res.data)
        setInput("")
        setUpdateUI((prevState)=> !prevState)
      }).catch(err => console.log(err))
    
  }

  return (
    <main className="main-container">
      <Navbar />

      <div className="input-container">
        <input type="text" className="todo-input" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Add your todos..." />
        <button className="todo-add-btn" onClick={addTodo}>Add</button>
      </div>

      <ul className="show-todos">
        {/* Maping todo data and passing id as key and id with todo text as a prop in todo component and setUpdateUI state */}
        {todos.map((item) => (<Todo key={item._id} id={item._id} todo={item.todo} setUpdateUI= {setUpdateUI}></Todo>))}
      </ul>

    </main>
  );
}

export default page
