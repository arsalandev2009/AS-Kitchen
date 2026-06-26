import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../../component/component";
import { FiTrash2 } from "react-icons/fi";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
 const navigate = useNavigate()
  const handleChecout = () => {
  navigate('/checkout')
  };

  const [collectcartdata, setCollectcartdata] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartdata")) || [];

    const updatedCart = cartData.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCollectcartdata(updatedCart);
  }, []);

  const handleIncrement = (key) => {
    const updatedCart = collectcartdata.map((item) =>
      item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCollectcartdata(updatedCart);
    localStorage.setItem("cartdata", JSON.stringify(updatedCart));
  };

  const handleDecrement = (key) => {
    const updatedCart = collectcartdata.map((item) =>
      item.key === key && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );

    setCollectcartdata(updatedCart);
    localStorage.setItem("cartdata", JSON.stringify(updatedCart));
  };

  const handleDelete = (key) => {
    const updatedCart = collectcartdata.filter((item) => item.key !== key);

    setCollectcartdata(updatedCart);
    localStorage.setItem("cartdata", JSON.stringify(updatedCart));
  };

  const totalPrice = collectcartdata.reduce(
    (total, item) => total + 230 + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div>
      <Header />

      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {collectcartdata.length === 0 ? (
          <div className="cart-empty">
            <h2 className="cart-empty-title">Your Cart is Empty</h2>
          </div>
        ) : (
          <>
            <div className="cart-products">
              {collectcartdata.map((item) => (
                <div className="cart-card" key={item.key}>
                  <div className="cart-image-box">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />
                  </div>

                  <div className="cart-info">
                    <h3 className="cart-product-name">{item.name}</h3>

                    <p className="cart-product-description">
                      {item.description}
                    </p>

                    <p className="cart-product-price">Rs. {item.price}</p>
                  </div>

                  <div className="cart-actions">
                    <button
                      className="cart-qty-btn"
                      onClick={() => handleDecrement(item.key)}
                    >
                      -
                    </button>

                    <span className="cart-qty-count">{item.quantity}</span>

                    <button
                      className="cart-qty-btn"
                      onClick={() => handleIncrement(item.key)}
                    >
                      +
                    </button>

                    <button
                      className="cart-delete-btn"
                      onClick={() => handleDelete(item.key)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Delivery Charges: 230</h3>
              <h2 className="cart-total">Total: Rs. {totalPrice}</h2>

              <button className="cart-checkout-btn" onClick={handleChecout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

  

      <Footer />
    </div>
  );
}

export default Cart;
