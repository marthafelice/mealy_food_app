import React, { useState } from "react";
import "../../styles/RestuarantMenu.css";
import HomepageNav from "../HomepageNav";
import Pancake from "../../images/pancake.png";
import Star from "../../images/star.png";
import Search from "../../images/search.png";
import Menus from "./Menu";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Footer from "../Footer";

const RestuarantMenu = () => {
  return (
    <>
      <HomepageNav />
      <div className='breadCrumb '>
        <img src={Pancake} alt='pancake' />
      </div>
      <div className='page-container'>
        <div className='menu-highlight'>
          <div className='menu-title'>
            <h1>Breakfast Hub</h1>
            <p>Good food to start your day right</p>
            <div className='rating'>
              <span>
                <img src={Star} alt='' />
                <img src={Star} alt='' />
                <img src={Star} alt='' />
                <img src={Star} alt='' />
              </span>
              <span className='rating-stats'>4.6 Excellent (70+)</span>
            </div>
            <div className='search'>
              <input type='text' placeholder='Search menu items' />
              <img src={Search} alt='' />
            </div>
            <Tab />
          </div>
        </div>
        <Cart />
      </div>
      <Footer />
    </>
  );
};
const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const categories = ["All", ...new Set(Menus.map((menu) => menu.category))]; // Get unique categories
  const filteredMenus =
    activeTab === 0
      ? Menus
      : Menus.filter((menu) => menu.category === categories[activeTab]);
  const dispatch = useDispatch();

  const handleAddToCart = (menuItem) => {
    dispatch(addToCart(menuItem));
  };

  return (
    <div>
      <div className='category'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={` ${index === activeTab ? "activeTab" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {category}
          </div>
        ))}
      </div>
      <div>
        {filteredMenus.map((menu, index) => (
          <div className='menu-box' key={index}>
            <div>
              <h2>{menu.type}</h2>
              <p>{menu.description}</p>
              <p className='price'>$ {menu.price}</p>
              <button
                onClick={() => handleAddToCart(menu)}
                className='add-to-cart-btn'
              >
                Add to Cart
              </button>
            </div>
            <img src={menu.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestuarantMenu;
