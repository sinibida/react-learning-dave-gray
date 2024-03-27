import React from 'react'
import ListView from './ListView';

function Content({
  items,
  handleDelete,
  handleCheck
}) {
  return (
    <div className='content'>
      {
        items.length > 0 ? (
          <ListView
            items={items}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ) : (
          <p><i>The list is empty.</i></p>
        )
      }
    </div>
  )
}

export default Content