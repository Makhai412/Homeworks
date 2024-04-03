import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstApp from './FirstApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FirstApp/>
  )
}

export default App
