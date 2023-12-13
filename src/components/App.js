
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const handleInputChange = (e) => {
      setTaskInput(e.target.value);
    };
  
    const addTask = () => {
      if (taskInput.trim() !== '') {
        setTasks([...tasks, taskInput]);
        setTaskInput('');
      } else {
        alert('Please enter a task!');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div className="todo-container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Todo</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>
              {task}
                </div>
              <button onClick={() => deleteTask(index)}>lete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
    
    
  return (
    <div>
        {/* Do not remove the main div */}
        <TodoList/>
    </div>
  )
}

export default App
