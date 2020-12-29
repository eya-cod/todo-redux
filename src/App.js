import React from 'react'
import Addtask from './components/Addtask'
import ListTask from './components/ListTask'
import './index.css';

function App() {
  return (
    <header>
    <div className="App">
      <h1>TO DO LIST</h1>
      <Addtask />
      <ListTask />
    </div>
    </header>
  )
}

export default App
