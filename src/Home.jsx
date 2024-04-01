import React from 'react'

import Feed from './Feed'

function Home({
  posts
}) {
  return (
    <main className="Home">
      {posts.length > 0 ? (
        <Feed posts={posts}/>
      ) : (
        <i>No posts here...</i>
      )}
    </main>
  )
}

export default Home
