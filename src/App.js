import React, {useState} from 'react';
import { listwithId } from './list';
import './App.css';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

function App() {
  const [list,setList] = useState([...listwithId])

  const handleDelete = (id) => {
    setList(prev => [...prev].filter(elem => elem._id !== id)) 
  }

  const handleAddTask = (newTask) => {
    let newlist = [...list]
    console.log(newTask)
    list.push(newTask)
    setList(newlist)
  }


  return (
    <div className="App">
    <h1>Lista tareas</h1> 
    <div>
    <h3>Add task</h3>
    <AddTask handleAddTask={handleAddTask}/>
    </div>
    {list.map(elem => 
    <TodoList key={elem._id} task={elem.task} id={elem._id} done={elem.done} handleDelete={handleDelete}/>)}
   
      
    </div>
  );
}

export default App;
