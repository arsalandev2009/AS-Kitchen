import React, { useState } from "react";
import Easypaisa from "../../../assets/easypaisa.png";
import "./Checkout.css";
import { Header } from "../../../component/component";
import { useNavigate } from "react-router-dom";

function Checkout() {
 const navigate = useNavigate()
  const [paymentvalue, setPaymentvalue] = useState();
  const handleCheckoutChange = (e) => {
    setPaymentvalue(e.target.value);
  };


  const handleOrderdone = (e) => {
    e.preventDefault()
    
   const cartData = JSON.parse(localStorage.getItem('cartdata')) || []
   
   const myOrder =JSON.parse(localStorage.getItem('orders'))||[]

   myOrder.push({
    id:Date.now(),
items:cartData,
date : new Date().toLocaleDateString("en-PK"),
time : new Date().toLocaleTimeString("en-PK")
  })

  localStorage.setItem("orders",JSON.stringify(myOrder))

  localStorage.removeItem('cartdata')
    alert("Order placed Successfully");
    navigate('/menu')
    
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="checkout-form-container">
        <h2 className="checkout-form-title">Delivery Information</h2>

        <form onSubmit={handleOrderdone} className="checkout-form">
          <div className="checkout-form-group">
            <label className="checkout-label">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="checkout-input"
              required
            />
          </div>

          <div className="checkout-form-group">
            <label className="checkout-label">Phone Number</label>

            <input
              type="number"
              placeholder="Enter your phone number"
              className="checkout-input"
              required
            />
          </div>

          <div className="checkout-form-group">
            <label className="checkout-label">Address</label>

            <textarea
              placeholder="Enter your complete address"
              className="checkout-textarea"
              required
            ></textarea>
          </div>

          <div className="checkout-form-group">
            <label className="checkout-label">Payment Method</label>

            <div className="payment-options">
              <label className="payment-option">
                <input
                  className="payment-option-input"
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  onChange={handleCheckoutChange}
                  defaultChecked
                />
                Cash On Delivery
              </label>

              <div className="payment-option-easypaisa">
                <p className="payment-option-easypaisa-p1">
                  <input
                    className="payment-option-input-2"
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    onChange={handleCheckoutChange}
                  />
                  Online payment
                </p>

                <p className="payment-option-easypaisa-p">
                  <img src={Easypaisa} alt="" width={40} />
                  Easypaisa : 03408632479
                </p>
              </div>

              {paymentvalue=="online"  && (
             <div className="payment-ss">
                   <label >
                    Payment Screenshot <br />
                    </label>
                  <input
                    className="payment-ss-input"
                    type="file"     
                    required          
                  />
             </div>
              )}
            </div>
          </div>

          <button type="submit" className="checkout-submit-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
