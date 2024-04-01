import React from 'react'

import { Link } from 'react-router-dom'

function Missing() {
  return (
    <main className='Missing'>
      <p>Post Not Found</p>
      <Link to={"/"}>
        &gt; Go to the Homepage.
      </Link>
    </main>
  )
}

export default Missing
