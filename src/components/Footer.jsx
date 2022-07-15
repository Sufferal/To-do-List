import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
        Made with love 😭 by <a 
        href="https://github.com/Sufferal"
        target="_blank"
        className='link'
        >
          Sufferal
        </a> 
        <br />
        <span className="year">{currentYear}</span>
    </footer>
  )
}

export default Footer