import React from 'react'

function TableView({
  dataList
}) {
  const keys = dataList.length === 0 ? 
    [] :
    Object.keys(dataList[0]);
  return (
    dataList.length === 0 ? (
      <p>
        No Data to Show.
      </p>
    ) : (
      <table className='data-table'>
        <thead>
          <tr>
            {keys.map(key => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList.map(data => (
            <tr>
              {Object.values(data).map(x => (
                <td>{JSON.stringify(x)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  )
}

export default TableView