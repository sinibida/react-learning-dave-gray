import React from 'react'
import { Link } from 'react-router-dom'

function FeedPost({
  post
}) {
  return (
    <article className="FeedPost">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='datetime'>{post.datetime}</p>
        <p>
          {
            post.body.length < 25 ? (
              post.body
            ) : (
              `${post.body.slice(0, 25)}...`
            )
          }
        </p>
      </Link>
    </article>
  )
}

export default FeedPost