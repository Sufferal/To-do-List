import React from 'react'
import ListItem from './Todo'

const List = ({ tasks, deleteTask, toggleTaskCompleted }) => {
  return (
    <div className='list'>
      {tasks.map((task) => (
        <ListItem 
        id={task.id}
        key={task.id} 
        desc={task.name} 
        completed={task.completed}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
         />
      ))}
    </div>
  )
}

export default List