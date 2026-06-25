import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart} from 'react-icons/hi'
import { FaCartPlus, FaUser } from 'react-icons/fa'
import './Header.css'
import { FiLogOut, FiMenu } from 'react-icons/fi'


function Header() {

 const  navigate=useNavigate()
  const handleLogout=()=>{
     localStorage.removeItem('token');
      // window.location.reload();
      navigate('/')
  }
  const token =  localStorage.getItem('token');

  const [show,setShow] =useState(false)
  const handleClickUser=()=>{
setShow(!show)
  }
  return (
    <div className='header-container'>
      <div className='header-left'><Link to='/'> <img src={Logo} alt="logo" width={150}/></Link></div>
      <div className='header-right'>
        <ul className='header-right-ul'>
            <li className='header-right-ul'><NavLink className='header-right-link' to='/'>Home</NavLink></li>
            <li className='header-right-ul'><NavLink className='header-right-link' to='/menu'>Menu</NavLink></li>
            <li className='header-right-ul'><NavLink className='header-right-link' to='/aboutus'>About Us</NavLink></li>
            <li className='header-right-ul'><NavLink className='header-right-link' to='/contact'>Contact</NavLink></li>
            <li className='header-right-ul'>  <button className='header-right-button'> <HiOutlineShoppingCart/> Cart ( 0 )</button></li>
            <li className='header-right-ul'>  <button className='header-right-button-user' onClick={handleClickUser}><FiMenu size={30}/> </button></li>

{show && 
(token ?
(<div className='header-user-menu'>
  <ul className='header-user-menu-ul'> 

    <Link  className='header-user-menu-ul-li'> <FaUser /> <p>Your name</p></Link>
    <Link to='/myorders' className='header-user-menu-ul-li'> <FaCartPlus/> <p>My Orders</p></Link>
    <hr className='header-user-menu-hr'/>
    <button onClick={handleLogout} className='header-user-menu-ul-li-button'><FiLogOut/> <p>Logout</p></button>
  </ul>
</div>) :
(<div className='header-user-menu'>
  <ul className='header-user-menu-ul'> 
    <Link to='/login' className='header-user-menu-ul-li'> <FaUser /> <p>Login</p></Link>
    <Link to='/myorders' className='header-user-menu-ul-li'><FaCartPlus/> <p>My Orders</p></Link>

  </ul>
</div>)
)
}

        </ul>
      </div>
    </div>
  )
}

export default Header
