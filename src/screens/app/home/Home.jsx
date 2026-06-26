import React from "react";
import {
  Footer,
  Header,
  HomeCategorycarddata,
  HomeProductsCardData,
} from "../../../component/component";
import Pic1 from "../../../assets/1.png";
import { HiSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {

 const navigate = useNavigate();

  return (
    <div>
      <div className="home-nav">
        <Header />
      </div>

      <div className="home-container">
        <div className="home-content1">
          <div className="home-content1-left">
            <h1 className="home-content1-h1">
              Delicious Food <br />
              <span className="home-content1-h1-span">Delivered Fast</span>
            </h1>
            <p className="home-content1-p">
              Order your favourite food from stop restaurants <br /> and get it
              delivered to your doorstep.
            </p>
            <div className="home-content1-input-container">
              <Link to={'/menu'} className="home-content1-input-div">
                <HiSearch size={25} />
                <input
                  className="home-content1-input"
                  type="text"
                  placeholder="Search for food..."
                />
              </Link>
              <button onClick={ ()=>navigate('/menu')} className="home-content1-input-button">Search</button>
            </div>
          </div>
          <div className="home-content1-right">
            <img src={Pic1} alt="banner" width={400} />
          </div>
        </div>

        <div className="home-content2">
          <h1 className="home-content2-heading">Categories</h1>
          <div className="home-content2-lower">
            {HomeCategorycarddata.map((item) => (
              <Link to={'/menu'} key={item.key} className="home-content2-cards">
                <div className="home-content2-image">
                  <img src={item.image} alt={item.name} width={60} />
                </div>
                <h3>{item.name}</h3>
                {item.totalItems && <p>{item.totalItems}</p>}
              </Link>
            ))}
          </div>
        </div>

        <div className="home-content3">
          <div className="home-content3-upper">
            <h1>Popular Dishes</h1>
            <Link className="home-content3-upper-link" to="/menu">
              View All
            </Link>
          </div>

          <div className="home-content3-lower">
            {HomeProductsCardData.map((items) => (
              <Link to={'/menu'} key={items.key} className="home-content3-lower-cards">
                <div className="home-content3-lower-cards-image"><img src={items.image} alt={items.name} width={280}/></div>
                <div className="home-content3-lower-lower">
                  <h2 className="home-content3-lower-cards-h2"> {items.name}</h2>
                <h4 className="home-content3-lower-cards-p">Rs: {items.price}</h4>
                <div className="home-content3-lower-cards-rating">
                  <img src={items.ratingStar} alt={items.name} width={20}/>
                  <p>{items.rating}</p>
                </div>
                </div>

              </Link>
            ))}
          </div>
        </div>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
