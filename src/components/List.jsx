import React from 'react'
import ListItem from './ListItem'

const List = () => {
  return (
    <div className='list'>
      <ListItem desc="Task 1" />
      <ListItem desc="Task 2" />
      <ListItem desc="Task 3" />
      <ListItem desc="Task 4" />
      <ListItem desc="Task 5" />
    </div>
  )
}

export default List