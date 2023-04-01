import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/SideBar';
import styles from './App.module.css'
import './global.css';


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
              author="Pedro Ilustre"
              content="Some things"
            />
            <Post 
              author="Rhadamez Hercilio"
              content="Some more content"
            />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
