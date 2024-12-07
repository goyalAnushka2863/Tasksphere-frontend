import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
const routes = (
  <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
      <Route path='/dashboard' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/signup' exact element={<SignUp/>}/>
    </Routes>
  </Router>
)
function App() {

  return (
    <>
      {routes}
    </>
  )
}

export default App
