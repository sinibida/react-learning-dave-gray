import React from 'react'
import { Link } from 'react-router-dom'

function Header({
  title
}) {
  return (
    <header className='Header'>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </header>
  )
}

export default Header
