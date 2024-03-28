import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import components
import RegisterForm from './Register'
import LoginForm from './Login'
import Home from './Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={ <RegisterForm /> }></Route>
          <Route path='/login' element={ <LoginForm /> }></Route>
          <Route path='/home' element={ <Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
