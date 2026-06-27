import React, { useState } from "react";
import { Footer, Header } from "../../../component/component";
import "./Myorders.css";
function Myorders() {

  const gettingMyorders = JSON.parse(localStorage.getItem("orders")) || [];

  const deleteHistory=()=>{
      localStorage.removeItem("orders");
window.location.reload()
  }

  setTimeout(
    () => {
      localStorage.removeItem("orders");
    },
    30 * 60 * 1000,
  );
  return (
    <div>
      <div>
        <Header />
      </div>

      {gettingMyorders.length === 0 ? (
        <div className="myorders-empty">
  <h2 className="myorders-empty-title">No Orders Found</h2>
  <p className="myorders-empty-text">
    You haven't placed any orders yet.
  </p>
</div>
      ) : (
        <div className="myorders-card-container">
          {gettingMyorders.map((order) => (

            <div key={order.id} className="myorders-card">

              <div className="myorders-header">
                <h3>Order #{order.id}</h3>
              </div>

              {order.items.map((item) => (
                <div key={item.id} className="myorders-item">
                  <div className="myorders-item-left">
                    <h4 className="myorders-item-name">{item.name}</h4>
                    <p className="myorders-item-price">Rs. {item.price}</p>
                  </div>
                </div>
              ))}

<div className="myorders-footer">
  <div className="myorders-date">
     {order.date}
  </div>

  <div className="myorders-time">
     {order.time}
  </div>
</div>

            </div>
          ))}
        </div>
      )}

 
{gettingMyorders.length > 0 && (
  <div className="myorders-delete-container">
  <button
    className="myorders-delete-btn"
    onClick={deleteHistory}
  >
    Delete History
  </button>
</div>
)}

<div><Footer/></div>
    </div>
  );
}

export default Myorders;
