import React from 'react'

import { useParams, Link } from 'react-router-dom'

function PostPage({
  posts,
  handleDelete,
}) {
  const { id } = useParams();
  const post = posts.find(x => x.id.toString() === id);

  console.log(id);

  return (
    <main className="PostPage">
      <article className='post'>
        {
          post ? <>
            <h1 className='title'>{post.title}</h1>
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
            <button 
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </> : <>
            <p>Post Not Found</p>
            <Link to={"/"}>
              &gt; Go to the Homepage.
            </Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage
