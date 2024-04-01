import React from 'react'

import FeedPost from './FeedPost'

function Feed({
  posts
}) {
  return (
    <div className="Feed">
      {
        posts.map(post => (
          <FeedPost
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  )
}

export default Feed