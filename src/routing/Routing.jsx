import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Menu, Productsdetail } from "../screens/screens";
import { Allmenucard } from "../component/component";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productsdetail/:key" element={<Productsdetail />} />

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
