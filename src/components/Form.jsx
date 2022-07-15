import React from 'react'

const Form = () => {
  const formHandler = (e) => {
    e.preventDefault();
  }
  
  return (
    <form className='form' onSubmit={formHandler}>
      <input className='input input-text' type="text" placeholder='clean my room' />
      <button className='btn btn-add'>Add</button>
    </form>
  )
}

export default Form