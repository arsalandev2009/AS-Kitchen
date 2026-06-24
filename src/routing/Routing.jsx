import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home, Menu } from '../screens/screens'


function Routing() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default Routing
