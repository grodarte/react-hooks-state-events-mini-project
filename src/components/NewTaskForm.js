import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("")
  const [taskCategory, setTaskCategory] = useState("Code")

  const categoryElements = categories.map(category=>{
    if(category !== "All") return <option key={category} value={category}>{category}</option>
  })

  function handleTextChange(e){
    const value = e.target.value
    setTaskText(value)
  }

  function handleCategoryChange(e){
    const value = e.target.value
    setTaskCategory(value)
  }

  function handleSubmit(){
    const newTask = {
      text: taskText,
      category: taskCategory
    }

    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategoryChange}>
          {categoryElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
