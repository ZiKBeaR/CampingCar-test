import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
      <Routes>
        <Route path='/home' element={<Home />} component={Home}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App