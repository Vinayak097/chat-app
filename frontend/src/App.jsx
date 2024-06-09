import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/signup/Signup'
import Login from './pages/Login/Login'
import Auth from './pages/Auth/Auth'
import Home from './pages/home/Home'
import { Router, Routes ,Route, Navigate} from "react-router-dom"
import Toaster from 'react-hot-toast'

import { useAuthContext } from './contexts/AuthContext'

function App() {
  const {authUser}=useAuthContext();
  const [count, setCount] = useState(0)

  return (
   <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={authUser?<Home></Home>:<Navigate to="/login"></Navigate>}></Route>
      <Route path='/login' element={authUser?<Navigate to="/"></Navigate>:<Login></Login>}></Route>
    <Route path='/signup' element={authUser? <Navigate to="/"></Navigate>:<Signup></Signup>}></Route>
    <Route></Route>
  </Routes>
  <Toaster></Toaster>
  

   </div>

  )
}

export default App
