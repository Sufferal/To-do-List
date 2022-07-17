import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/TodoList';
import Footer from './components/Footer';
import { v4 as uuid } from "uuid";


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Eat", completed: true },
    { id: 2, name: "Code", completed: true },
    { id: 3, name: "Repeat", completed: false  },
  ]);

  const addTask = (name) => {
    const newTask = {
      "id": uuid(),
      "name": name
    };
   
    setTasks([...tasks, newTask]);
  }
  
  const deleteTask = (id) => {
    const leftTasks = tasks.filter(task => id !== task.id);
    setTasks(leftTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(id === task.id) {
        return {
          ...task, 
          completed: !task.completed
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className='container'>
      <Form addTask={addTask} />
      {tasks.length !== 0 
        ? <List tasks={tasks} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} /> 
        : <h2 className='list-no-items'>Nothing to show ¯\_(ツ)_/¯</h2>
      }
      <Footer />
    </div>
  );
}

export default App;
