import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList({tasks}) {
  const taskElements = tasks.map(task=>{
      return <Task key={uuid()} text={task.text} category={task.category}/>
    }
  )

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
