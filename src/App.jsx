import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My 1st Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum Blah Blah",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum Blah Blah Blah",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum Blah",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem Ipsum Blah Blah Blah Lorem Ipsum Blah Blah Blah Lorem Ipsum Blah Blah Blah",
    },
  ])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newPosts = posts.filter(x => x.id != id);

    setPosts(newPosts);
    navigate("/");
  }
  
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1
    const datetime = format(new Date(), 'MMMM dd, yyyy HH:mm:ss aa');

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    }
    const newPosts = [
      ...posts,
      newPost,
    ];

    setPosts(newPosts);
    navigate("/");
  }

  useEffect(() => {
    const filteredResults = posts.filter(post => (
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    ))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  return (
    <div className="App">
      <Header title="SPAUPA's React JS Blog"/>
      <Nav
      search={search}
      setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={
          <Home posts={
            searchResults
          }/>
        }/>
        <Route path="/post" element={
          <NewPost
            handleSubmit={handleSubmit}
            postBody={postBody}
            setPostBody={setPostBody}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
          />
        }/>
        <Route path="/post/:id" element={
          <PostPage 
            posts={posts} 
            handleDelete={handleDelete}
          />
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
