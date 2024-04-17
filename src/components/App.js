import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("")
  const [filteredTasks, setFilteredTasks] = useState(TASKS)

  function handleCategorySelect(category){
    setSelected(category)

    if (category === "All"){
      setFilteredTasks(TASKS)
    } else {
      const filtered = TASKS.filter(task=> task.category === category)
      setFilteredTasks(filtered)
    }
  }

  function handleNewTaskFormSubmit(newTask){
    setSelected("")
    setFilteredTasks([
      ...TASKS,
      newTask
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} onSelectCategory={handleCategorySelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskFormSubmit}/>
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
