import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"
import { markAsDone } from "../features/todo/todoSlice"
export default function Todo(){
    const todos= useSelector((state)=>state.todos)
    console.log(todos)
    
    
    let dispatch=useDispatch();
     
    let handleTodo=(id)=>{
        console.log("delete ",id)
        dispatch(deleteTodo(id));
     }
     let handleDone=((id)=>{
        console.log("Mark as TRUE",id)
        dispatch(markAsDone(id))
     })
    return (
        <>
        <AddForm/>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} style={{ color: todo.isDone ? 'green' : 'white' }}>{todo.task}
                <button onClick={()=>handleTodo(todo.id)}>Delete</button>
                <button onClick={()=>handleDone(todo.id)}>Mark as Done</button>
                </li>
            ))}
        </ul>
        </>
    )
}