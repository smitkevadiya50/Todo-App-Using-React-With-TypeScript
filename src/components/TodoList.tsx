import React from 'react'
import "./style.css"
import Todo from './model'
import SingleTodo from './singleTodo'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map(todo=>(
        <SingleTodo todo={todo} setTodos={setTodos} todos={todos}/>
      ))}
    </div>
  )
}

export default TodoList
