import  Header  from './components/Header'
import  Activities  from './components/Activities'
import  Tasks  from './components/Tasks'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Activities />
      </div>
      <div className={styles.tasks}>
        <Tasks />
      </div>
    </div>
  )
}

export default App
