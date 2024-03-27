import React from 'react'

function Footer({
  length
}) {
  const lengthText = `${length} ${
    length === 1 ? 
    "item" : 
    "items"
  }`
  return (
    <footer className='footer'>
        Copyright ⓒ 2024 ({lengthText})
    </footer>
  )
}

export default Footer