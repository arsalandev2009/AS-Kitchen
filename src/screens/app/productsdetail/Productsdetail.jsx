import React from "react";
import { useParams } from "react-router-dom";
import { AllmenuData } from "../../../component/component";

function Productsdetail() {
  const { key } = useParams();

  const menudata = AllmenuData.find(
    item => item.key == key  );

  return (
    <div>
      <h1>{menudata.name}</h1>
      <img src={menudata.image} alt={menudata.name} width={100}/>
      <p>{menudata.price}</p>
    </div>
  );
}

export default Productsdetail;