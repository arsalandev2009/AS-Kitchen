import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Cart, Checkout, ErrorPage, Home, Login, Menu, Myorders, Productsdetail, Signup } from "../screens/screens";
import { Allmenucard } from "../component/component";
import ProtectedRouting from "../protectedrouting/ProtectedRouting";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productsdetail/:key" element={<Productsdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<ProtectedRouting> <Checkout /> </ProtectedRouting>} />

          <Route path="/menu" element={<Menu />}>
            <Route index element={<Allmenucard category="all"/>} />
            <Route path="allmenu" element={<Allmenucard category="all"/>} />
            <Route path="biryanimenu" element={<Allmenucard category='biryani'/>}/>
            <Route path="burgermenu" element={<Allmenucard category="burger"/>}/>
            <Route path="pizzamenu" element={<Allmenucard category='pizza'/>}/>
            <Route path="drinkmenu" element={<Allmenucard category='drink'/>}/>
            <Route path="desertmenu" element={<Allmenucard category='desert'/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
