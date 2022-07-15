import React from 'react'

const ListItem = ({ desc }) => {
  return (
    <div className='list-item'>
      <span className='desc'>{desc}</span> 
      <button className='btn btn-delete'>&times;</button>
    </div>
  )
}

export default ListItem