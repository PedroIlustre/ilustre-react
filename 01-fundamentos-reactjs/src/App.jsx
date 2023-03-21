import { useState } from 'react'
import { Post } from './Post'
import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Pedro Ilustre"
        content="Some things"
      />
      <Post 
        author="Rhadamez Hercilio"
        content="Some more content"
      />
      <Post />
    </div>
  )
}

export default App
