import React from 'react'
import logo from '../../assets/footer-logo.png'
import { FaCopyright, FaFacebookF, FaHeart, FaInstagram, FaRegCopyright, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TfiLocationPin } from 'react-icons/tfi'
import { FiMail } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>

     <div className="footer-container-inner">
       <div className='footer-container-upper'> 

        <div className='footer-container-upper-box1'>
          <Link to='/'><img src={logo} alt="Logo" width={220} /></Link>
          <p className='footer-container-upper-box1-p'>Delicious food delivered fast to <br /> your doorstep. Your satisfaction <br /> is our priority</p>
          <div className='footer-container-upper-box1-links'>
            <a href="https://www.facebook.com/arsalanshabbir2009"><FaFacebookF color='white' size={30}/></a>
            <a href=""><FaTwitter color='white' size={30}/></a>
            <a href=""><FaInstagram color='white' size={30}/></a>
            <a href=""><FaYoutube color='white' size={30}/></a>
          </div>
        </div>

        <hr className='footer-container-hr1'/>

        <div className='footer-container-upper-box2'>
          <h1>Quick Links</h1>
          <br />
          <br />
          <ul className='footer-container-upper-ul'>
            <li className='footer-container-upper-li'><Link to='/'>Home</Link></li>
            <li className='footer-container-upper-li'><Link to='/menu'>Menu</Link></li>
            <li className='footer-container-upper-li'><Link to='/menu'>Categories</Link></li>
            <li className='footer-container-upper-li'><Link to='/aboutus'>About Us</Link></li>
            <li className='footer-container-upper-li'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className='footer-container-upper-box3'>
          <h1>Customer Service</h1>
          <br />
          <br />
          <ul className='footer-container-upper-ul'>
            <li className='footer-container-upper-li'><Link to=''>My Orders</Link></li>
            <li className='footer-container-upper-li'><Link to=''>Track Order</Link></li>
            <li className='footer-container-upper-li'><Link to=''>FAQs</Link></li>
            <li className='footer-container-upper-li'><Link to=''>Terms & Conditions</Link></li>
            <li className='footer-container-upper-li'><Link to=''>Privacy Policy</Link></li>
          </ul>
        </div>

        <div className='footer-container-upper-box4'>
          <h1>Contact Us</h1>
          <br />
          <br />
          <ul className='footer-container-upper-ul'>
            <li className='footer-container-upper-li'> <FaWhatsapp size={20}/><a href='https://wa.me/923163031163'>+92 316 3031163</a></li>
            <li className='footer-container-upper-li'> <FiMail size={20}/><a href='mailto:muhammadarsalanshabbir009@gmail.com'>muhammadarsalan....gmail.com</a></li>
            <li className='footer-container-upper-li'> <TfiLocationPin size={20}/><a href='https://www.google.com/maps/place/Orangi+Town,+Karachi,+Pakistan'>Orangi town, Karachi, Pakistan</a></li>
          </ul>
        </div>
       </div>

      <hr  className='footer-container-hr'/>
      <div className='footer-container-lower'> 
        
        <FaRegCopyright /> 2026 <i>AS-Kitchen.</i> Made by Md.Arsalan <FaHeart color='red'/>
      </div>
     </div>
     
    </div>

  )
}

export default Footer