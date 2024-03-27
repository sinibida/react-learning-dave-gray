import React from 'react'

function Header({ title }) {
  return (
    <div className='header'>
        <h1>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: "Header?"
}

export default Header