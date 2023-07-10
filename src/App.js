import "./App.css";
import { useState } from 'react'
import { Task } from './Task'
function App() 
{
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("")
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName:newTask,
      completed:false
    };
setTodoList([...todoList,task]);
  };
  const deleteTask=(id)=>{
    setTodoList(todoList.filter((task)=> task.id!==id ))
  };
  const completeTask=(id)=>{
  setTodoList(
    todoList.map((task)=> {
    if(task.id===id)
    {
      return {...task , completed:true};
    }
    else{
      return task;
    }
  }
  ))
  };
  return (
    <div className="App">
      <div className="addTask"><h1>React To-do List</h1>
      <input placeholder="Enter a Task..." onChange={handleChange} />
      <button onClick={addTask }><b>ADD TASK</b></button></div>
      <div className="list">
        {todoList.map((task)=>{
           return <Task 
           taskName={task.taskName} 
           id={task.id}
            deleteTask={deleteTask}
            completed={task.completed}
            completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}
//States-->variable to hold data
//Component-->Javascript function that returns some sort of UI/JSX
//props is an object used as an arguement in a component in which all kind of data id passed inside it.
export default App;
