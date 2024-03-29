import React from 'react'

function ColorInput({
  color,
  setColor,
}) {
  return (
    <input
    className='color-input'
    type="text"
    value={color}
    onChange={e => setColor(e.target.value)}
    placeholder='Add color name'
    aria-label='color'
    autoFocus // !!!
    />
  )
}

export default ColorInput