import React from 'react'
import ListItem from './ListItem'

function ListView({
  dataList
}) {
  return (
    <ul>
      {dataList.map((data, i) => (
        <ListItem
          key={i}
          data={data}
        />
      ))}
    </ul>
  )
}

export default ListView