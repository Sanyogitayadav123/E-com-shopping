import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPages from '../components/landingPage'
import ShopPage from '../components/Shop'
import Cart from '../components/Cart'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPages/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/cart' element={<Cart/>}/>


    </Routes>
  )
}

export default AllRoutes