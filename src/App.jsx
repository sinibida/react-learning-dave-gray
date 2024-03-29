import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

const SHOPPING_LIST_KEY = "shoppingList"

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(SHOPPING_LIST_KEY)) ||
    []
  )
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(items));
  }, [items])

  const addItem = (itemName) => {
    const id = items.length === 0 ? 1 : items[items.length - 1].id + 1;
    // ?: 만약 items의 순서가 바뀐다면?

    const newItem = {
      id,
      checked: false,
      item: itemName,
    }
    const listItems = [ // !!!
      ...items,
      newItem
    ]
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item) // Checked 적용
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem || newItem === "") return; // Gaurd

    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='app'>
      <Header title="Groceries"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <hr/>
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter((x) => (
          x.item.toLowerCase().includes(search.toLowerCase()) // !!
        ))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
