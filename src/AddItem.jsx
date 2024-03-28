import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem({
  newItem,
  setNewItem,
  handleSubmit,
}) {
  const inputRef = useRef();
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <label htmlFor='add-item'>Add Item</label>
      <input
        autoFocus
        id='add-item'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        ref={inputRef}
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem