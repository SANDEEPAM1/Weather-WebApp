
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'

function App() {
  

  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
        </Routes>
       
    </>
  )
}

export default App
