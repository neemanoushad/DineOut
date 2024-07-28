import React from 'react'
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom' 
import Navbar from'../Components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Service from '../pages/Service/Service'
import Footer from '../Components/Footer/Footer'
import FoodItems from '../Components/FoodItems/FoodItems'
import FoodDetails from '../Components/FoodDetils/FoodDetails'

function RouteLayout() {
  return (
 <>
 <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DineOut' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/items' element={<FoodItems/>}/>
        <Route path='/foodDetails/:id' element={<FoodDetails/>}/>
       

    </Routes>

 </Router>
 <Footer/>
 </>
  )
}

export default RouteLayout