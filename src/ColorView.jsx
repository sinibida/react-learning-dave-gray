import colorNames from 'colornames'
import React from 'react'

/**
 * is the color(in hex) dark?
 * @param {string} hex color in hex value
 * @returns {bool} true if dark
 */
function isDark(hex) {
  if (hex === undefined)
    return false;
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)

  return (r + g + b) / 3 < 128
}

function ColorView({
  color
}) {
  return (
    <div
      className='color-view'
      style={{
        backgroundColor: color,
        color: isDark(colorNames(color)) ? "white" : "initial",
      }}
    >
      <p>{color || "Empty value"}</p>
      <p>{colorNames(color) || ""}</p>
    </div>
  )
}

export default ColorView