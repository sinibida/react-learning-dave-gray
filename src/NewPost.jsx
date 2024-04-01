import React from 'react'

function NewPost({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) {
  return (
    <main className="NewPost">
      <h1 className='title'>New Post</h1>

      <form 
      className="new-post-form" 
      onSubmit={handleSubmit}
      >
        <label htmlFor='post-title'>Title</label>
        <input
          id="post-title"
          type='text'
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor='post-body'>Body</label>
        <textarea
          id="post-body"
          type='text'
          required
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        />
        <input
          type="submit"
          value="Post"
        />
      </form>
    </main>
  )
}

export default NewPost
