import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const displayTasks = tasks.filter(task=>{
    if(!selectedCategory || selectedCategory === "All"){
      return true
    } else {
      return task.category === selectedCategory
    }
  })

  function handleDeleteTask(deletedTaskText){
    const newTasks = tasks.filter(task=>{
      return task.text === deletedTaskText ? false : true
    })

    setTasks(newTasks)
  }

  function handleCategoryClick(clickedCategory){
    setSelectedCategory(clickedCategory)
  }

  function handleTaskFormSubmit(newTask){
    setTasks([
      ...tasks,
      newTask
    ])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={displayTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
