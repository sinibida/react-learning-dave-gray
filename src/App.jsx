import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

function App() {
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
    <div className='app'>
      <Header title="Groceries"/>
      <Content
        items={items}
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
