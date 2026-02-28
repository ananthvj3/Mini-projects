import React, { useRef, useState,useEffect } from 'react'
import Todoitem from './Todoitem'


const Todo = () => {
const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")):[]);

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])

const inputRef=useRef();

const addTask = () =>{
    const inputText =inputRef.current.value.trim();
    if(inputText===""){
        return null;
    }
    const newTodo={
        id:Date.now(),
        text:inputText,
        isComplete:false,
    };
    setTodoList((prev)=>[...prev,newTodo]);
    inputRef.current.value="";

};

const toggleTask=(id)=>{
    setTodoList((prev)=>{
        return prev.map((todo)=>{
            if(id === todo.id){
                return{...todo,isComplete: !todo.isComplete}
            }
            return todo;
        });
    });
};

const deleteTodo=(id)=>{
    setTodoList((prev)=>
        prev.filter((list) => list.id !== id)
    )
}
    return (
        <>
            <div className='max-w-[80vw] mx-auto'>
                <h1 className='text-lg my-2 font-medium text-amber-500 text-center'>To-Do List</h1>

                <div className='flex gap-2'>
                    <div  className='flex-1'>
                        <input ref= {inputRef} type="text" name="" placeholder='Add your Task'
                         className='py-3 px-4 w-full bg-white text-sm
                         border focus:outline-none focus:border-amber-500
                         '/>
                       
                    </div>
                     <button className='py-3 px-4 bg-blue-600 text-white
                        hover:bg-blue-700 cursor-pointer text-sm font-medium rounded-sm
                        ' onClick={addTask}>Add Task</button>
                </div>

                <p className='my-3 text-sm text-zinc-400'>Fill task details</p>
            </div>

            <div className='max-w-[80vw] bg-white shadow  py-6 px-4 mx-auto'>
                <fieldset className='space-y-3'>
                    <legend className='text-pink-600 font-medium'>List of tasks</legend>
                    {todoList.length === 0 ? (<p className='text-gray-500 text-sm'>No task found</p>)
                    :(
                       todoList.map((todo,index)=>{
                        return <Todoitem text ={todo.text} key={index}  isComplete ={todo.isComplete}
                        id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo}/>
                       }) 
                    ) }
                </fieldset>
            </div>

        </>
    )
}

export default Todo