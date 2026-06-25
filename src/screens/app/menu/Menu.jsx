import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink,Link } from 'react-router-dom'
import { AllmenuData, Footer, Header } from '../../../component/component'
import './Menu.css'
function Menu() {


  
  const allCount = AllmenuData.length;

  const burgerCount = AllmenuData.filter(item => item.category === "burger").length;
  
  const biryaniCount = AllmenuData.filter(item => item.category === "biryani").length;

  const pizzaCount = AllmenuData.filter(item => item.category === "pizza").length;

  const drinkCount = AllmenuData.filter(item => item.category === "drink").length;

  const desertCount = AllmenuData.filter(item => item.category === "desert").length;

  return (
    <div>

      <div>
        <Header />
      </div>

      <div className='menu-container'>

     <div className='menu-sidebar'>
         <h1>Categories</h1>
        
        <div className='menusidebar-list'>
            <li className='menusidebar-li'><NavLink to='/menu' end className='menusidebar-link'><p>All</p> <p className='menusidebar-p'>{allCount}</p></NavLink></li>
            <li className='menusidebar-li'><NavLink to='biryanimenu' className='menusidebar-link'>Biryani <p className='menusidebar-p'>{biryaniCount}</p></NavLink></li>
            <li className='menusidebar-li'><NavLink to='burgermenu'className='menusidebar-link'>Burger <p className='menusidebar-p'>{burgerCount}</p></NavLink></li>
            <li className='menusidebar-li'><NavLink to='pizzamenu'className='menusidebar-link'>Pizza <p className='menusidebar-p'>{pizzaCount}</p></NavLink></li>
            <li className='menusidebar-li'><NavLink to='drinkmenu'className='menusidebar-link'>Drink <p className='menusidebar-p'>{drinkCount}</p></NavLink></li>
            <li className='menusidebar-li'><NavLink to='desertmenu'className='menusidebar-link'>Desert <p className='menusidebar-p'>{desertCount}</p></NavLink></li>
           

        </div>

     </div>

     <div className='menu-content'> 
   
     <div>
      <Outlet />
     </div>
     </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Menu
