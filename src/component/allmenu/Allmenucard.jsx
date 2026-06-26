import React, { useState } from 'react'
import Allmenu from './Allmenu'
import {Link} from 'react-router-dom'
import './Allmenucard.css'
function Allmenucard({category}) {

    const [search, setSearch ] =useState('')
  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  const filteredProducts = Allmenu.filter((item) => (category === "all" || item.category === category) && item.name.toLowerCase().includes(search.toLowerCase()) );

  return (
         <>
         
         <div>
              <input className='menu-content-input' type="text"  placeholder='Search food ....' autoFocus onChange={handleChange}/>
            </div>
    <div className='allmenu-container'>
     {filteredProducts.map((items) => (
              <Link to={`/productsdetail/${items.key}`} key={items.key} className="allmenu-cards">
                <div className="allmenu-cards-image">
                <div className='allmenu-cards-image-discount'>{items.discount}</div>
                  <img className='allmenu-cards-image-img' src={items.image} alt={items.name} width={280}/>
                </div>
                <div className="allmenu-lower">
                  <h2 className="allmenu-cards-h2"> {items.name}</h2>
                <h4 className="allmenu-cards-p">Rs: {items.price}</h4>
                <del className="allmenu-cards-rating">Rs: {items.discountedprice}</del>
                <button className='allmenu-button'>Buy Now</button>
                </div>

              </Link>
            ))}
    </div>
         </>
  )
}

export default Allmenucard
