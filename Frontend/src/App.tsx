import { useState } from 'react'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
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
          <Route path='/signup' element ={<SignUp/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App
