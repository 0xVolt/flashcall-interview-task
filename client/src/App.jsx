import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import components
import RegisterForm from './Register'
import LoginForm from './Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={ <RegisterForm /> }></Route> */}
          <Route path='/register' element={ <RegisterForm /> }></Route>
          <Route path='/login' element={ <LoginForm /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
