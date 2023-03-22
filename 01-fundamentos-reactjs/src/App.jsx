import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css'
import './global.css';
import { Sidebar } from './components/SideBar';

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
