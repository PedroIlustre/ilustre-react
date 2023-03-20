import { useState } from 'react'
import { Post } from './Post'
import './App.css'

function App() {
  return (
    <di>
      <Post 
        author="Pedro Ilustre"
        content="Some things"
      />
      <Post 
        author="Rhadamez Hercilio"
        content="Some more content"
      />
      <Post />
    </di>
  )
}

export default App
