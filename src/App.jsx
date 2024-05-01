import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'
import Navbar1 from './component/Navbar'
import Pdetails from './component/Pdetails'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/Product-shop/' element={<Home/>} />
      <Route path='/Product-shop/home' element={<Home/>} />
      <Route path='/Product-shop/cart' element={<Cart/>} />
      <Route path='/Product-shop/product/:id' element={<Pdetails/>} />  
      <Route>404 Not Found!</Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
