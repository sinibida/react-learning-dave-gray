import React from 'react'

function ListItem({
  data
}) {
  return (
    <li>
      {JSON.stringify(data)}
    </li>
  )
}

export default ListItem