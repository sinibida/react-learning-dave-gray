import React from 'react'
import LineItem from './LineItem';

function ListView({
  items,
  handleDelete,
  handleCheck
}) {
  return (
    <ul className='item-list'>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ListView