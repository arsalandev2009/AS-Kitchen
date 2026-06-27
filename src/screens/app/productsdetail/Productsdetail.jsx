import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import { AllmenuData, Footer, Header, HomeProductsCardData } from "../../../component/component";
import './Productsdetail.css'
function Productsdetail() {




const handleCart = () => {
  const existingCart =
    JSON.parse(localStorage.getItem("cartdata")) || [];

  const alreadyExists = existingCart.find(
    item => item.key === menuData.key
  );

  if (alreadyExists) {
    alert("Item already exists in cart");
    return;
  }

  existingCart.push({
    ...menuData,
    quantity: 1,
  });

  localStorage.setItem(
    "cartdata",
    JSON.stringify(existingCart)
  );

  alert("Item Added To Cart");
};





  

  const { key } = useParams();

  const menuData = AllmenuData.find(
    item => item.key == key  );

  return (
<div>

<div>
    <Header /> 
</div>

  
  <div className="product-detail">

    <div className="product-detail-left">
      <img className="product-detail-left-img" src={menuData.image} alt={menuData.name} />
    </div>

    <div className="product-detail-right">
      {/* <span className="product-detail-category">
        {menuData.category}
      </span> */}

      <h1 className="product-detail-h1">{menuData.name}</h1>

      <div className="product-detail-rating">
        <img src={menuData.ratingstarfull} alt="rating" width={120} />
 
     
      </div>

      <h2 className="product-detail-h2">Rs. {menuData.price}</h2>

      <p className="product-detail-description">
        Freshly prepared with premium ingredients and
        delivered hot to your doorstep. Enjoy the rich
        taste and quality that makes this dish one of
        our customer favorites.
      </p>

      <div className="product-detail-info">
        <p className="product-detail-p"><strong>Delivery Time:</strong> 20-30 Minutes</p>
        <p className="product-detail-p"><strong>Availability:</strong> In Stock</p>
      </div>

  

      <div className="product-detail-buttons">
        <button className="product-detail-buttons" onClick={handleCart}>Add To Cart</button>
        <button className="product-detail-buttons">Order Now</button>
      </div>
    </div>

  </div>

      <div className="productdetails-suggestion">
            {HomeProductsCardData.map((items) => (
              <Link to={'/menu'} key={items.key} className="productsdetails-suggestion-cards">
                <div className="productsdetails-suggestion-cards-image"><img className="productsdetail-suggestion-cards-img" src={items.image} alt={items.name} width={280}/></div>
                <div className="productsdetails-suggestion-lower">
                  <h2 className="productsdetails-suggestion-cards-h2"> {items.name}</h2>
                <h4 className="productsdetails-suggestion-cards-p">Rs: {items.price}</h4>
                <div className="productsdetails-suggestion-cards-rating">
                  <img src={items.ratingStar} alt={items.name} width={20}/>
                  <p>{items.rating}</p>
                </div>
                </div>
                <button className='productsdetails-suggestion-button'>Buy Now</button>

              </Link>
            ))}
          </div>
  


<div>
    <Footer />
</div>

</div>
  );
}

export default Productsdetail;