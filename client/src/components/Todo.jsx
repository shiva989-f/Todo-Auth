import React from 'react'
import {RxCross1} from 'react-icons/rx'
import axios from "axios"
import baseURL from '../utils/constant'

// we can get props by two methods first one is this (props) and second is by destructring ({key, id, todo})

const Todo = (props) => {
    const deleteTodo = ()=> {
        axios.delete(`${baseURL}/delete/${props.id}`)
        .then((res)=> {
            console.log(res.data)
            props.setUpdateUI((prevState)=> !prevState)
        }).catch(err => console.log(err))
    }
    return (
        <div className="todo-text">
            {props.todo}

            <div className="delete-btn" onClick={deleteTodo}><RxCross1/></div>
        </div>
    )
}

export default Todo
