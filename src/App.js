import React, { useEffect, useState, useReducer } from 'react'
import Post from './Post'

const reducer = (columns, action) => {
  switch (action.type) {
    case 'init':
      return {
        column1: action.payload.column1,
        column2: action.payload.column2,
        column3: action.payload.column3
      }
    
    default:
      return columns
  }
}

const App = () => {

  // I initially set the state to null so as not to create errors.
  const [posts, setPosts] = useState(null)
  const [columns, dispatch] = useReducer(reducer, null)

  // I wrap the fetch data in an initializing useEffect, so it only runs once.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      // I set posts immediately to data.
      .then(data => {
        setPosts(data)

        let column1 = []
        let column2 = []
        let column3 = []
        
        for (let i = 0; i < data.length; i++) {
          let postData = data[i]
          
          switch (i % 3) {
            case 0:
              column1.push(postData)
              break
            
            case 1:
              column2.push(postData)
              break

            case 2:
              column3.push(postData)
              break
          }
        }
        
        dispatch({ type: 'init', payload: { column1, column2, column3 } })

      })

  }, [])
  
  
  // I use short-circuiting so my posts won't even try to render until posts is set to something.

  // I need to separate the posts into three separate columns, then run for loops to render a post one at a time evenly across the columns.
  return (
    <div className="container">
      <div className='app'>
        <div className="column">
          {columns && columns.column1.map(post =>
            <Post { ...post } key={ post.id } />)}
        </div>
        <div className="column">
          {columns && columns.column2.map(post =>
            <Post { ...post } key={ post.id } />)}
        </div>
        <div className="column">
          {columns && columns.column3.map(post =>
            <Post { ...post } key={ post.id } />)}
        </div>
      </div>
    </div>
  )
}

export default App