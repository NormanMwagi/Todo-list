import './Style.css';
import { useState } from 'react';

const Task = () => {
    const[task, setTask] = useState('');
    const[tasks, setTasks] = useState([]);
    console.log(task);

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!task) return;

        const fakeId = Date.now();
        const newTask = {id: fakeId, task: task};
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setTask('');
     }

  return (
    <div>
    <form
     className='myform'
     onSubmit={handleSubmit}>

     <input 
     type='text' 
     onChange={(e) => setTask(e.target.value)}
     value={task}
     placeholder="Enter a task"  
     className='myinput'
     />
     <button type="submit" className='btn'>Add</button>
    </form>
    <ul>
    {
        tasks.map((todo) => {
            
            return <li key={todo.id}>
              <span className='text'>{todo.task}</span>
              </li>
        }
    )}
    </ul>
    </div>
  )
}

export default Task
