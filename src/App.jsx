import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 className='text-3xl font-bold'>React Redux Demonstrated</h2>
      <div className="mt-[4rem]">
        <Profile/>
        <Login/>
        <ChangeColor/>
      </div>
    </div>
  )
}

export default App
