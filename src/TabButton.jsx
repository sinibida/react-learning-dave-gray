import React from 'react'
import cn from 'classnames'

function TabButton({
  text,
  target,
  active,
  setOpenedTab,
}) {
  return (
    <button 
    className={cn(
      'tab-button',
      {active}
    )}
    onClick={() => {
      setOpenedTab(target)
    }}
    >
      {text}
    </button>
  )
}

TabButton.defaultProps = {
  text: "Tab"
}

export default TabButton