import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
const routes = (
  <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
      <Route path='/dashboard'  element={<Home/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
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
