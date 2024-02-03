import React from "react";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (e: React.FormEvent)=>void;
}

const InputeFeild = ({todo, setTodo, onSubmit}: Props) => {
    return (<form className="input" onSubmit={onSubmit}>
        <input 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="input" placeholder="Enter your a task" className="input_box"/>
        <button className="input_button" type="submit">Add</button>
    </form>)
}

export default InputeFeild