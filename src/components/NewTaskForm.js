import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  })

  const optionElements = categories.map(category=>{
    if(category !== "All")
    return <option key={category} value={category}>{category}</option>
  })

  function handleFormChange(event){
    const name = event.target.name
    const value = event.target.value
    
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  return (
    <form className="new-task-form" onSubmit={e=>{
      e.preventDefault()
      onTaskFormSubmit(newTask)
      setNewTask({text:"", category:"Code"})
      }}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleFormChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
