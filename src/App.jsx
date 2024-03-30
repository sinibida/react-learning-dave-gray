import './App.css';
import TabButton from './TabButton';
import ListView from './ListView';
import { useEffect, useState } from 'react';
import TableView from './TableView';

const API_URL = "https://jsonplaceholder.typicode.com"

function App() {
  const [openedTab, setOpenedTab] = useState(["users"])
  const tabs = [
    {
      text: "Users",
      target: "users",
    },
    {
      text: "Posts",
      target: "posts",
    },
    {
      text: "Comments",
      target: "comments",
    },
  ]

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    (async () => {
      const respond = await fetch(`${API_URL}/${openedTab}`);
      const json = await respond.json();
      setDataList(json);
    })()
  }, [openedTab]);

  return (
    <>
      <header>
        <form
        className='header-form'
        onSubmit={e => e.preventDefault()}
        >
          {
            tabs.map((tab) => (
              <TabButton
                key={tab.target}
                {...tab}
                active={tab.target === openedTab}
                setOpenedTab={setOpenedTab}
              />
            ))
          }
        </form>
      </header>
      <main>
        {/* <ListView
          dataList={dataList}
        /> */}
        <TableView
          dataList={dataList}
        />
      </main>
    </>
  );
}

export default App;
