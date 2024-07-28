
import React ,{useState}from 'react'
// import Navbar from './Components/Navbar'
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/Home/About/About'
// import Service from './pages/Home/About/Service/Service'
// import Hookss from './pages/Home/About/Hookss'
// import Footer from './Components/Footer/Footer'
import RouteLayout from './RoutesLayout/RouteLayout'
import './App.css'



function App() {

  return (
  
    <div className='App'>
      {/* <Hookss/> */}
<RouteLayout/>

    
  
    </div>
  )
}

export default App