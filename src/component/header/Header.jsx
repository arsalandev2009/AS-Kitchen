import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart} from 'react-icons/hi'
import './Header.css'
function Header() {
  return (
    <div className='header-container'>
      <div className='header-left'><Link to='/'> <img src={Logo} alt="logo" width={150}/></Link></div>
      <div className='header-right'>
        <ul className='header-right-ul'>
            <li className='header-right-ul'><Link className='header-right-link' to='/'>Home</Link></li>
            <li className='header-right-ul'><Link className='header-right-link' to='/menu'>Menu</Link></li>
            <li className='header-right-ul'><Link className='header-right-link' to='/category'>Categories</Link></li>
            <li className='header-right-ul'><Link className='header-right-link' to='/aboutus'>About Us</Link></li>
            <li className='header-right-ul'><Link className='header-right-link' to='/contact'>Contact</Link></li>
            <li className='header-right-ul'>  <button className='header-right-button'> <HiOutlineShoppingCart/> Cart ( 0 )</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
