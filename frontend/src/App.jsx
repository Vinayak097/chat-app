import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/signup/Signup'
import Login from './pages/Login/Login'
import Auth from './pages/Auth/Auth'
import Home from './pages/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='p-4 h-screen flex items-center justify-center'>
    
  {/* <Login></Login>
  <Signup></Signup>
  
  <Auth></Auth> */}
  
  <Home></Home>

    
    
   </div>

  )
}

export default App
