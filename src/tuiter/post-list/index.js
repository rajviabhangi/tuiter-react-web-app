import React from 'react'
import PostItem from './post-item'
import posts from './posts.json';

function PostList() {
  return (
    <>
        <ul className="list-group">
            { posts.map(p => <PostItem post={p} key={p._id}/>) }
        </ul>
    </>
  )
}

export default PostList