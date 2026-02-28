import React, { useState } from 'react';
import "../App.css";
import Todo from './Todo';

const Todolist = () => {
 
  return (
    <>
      <div className='max-w-[100vw] h-screen px-4 py-10  mx-auto 
        bg-slate-900
      '>
        <Todo/>

      </div>

    
    </>
  );
};

export default Todolist;

