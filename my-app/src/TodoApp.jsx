import { useReducer, useState } from "react";

function TodoApp(){
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, { id: Date.now(), text: action.payload, completed: false }]
            case 'toggle':
                return state.map(todo=>
                    todo.id === action.payload ? {...todo, completed: !todo.completed}: todo
                )
            case 'delete': 
                return state.filter(todo=>
                    todo.id !== action.payload
                )  
                
                default:
                    throw new Error("Unknown action type");    
        }
    }

    const [todos,dispatch]=useReducer(reducer, [])
    const [input, setInput]=useState()

    const handleAddTodo = ()=>{
        console.log(input, 'sdf')
        if (input.trim()) {
            dispatch({ type: "add", payload: input });
            setInput("");
          }
    }

    return (
        <div style={{ margin: "20px" }}>
            <h1>Todo</h1>

            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={handleAddTodo} >Add</button>

            <ul>
                {todos.map(todo => {
                    return (

                        <li key={todo.id}>
                        <span style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            cursor: "pointer",
                        }} onClick={() => { dispatch({ type: 'toggle', payload: todo.id }) }}>
                            {todo.text}
                        </span>
                        <button onClick={()=>{dispatch({type: 'delete',payload: todo.id})}}>Delete</button>
                    </li>)
                })}
            </ul>

           

        </div>
    )
}

export default TodoApp