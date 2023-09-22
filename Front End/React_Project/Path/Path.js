import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import Home from '../Components/Home'

export default function Path() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<Home/>}/>
        <Route path='/Contactus' element={<Home/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}
