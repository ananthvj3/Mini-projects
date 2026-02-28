import React from 'react'

const Todoitem = ({ text, isComplete, id, toggleTask, deleteTodo }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <label
          className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${
            isComplete ? 'line-through text-slate-600' : ''
          }`}
          onClick={() => toggleTask(id)}
        >
          {text}
        </label>
        <div>
          <button
            className="px-3 py-2 bg-red-600 text-white rounded-sm hover:bg-red-800 cursor-pointer"
            onClick={() => deleteTodo(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  )
}

export default Todoitem
