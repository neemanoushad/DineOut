import React,{useState}from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import images from '../Data/images/logo.jpg'

function Navbar() {
  const [menuopen, setMenuopen] = useState(false)
  return (
    <nav className='navbar'>
      <div className="navbar-brand">
        <img src={images} alt="" />
        Dine Out
        </div>
        <div className="nav-menu" onClick={()=>{
          setMenuopen(!menuopen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      
       <ul className={menuopen ? "open": " "}>
        <li>
       <Link to='/'>Home</Link>
       </li>
        <li>
       <a href="#image">Specials</a>
       </li>
        <li>
        <NavLink to='/about'>About</NavLink>
        </li>
        <li>
        <NavLink to='/service'>Services</NavLink>
        </li>
        <li>
        <NavLink to='/items'>Items</NavLink>
        </li>
       </ul>

    </nav>
  )
}

export default Navbar