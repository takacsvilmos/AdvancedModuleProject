import { useState } from 'react'
import Home from './Home'
import Login from './Login'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App
