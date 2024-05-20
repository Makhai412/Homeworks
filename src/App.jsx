import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Rutas } from './Components/Rutas'


function App() {
  
  return (
    <>
      <Router>
        <Rutas />
      </Router>
    </>
  )
}

export default App
