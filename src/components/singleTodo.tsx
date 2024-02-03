import React, { useState } from 'react'
import Todo from './model';
import { CiEdit } from "react-icons/ci";
import "./style.css"
import { MdDeleteSweep,MdOutlineCheckBoxOutlineBlank,MdLibraryAddCheck } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};



const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);

    const doneTask = (id:number)=>{
        setTodos(
            todos.map((task)=> task.id === id ?{...task,isCompleted:!task.isCompleted} : task )
        );
    }

    const deleteTask = (id:number)=>{
        setTodos(
            todos.filter((todo)=> todo.id!==id)
        );
    }

    const editTask = (id: number)=>{
        setTodos(
            todos.map((task)=>task.id === id ?{...task,todo:editTodo} : task)
        );
    }

  return <form className='todos_single'>
   {
    edit?
    (
    <form className='edit_form'>
        <input className='edit_input' type="text" name={`${todo.id}`} value={editTodo} onChange={(e)=>{
            setEditTodo(e.target.value);
        }}/>
    </form>
    )
    : 
    todo.isCompleted?
    ( <s className='todos_single_text'>{todo.todo}</s>)
    :
    ( <span className='todos_single_text'>{todo.todo}</span>)
   }
    <div>
        {
            edit?
            (<span className='icon' onClick={()=>{
                if(edit){
                    editTask(todo.id);
                    setEdit(false);
                }
            }}><IoCheckmarkOutline /></span>)
            :
            (<span className='icon' onClick={()=> {
                if(!edit && !todo.isCompleted){
                setEdit(!edit);
                }
        }   }><CiEdit/></span>)
        
        }
        <span className='icon' onClick={()=>deleteTask(todo.id)}><MdDeleteSweep/></span>
        {
            todo.isCompleted?
            (        <span className='icon' onClick={()=>doneTask(todo.id)}><MdLibraryAddCheck/></span>
            ):
            (        <span className='icon' onClick={()=>doneTask(todo.id)}><MdOutlineCheckBoxOutlineBlank/></span>
            )
        }
    </div>
  </form>
};

export default SingleTodo
