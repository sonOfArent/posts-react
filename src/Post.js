import React from 'react'

const Post = ({ userId, id, title, body }) => {
  return (
    <div className='post'>
      <div className="title">
        {title}
      </div>
      <div className="body">
        {body}
      </div>
    </div> 
  )
}

export default Post