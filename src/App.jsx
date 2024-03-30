import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "https://sturdy-space-bassoon-pg46qjxvpjxh9wvg-3500.app.github.dev/items";

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) // !!!
          throw Error("Response Not OK");
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false); // 'finally' !!!
      }
    }

    (async () => await fetchItems())();
  }, [])

  // useEffect(() => {
  //   localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(items));
  // }, [items])

  const addItem = async (itemName) => {
    const id = items.length === 0 ? 
      "1" : 
      (parseInt(items[items.length - 1].id) + 1).toString();
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

    // API POST

    /**
     * @type {RequestInit}
     */
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem),
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) // If error exists
      setFetchError(result)
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item) // Checked 적용
    setItems(listItems);

    // API PATCH

    // const myItem = items.find((item) => item.id === id);
      // 오답노트 240330
      // items X | listItems O
      // set되기 이전 변수 사용 X
      // 이상 현상: checked value가 반대로(변경 전 값으로) API에 저장됨
    const myItem = listItems.find((item) => item.id === id);
    /**
     * @type {RequestInit}
     */
    const postOptions = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({checked: myItem.checked}),
    }
    const reqUrl = `${API_URL}/${id}` // !!!
    const result = await apiRequest(reqUrl, postOptions);
    if (result) // If error exists
      setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);

    // API DELETE

    /**
     * @type {RequestInit}
     */
    const postOptions = {
      method: "DELETE",
    }
    const reqUrl = `${API_URL}/${id}` // !!!
    const result = await apiRequest(reqUrl, postOptions);
    if (result) // If error exists
      setFetchError(result)
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
      <main className='content'>
        {
          isLoading && (// only if fetchError is true
            <p className='loading'>
              Loading...
            </p>
          )
        }
        {
          fetchError && (// only if fetchError is true
            <p className='fetch-error'>
              Error: {fetchError}
            </p>
          )
        }
        {
          !isLoading && !fetchError && ( // only if fetchError is false
            <Content
              items={items.filter((x) => (
                x.item.toLowerCase().includes(search.toLowerCase()) // !!
              ))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )
        }
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
