import React, { useState } from 'react';
import './App.css';
import InputeFeild from './components/InputeFeild';
import Todo from './components/model'
import TodoList from './components/TodoList'

/* let name: string = "Smit Kevadiya";
let age:number | string = 23;
let skills: string[]= [];
type person = {
  name:string;
  age?: number;
}

let Person: person = {
   name: 'Smit',
   age: 22
}

let lostOfPeople: person[];
lostOfPeople= [Person];

function prtinNumber(num:number){
  console.log(num);
}
prtinNumber(23);

let printName: (name: string) => never; */

const App: React.FC=()=> {
  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = (e: React.FormEvent)=> {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isCompleted:false}]);
      setTodo("");
      console.log(todos);
    }
  
  };
  

  return (
    <div className="App">
      <span className='heading'>Tasks</span>
      <InputeFeild setTodo={setTodo} todo={todo} onSubmit={onSubmit}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
