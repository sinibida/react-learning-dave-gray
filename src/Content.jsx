import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // !!!

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of nacho chips",
    },
    {
      id: 2,
      checked: true,
      item: "A carton of milk",
    },
    {
      id: 3,
      checked: false,
      item: "A box of apples",
    },
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item) // Checked 적용
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className='content'>
      {
        items.length > 0 ? (
          <ul className='item-list'>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label
                  style={(item.checked) ? {
                    textDecoration: "line-through"
                  } : null}
                  onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt
                  role='button' 
                  tabIndex={0}
                  onClick={() => handleDelete(item.id)}
                />
                {/* ^^^ <svg>로 렌더링 됨 */}
              </li>
            ))}
          </ul>
        ) : (
          <p><i>The list is empty.</i></p>
        )
      }
      
    </div>
  )
}

export default Content